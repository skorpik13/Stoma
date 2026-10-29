<?php
// === БЛОК 1: СЕРВЕРНАЯ ЛОГИКА И ПОСТРАНИЧНЫЙ ОБХОД API (PHP) ===
if (isset($_GET['action']) && $_GET['action'] === 'get_data') {
    if (session_status() === PHP_SESSION_NONE) {
        session_start();
    }
    header('Content-Type: application/json');
    ini_set('display_errors', 0);

    // 1. Подключаем файл конфигурации
    if (file_exists('config.php')) {
        include 'config.php';
    } else {
        echo json_encode(["error" => "Config file not found"]);
        exit;
    }

    // Проверяем наличие обязательных параметров
    if (!isset($loginfw) || !isset($passwordfw)) {
        echo json_encode(["error" => "Variables \$loginfw or \$passwordfw отсутствуют в config.php"]);
        exit;
    }

    // Задаем ID устройства из config.php, либо используем дефолтный
    $deviceId = isset($targetDeviceId) ? $targetDeviceId : "869531075890354";
    $currentToken = !empty($_SESSION['fw_token']) ? $_SESSION['fw_token'] : (isset($tokenfw) ? $tokenfw : '');

    // Вспомогательная функция для cURL-запросов
    if (!function_exists('makeRequest')) {
        function makeRequest($url, $token = null) {
            $ch = curl_init($url);
            curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
            curl_setopt($ch, CURLOPT_FOLLOWLOCATION, true);
            curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
            if ($token) {
                curl_setopt($ch, CURLOPT_HTTPHEADER, [
                    'Accept: application/json, text/plain, */*',
                    'Authorization: Bearer ' . $token
                ]);
            }
            $response = curl_exec($ch);
            $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
            curl_close($ch);
            return ['code' => $httpCode, 'body' => $response];
        }
    }

    // Логика автоматического продления/получения Bearer-токена
    if (empty($currentToken)) {
    
        $authData = ["username" => $loginfw, "password" => $passwordfw, "rememberMe" => true];
        $ch = curl_init($authUrl);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_POST, true);
        curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($authData));
        curl_setopt($ch, CURLOPT_HTTPHEADER, ['Content-Type: application/json']);
        curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
        $authResponse = curl_exec($ch);
        curl_close($ch);
        $authResult = json_decode($authResponse, true);
        if (isset($authResult['id_token'])) {
            $_SESSION['fw_token'] = $authResult['id_token'];
            $currentToken = $_SESSION['fw_token'];
        } else {
            echo json_encode(["error" => "Авторизация на FirstWater неуспешная"]);
            exit;
        }
    }

    $term = isset($_GET['term']) ? $_GET['term'] : 'DAYS';
    $from = isset($_GET['from']) ? $_GET['from'] : '';
    $to   = isset($_GET['to']) ? $_GET['to'] : '';

    $output = [
        "chart" => [],
        "sensors" => [
            "simBalance" => "—", "signalStrength" => "—", "tds" => "—", 
            "temperature" => "—", "waterInput" => "—", "cleanerStatus" => "В работе"
        ]
    ];

    // --- ПОЛУЧЕНИЕ ДАННЫХ ДЛЯ ГРАФИКА ---
    if ($term === 'CUSTOM') {
        // Умная постраничная выгрузка транзакций по 2000 штук (обход лимитов Spring Data)
        $serverData = [];
        $page = 0;
        $pageSize = 2000;

        while (true) {
            $graphUrl = "https://monitoring.firstwater.ru/api/sale-info-messages?deviceId=" . $deviceId . "&size=" . $pageSize . "&page=" . $page . "&from=" . $from . "&to=" . $to . "&sort=timestamp,asc";
            $graphResult = makeRequest($graphUrl, $currentToken);
            
            // Если сессия протухла во время цикла, обрабатываем 401 ошибку
            if ($graphResult['code'] == 401) {
                break; 
            }

            $pageData = json_decode($graphResult['body'], true);
            if (!is_array($pageData) || empty($pageData)) {
                break;
            }

            $serverData = array_merge($serverData, $pageData);
            if (count($pageData) < $pageSize) {
                break; // Дошли до последней страницы
            }
            $page++;
            if ($page > 40) break; // Защита-предохранитель от зависания скрипта
        }

        // Агрегируем сырые часовые/поминутные логи транзакций в суточные бары для графика
        $aggregated = [];
        foreach ($serverData as $msg) {
            if (!isset($msg['timestamp'])) continue;
            $timestampSeconds = ($msg['timestamp'] > 9999999999) ? intval($msg['timestamp'] / 1000) : intval($msg['timestamp']);
            $dayTimestamp = strtotime(date('Y-m-d 00:00:00', $timestampSeconds));
            
            if (!isset($aggregated[$dayTimestamp])) {
                $aggregated[$dayTimestamp] = ["from" => $dayTimestamp, "data" => ["amount" => 0, "quantity" => 0]];
            }
            $aggregated[$dayTimestamp]['data']['amount'] += isset($msg['amount']) ? $msg['amount'] : 0;
            $liters = isset($msg['quantity']) ? $msg['quantity'] : (isset($msg['liters']) ? $msg['liters'] : 0);
            $aggregated[$dayTimestamp]['data']['quantity'] += $liters;
        }
        ksort($aggregated);
        $output['chart'] = array_values($aggregated);

    } else {
        // Стандартный быстрый запрос к готовым графикам DAYS/MONTHS/YEARS
        $graphUrl = "https://monitoring.firstwater.ru/api/sales_graph/" . $deviceId . "?term=" . urlencode($term);
        $graphResult = makeRequest($graphUrl, $currentToken);
        $serverData = json_decode($graphResult['body'], true);
        if (is_array($serverData)) {
            $output['chart'] = $serverData;
        }
    }


    // --- ПОЛУЧЕНИЕ ТЕЛЕМЕТРИИ ДАТЧИКОВ ---
    $infoUrl = "https://monitoring.firstwater.ru/api/devices/";
    $infoResult = makeRequest($infoUrl, $currentToken);
    $sensorsList = json_decode($infoResult['body'], true);

    if (is_array($sensorsList)) {
        foreach ($sensorsList as $sensor) {
            if (!isset($sensor['name']) || !isset($sensor['value'])) continue;
            $val = round($sensor['value'], 2);
            switch ($sensor['name']) {
                case 'simBalance': $output['sensors']['simBalance'] = $val . " руб."; break;
                case 'signalStrength': $output['sensors']['signalStrength'] = $val . " из 31"; break;
                case 'tds': $output['sensors']['tds'] = $val . " ppm"; break;
                case 'temperature': $output['sensors']['temperature'] = $val . " °C"; break;
                case 'waterInput': $output['sensors']['waterInput'] = $val . " м³"; break;
            }
        }
    }

    // Запрос статуса системы очистки
    $deviceUrl = "https://monitoring.firstwater.ru/api/info/" . $deviceId;
    $deviceResult = makeRequest($deviceUrl, $currentToken);
    $deviceData = json_decode($deviceResult['body'], true);
    if (is_array($deviceData) && isset($deviceData['lastCleanerStatus']['status'])) {
        $statusCodes = ["Полный бак", "Фильтрация", "Промывка мембран", "Нет входящей воды!", "Авария: Затопление!", "Настройка"];
        $code = intval($deviceData['lastCleanerStatus']['status']);
        $output['sensors']['cleanerStatus'] = isset($statusCodes[$code]) ? $statusCodes[$code] : "В работе";
    }


    echo json_encode($output);
    exit;
}
?>

<!-- === БЛОК 2: ИНТЕРФЕЙС И ВЕБ-СТРАНИЦА (HTML + CSS) === -->
<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <title>Мониторинг продаж воды</title>
    <!-- Подключаем библиотеку Chart.js для отрисовки графиков -->
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
    <style>
        body { font-family: 'Segoe UI', Arial, sans-serif; margin: 30px; background: #f5f7fa; color: #333; }
        h2 { color: #2c3e50; }
        .controls-panel { background: #fff; padding: 20px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.05); margin-bottom: 20px; display: flex; gap: 20px; align-items: center; flex-wrap: wrap; }
        .btn-group button { background: #e0e0e0; border: none; padding: 10px 25px; cursor: pointer; border-radius: 4px; font-weight: bold; font-size: 14px; transition: 0.2s; color: #555; }
        .btn-group button.active { background: #007bff; color: white; }
        .btn-group button:hover:not(.active) { background: #d5d5d5; }
        .date-group { display: flex; align-items: center; gap: 10px; border-left: 1px solid #ccc; padding-left: 20px; }
        .date-group input { padding: 8px; border: 1px solid #ccc; border-radius: 4px; font-size: 14px; }
        .date-group button { background: #28a745; color: white; border: none; padding: 9px 20px; border-radius: 4px; cursor: pointer; font-weight: bold; font-size: 14px; transition: 0.2s; }
        .date-group button:hover:not(:disabled) { background: #218838; }
        
        /* Стили интеграции Flexbox и виджетов телеметрии */
        .dashboard-container { display: flex; gap: 20px; max-width: 1200px; flex-wrap: wrap; }
        .chart-container { background: #fff; padding: 20px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.05); flex: 3; min-width: 600px; height: 500px; }
        .chart-loading-overlay {
            position: absolute; top: 0; left: 0; width: 100%; height: 100%;
            background: rgba(255, 255, 255, 0.85);
            display: none; align-items: center; justify-content: center;
            font-size: 20px; font-weight: bold; color: #007bff;
            border-radius: 8px; z-index: 10;
        }
        .sensor-container { background: #fff; padding: 20px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.05); flex: 1; min-width: 280px; }
        .sensor-container h3 { margin-top: 0; color: #2c3e50; border-bottom: 2px solid #f5f7fa; padding-bottom: 10px; }
        .sensor-item { display: flex; justify-content: space-between; padding: 12px 0; border-bottom: 1px dashed #f5f7fa; font-size: 14px; }
        .sensor-item span:first-child { color: #7f8c8d; font-weight: 500; }
        .sensor-item span:last-child { font-weight: bold; color: #2c3e50; }
        .status-online { background: #28a745; color: white; padding: 2px 8px; border-radius: 4px; font-size: 12px; }
        .date-group input:disabled, .date-group button:disabled { background: #e9ecef; cursor: not-allowed; color: #adb5bd; border-color: #ced4da; }
    </style>
</head>
<body>
 
    <h2>Аналитика продаж автомата</h2>
 
    <div class="controls-panel">
        <div class="btn-group">
            <button id="btn-DAYS" class="active" onclick="changeTerm('DAYS')">День</button>
            <button id="btn-MONTHS" onclick="changeTerm('MONTHS')">Месяц</button>
            <button id="btn-YEARS" onclick="changeTerm('YEARS')">Год</button>
            <button id="btn-CUSTOM" onclick="changeTerm('CUSTOM')">Период</button>
        </div>
 
        <div class="date-group">
            <label for="date-from">С:</label>
            <input type="date" id="date-from" disabled>
            <label for="date-to">По:</label>
            <input type="date" id="date-to" disabled>
            <button id="btn-apply-date" onclick="applyDateFilter()" disabled>Применить даты</button>
        </div>
    </div>
 
    <div class="dashboard-container">
        <div class="chart-container">
            <div id="chart-loader" class="chart-loading-overlay">Загрузка данных...</div>
            <canvas id="salesChart"></canvas>
        </div>

        <div class="sensor-container">
            <h3>Состояние автомата</h3>
            <div class="sensor-item"><span>Статус осмоса:</span><span id="sensor-cleaner" class="status-online">Загрузка...</span></div>
            <div class="sensor-item"><span>Баланс SIM-карты:</span><span id="sensor-sim">—</span></div>
            <div class="sensor-item"><span>Термометр платы:</span><span id="sensor-temp">—</span></div>
            <div class="sensor-item"><span>Минерализация (TDS):</span><span id="sensor-tds">—</span></div>
            <div class="sensor-item"><span>Сигнал GSM сети:</span><span id="sensor-signal">—</span></div>
            <div class="sensor-item"><span>Входящий водомер:</span><span id="sensor-water">—</span></div>
        </div>
    </div>

<!-- === БЛОК 3: ЛОГИКА И ОБРАБОТКА ДАННЫХ (JAVASCRIPT) === -->
<script>
// Глобальные переменные для хранения состояния фильтров
let currentTerm = 'DAYS';
let salesChart = null;

// Настройка пустого графика при открытии страницы
function initChart() {
    const ctx = document.getElementById('salesChart').getContext('2d');
    salesChart = new Chart(ctx, {
        type: 'bar', // Столбцовая диаграмма
        data: {
            labels: [],
            datasets: [
                {
                    label: 'Выручка (руб.)',
                    data: [],
                    // Современный кораллово-розовый оттенок
                    backgroundColor: 'rgba(255, 99, 132, 0.75)', 
                    borderColor: 'rgba(255, 99, 132, 1)',
                    hoverBackgroundColor: 'rgba(255, 99, 132, 0.95)',
                    borderWidth: 1,
                    borderRadius: 4, // Легкое стильное округление углов у столбцов
                    yAxisID: 'y'
                },
                {
                    label: 'Продано (л)',
                    data: [],
                    // Современный лазурно-синий оттенок
                    backgroundColor: 'rgba(54, 162, 235, 0.75)', 
                    borderColor: 'rgba(54, 162, 235, 1)',
                    hoverBackgroundColor: 'rgba(54, 162, 235, 0.95)',
                    borderWidth: 1,
                    borderRadius: 4, // Легкое стильное округление углов у столбцов
                    yAxisID: 'y1'
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    type: 'linear',
                    position: 'left', // Рубли слева
                    beginAtZero: true,
//                    grace: '5%', // Добавляет всего 5% запаса над самым высоким столбцом вместо округления до сотен
                    title: { display: true, text: 'Выручка (руб.)' }
                },
                y1: {
                    type: 'linear',
                    position: 'right', // Литры справа
                    beginAtZero: true,
                    grid: { drawOnChartArea: false }, // Убираем наложение сетки
                    title: { display: true, text: 'Объем (л)' }
                }
            }
        }
    });
}

// Превращаем Unix-время от API в читаемые подписи для столбцов
function formatLabel(timestamp, term) {
    const date = new Date(timestamp * 1000); 
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    
    if (term === 'DAYS') {
        return `${hours}:${minutes}`; // Для дня выводим часы
    } else if (term === 'MONTHS') {
        return `${day}.${month}`; // Для месяца выводим дни
    } else if (term === 'YEARS') {
        const monthNames = ["Янв", "Фев", "Мар", "Апр", "Май", "Июн", "Июл", "Авг", "Сен", "Окт", "Ноя", "Дек"];
        return `${monthNames[date.getMonth()]} ${date.getFullYear()}`; // Для года — месяцы
    }
    return date.toLocaleDateString();
}

// Загрузка данных
async function loadChartData() {
document.getElementById('chart-loader').style.display = 'flex';//показываем "Загрузка данных..."
    // 1. Собираем базовый URL для запроса к нашему PHP
    let url = `sales_chart.php?action=get_data&term=${currentTerm}`;
    
    // Получаем выбранные даты из инпутов календаря "С" и "По"
    const rawFrom = document.getElementById('date-from').value;
    const rawTo = document.getElementById('date-to').value;

    // 2. Если даты выбраны пользователем, переводим их в Unix Timestamp (в секундах)
    if (rawFrom && rawTo) {
        const timestampFrom = Math.floor(new Date(rawFrom).getTime() / 1000);
        // К конечной дате добавляем 86399 секунд (23:59:59), чтобы захватить последний день целиком
        const timestampTo = Math.floor(new Date(rawTo).getTime() / 1000) + 86399;
        
        // Добавляем параметры дат в URL запроса к PHP
        url += `&from=${timestampFrom}&to=${timestampTo}`;
    }

    try {
        // 3. Делаем запрос к PHP (который перенаправит даты на сервер FirstWater)
        const response = await fetch(url);
        const data = await response.json();
        
        if (data.error) {
            alert("Ошибка сервера: " + data.error);
            return;
        }

        const chartDataArray = data.chart ? data.chart : data;
        if (!Array.isArray(chartDataArray)) { return; }

        // 4. Формируем подписи для оси X на основе новых данных от сервера
        const labels = chartDataArray.map(item => formatLabel(item.from, currentTerm));

        // 5. Извлекаем рубли и литры из свежих данных
        const rubles = chartDataArray.map(item => item.data?.amount || 0);
        const liters = chartDataArray.map(item => item.data?.quantity || 0);

        // 6. Передаем массивы в график
        salesChart.data.labels = labels;
        salesChart.data.datasets[0].data = rubles; // Столбцы рублей
        salesChart.data.datasets[1].data = liters; // Столбцы литров

        // 7. НАСТРОЙКА АВТО-МАСШТАБА СЕТКИ (Чтобы шкалы округлялись красиво)
        if (rubles.length > 0 && liters.length > 0) {
            const maxRub = Math.max(...rubles);
            const maxLit = Math.max(...liters);

            let suggestedMaxRub = 0;
            let suggestedMaxLit = 0;
            document.getElementById('chart-loader').style.display = 'none';//прячем "Загрузка данных..."
            if (currentTerm === 'DAYS') {
                suggestedMaxRub = Math.ceil(maxRub / 2) * 2;
                if (suggestedMaxRub < 2) suggestedMaxRub = 2;
                suggestedMaxLit = Math.ceil(maxLit / 2) * 2;
                if (suggestedMaxLit < 2) suggestedMaxLit = 2;
            } else if (currentTerm === 'MONTHS') {
                suggestedMaxRub = Math.ceil(maxRub / 10) * 10;
                suggestedMaxLit = Math.ceil(maxLit / 50) * 50;
                if (suggestedMaxLit - maxLit < 15) suggestedMaxLit += 50;
            } else if (currentTerm === 'YEARS') {
                suggestedMaxRub = Math.ceil(maxRub / 100) * 100;
                if (suggestedMaxRub - maxRub < 40) suggestedMaxRub += 100;
                suggestedMaxLit = Math.ceil(maxLit / 500) * 500;
                if (suggestedMaxLit > 2000 && maxLit <= 2000) {
                    suggestedMaxLit = 2000;
                }
            } else if (currentTerm === 'CUSTOM') {
                suggestedMaxRub = Math.ceil(maxRub / 10) * 10;
                suggestedMaxLit = Math.ceil(maxLit / 50) * 50;
                if (suggestedMaxLit - maxLit < 15) suggestedMaxLit += 50;
            }

            salesChart.options.scales.y.max = suggestedMaxRub;
            salesChart.options.scales.y1.max = suggestedMaxLit;
        }

        // 8. Перерисовываем график с новыми серверными данными
        salesChart.update();

        // --- ОБНОВЛЕНИЕ БЛОКА ТЕХНИЧЕСКОГО СОСТОЯНИЯВОДОМАТА ИЗ API ---
        if (data.sensors) {
            const s = data.sensors;

    // 1. Выводим текстовые значения в виджеты
    document.getElementById('sensor-sim').innerText = s.simBalance || '—';
    document.getElementById('sensor-temp').innerText = s.temperature || '—';
    document.getElementById('sensor-tds').innerText = s.tds || '—';
    document.getElementById('sensor-signal').innerText = s.signalStrength || '—';
    document.getElementById('sensor-water').innerText = s.waterInput || '—';

    // 2. Логика управления цветом и текстом статуса осмоса (lastCleanerStatus)
    const cleanerEl = document.getElementById('sensor-cleaner');
    if (cleanerEl) {
        cleanerEl.innerText = s.cleanerStatus || 'Неизвестно';
        
        // Сбрасываем старые цветовые классы bootstrap (если они были)
        cleanerEl.className = 'status-online'; 
        cleanerEl.style.padding = '2px 8px';
        cleanerEl.style.borderRadius = '4px';
        cleanerEl.style.color = 'white';

        // Назначаем цвета согласно критичности из вашей системы
        if (s.cleanerStatus === "Полный бак" || s.cleanerStatus === "Фильтрация") {
            cleanerEl.style.backgroundColor = '#28a745'; // Зеленый (ОК)
        } else if (s.cleanerStatus === "Промывка мембран" || s.cleanerStatus === "Настройка") {
            cleanerEl.style.backgroundColor = '#ffc107'; // Желтый (Внимание)
            cleanerEl.style.color = '#333';
        } else {
            cleanerEl.style.backgroundColor = '#dc3545'; // Красный (Авария / Нет воды)
        }
    }
  }
        
    } catch (error) {
        console.error("Ошибка при получении данных с сервера:", error);
        document.getElementById('chart-loader').style.display = 'none';
    }
}

// Клик по кнопкам "День / Месяц / Год"
function changeTerm(term) {
    currentTerm = term;
    
    // Переключаем активный класс на кнопках
    document.querySelectorAll('.btn-group button').forEach(btn => btn.classList.remove('active'));
    document.getElementById(`btn-${term}`).classList.add('active');
    
    // Сбрасываем старые значения в календарях
    document.getElementById('date-from').value = '';
    document.getElementById('date-to').value = '';
    
    // Управляем блокировкой инпутов дат
    const isCustom = (term === 'CUSTOM');
    document.getElementById('date-from').disabled = !isCustom;
    document.getElementById('date-to').disabled = !isCustom;
    document.getElementById('btn-apply-date').disabled = !isCustom;
    
    // Если выбрали День/Месяц/Год — загружаем сразу. 
    // Если выбрали "Период" — график не загружаем, ждем пока пользователь выберет даты и нажмет "Применить"
    if (!isCustom) {
        loadChartData();
    }
}

// Клик по кнопке "Применить даты"
function applyDateFilter() {
    const rawFrom = document.getElementById('date-from').value;
    const rawTo = document.getElementById('date-to').value;
    
    if (!rawFrom || !rawTo) {
        alert("Пожалуйста, выберите обе даты в календаре!");
        return;
    }
    loadChartData();
}

// Старт при загрузке
window.onload = function() {
    initChart();
    loadChartData();
    document.getElementById('date-from').addEventListener('change', function() {
        if (this.value) {
            document.getElementById('date-to').value = new Date().toISOString().split('T')[0];
        }
});
};
</script>

</body>
</html>
