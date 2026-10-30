<?php
session_start();
if (!isset($_SESSION['logged_in']) || $_SESSION['logged_in'] !== true) {
    header('Location: login.php'); exit;
}
require_once 'config.php'; // Здесь должны быть настройки $pdo, $tokenfw и $targetDeviceId

// Вспомогательная функция для запросов к удаленному API FirstWater (из sales_chart.php)
if (!function_exists('makeRequest')) {
    function makeRequest($url, $token, $postData = null) {
        $ch = curl_init($url);
        $headers = [
            'Authorization: Bearer ' . $token,
            'Accept: application/json'
        ];
        if ($postData !== null) {
            $headers[] = 'Content-Type: application/json';
            curl_setopt($ch, CURLOPT_POST, true);
            curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($postData));
        }
        curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
        $response = curl_exec($ch);
        curl_close($ch);
        return json_decode($response, true);
    }
}

// =========================================================================
// 1. АЯКС-ОБРАБОТЧИК: Срабатывает при вызове из JavaScript (loadDashboardData)
// =========================================================================
if (isset($_GET['action']) && $_GET['action'] === 'get_data') {
    header('Content-Type: application/json');
    
    $term = $_GET['term'] ?? 'DAYS'; // DAYS, MONTHS, YEARS
    $deviceId = $targetDeviceId ?? "869531075890354";
    $currentToken = $_SESSION['fw_token'] ?? $tokenfw ?? '';
    
    // Инициализируем структуру ответа
    $output = [
        'cash' => 0.0,
        'card' => 0.0,
        'bonus' => 0.0,
        'chart' => ['labels' => [], 'revenue' => []],
        'sensors' => ['status' => 'В работе', 'tds' => '—', 'balance' => '—']
    ];

    // --- А. Данные по типам оплаты из локальной БД (из dashboard.php) ---
    // Определяем временные рамки в зависимости от выбранного переключателя
    if ($term === 'MONTHS') {
        $start_date = date('Y-m-01 00:00:00');
        $end_date = date('Y-m-t 23:59:59');
    } elseif ($term === 'YEARS') {
        $start_date = date('Y-01-01 00:00:00');
        $end_date = date('Y-12-31 23:59:59');
    } else { // DAYS или по умолчанию — текущие сутки
        $start_date = date('Y-m-d 00:00:00');
        $end_date = date('Y-m-d 23:59:59');
    }

    try {
        // Запрос наличных (FirstWater) из локальной БД
        $stmt_fw = $pdo->prepare("SELECT SUM(amount) as total FROM firstwater_transactions WHERE device_id = ? AND created_at BETWEEN ? AND ?");
        $stmt_fw->execute([$deviceId, $start_date, $end_date]);
        $output['cash'] = floatval($stmt_fw->fetch(PDO::FETCH_ASSOC)['total'] ?? 0);

        // Запрос безналичных (Vendista) из локальной БД
        $stmt_ven = $pdo->prepare("SELECT SUM(amount) as total FROM vendista_transactions WHERE device_id = ? AND created_at BETWEEN ? AND ?");
        $stmt_ven->execute([$deviceId, $start_date, $end_date]);
        $output['card'] = floatval($stmt_ven->fetch(PDO::FETCH_ASSOC)['total'] ?? 0);

        // Запрос бонусов из локальной БД
        $stmt_bon = $pdo->prepare("SELECT SUM(bonus_amount) as total FROM bonus_transactions WHERE device_id = ? AND created_at BETWEEN ? AND ?");
        $stmt_bon->execute([$deviceId, $start_date, $end_date]);
        $output['bonus'] = floatval($stmt_bon->fetch(PDO::FETCH_ASSOC)['total'] ?? 0);

    } catch (Exception $e) {
        // Если таблиц или базы нет, логгируем, но не ломаем JSON
    }

    // --- Б. Данные графиков и датчиков из внешнего API (из sales_chart.php) ---
    if (!empty($currentToken)) {
        // Получаем технические параметры (с датчиков контроллера)
        $stateUrl = "https://firstwater.cloud{$deviceId}/state";
        $stateData = makeRequest($stateUrl, $currentToken);
        if (isset($stateData['data'])) {
            $output['sensors']['status'] = ($stateData['data']['is_error'] ?? false) ? 'Ошибка' : 'В работе';
            $output['sensors']['tds'] = $stateData['data']['tds_out'] ?? '—';
            $output['sensors']['balance'] = $stateData['data']['sim_balance'] ?? '—';
        }

        // Получаем статистику продаж для линейного/столбчатого графика
        $statsUrl = "https://firstwater.cloud{$deviceId}/statistics?term=" . $term;
        $statsData = makeRequest($statsUrl, $currentToken);
        
        if (isset($statsData['data']['items']) && is_array($statsData['data']['items'])) {
            // Разворачиваем хронологически от старых к новым
            $items = array_reverse($statsData['data']['items']);
            foreach ($items as $item) {
                // Форматируем вывод даты/времени в зависимости от масштаба
                if ($term === 'DAYS') {
                    $label = date('H:00', strtotime($item['date']));
                } elseif ($term === 'MONTHS') {
                    $label = date('d.m', strtotime($item['date']));
                } else {
                    $label = date('M Y', strtotime($item['date']));
                }
                
                $output['chart']['labels'][] = $label;
                $output['chart']['revenue'][] = floatval($item['revenue'] ?? 0);
            }
        }
    }

    // Возвращаем объединенный пакет данных фронтенду
    echo json_encode($output);
    exit;
}

// =========================================================================
// 2. СТАНДАРТНАЯ СТАТИЧЕСКАЯ ЛОГИКА (Для начальной загрузки страницы карточек)
// =========================================================================
$selected_date = $_GET['date_filter'] ?? date('Y-m-d');
$formatted_date = date('d.m.Y', strtotime($selected_date));

// Подсчет общих финансовых карточек за выбранный день (из вашего старого dashboard.php)
try {
    $start_day = $selected_date . ' 00:00:00';
    $end_day = $selected_date . ' 23:59:59';
    
    $stmt = $pdo->prepare("SELECT SUM(amount) as income FROM firstwater_transactions WHERE created_at BETWEEN ? AND ?");
    $stmt->execute([$start_day, $end_day]);
    $date_income = floatval($stmt->fetch(PDO::FETCH_ASSOC)['income'] ?? 0);
    
    // Сюда вы можете вернуть ваши старые запросы для $date_expenses и $date_profit
    $date_expenses = 0.00; // Пример
    $date_profit = $date_income - $date_expenses;
} catch (Exception $e) {
    $date_income = 0; $date_expenses = 0; $date_profit = 0;
}
?>
<html>
<head>
    <meta charset="UTF-8">
    <title>Мониторинг водомата vodatut.by</title>
    
    <!-- СТРОГО СЮДА: Подключение библиотеки Chart.js до выполнения ваших скриптов -->
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
</head>
<!-- Краткий пример базовой Grid-сетки для дашборда vodatut.by -->
<style>
  .dashboard-grid {
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 20px;
    margin-top: 20px;
  }
  .card-box {
    background: #fff;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 5px rgba(0,0,0,0.05);
  }
  @media (max-width: 768px) {
    .dashboard-grid { grid-template-columns: 1fr; }
  }
</style>
<body>
<div class="container">
  <header style="display:flex; justify-content:space-between; align-items:center;">
    <h2>Кабинет: Водомат ONE S200 "Единичка"</h2>
    <a href="logout.php">Выйти</a>
  </header>

  <!-- Блок управления периодами (День, Месяц, Год, Период) -->
  <div class="controls-panel" style="display:flex; gap:15px; margin: 20px 0;">
    <button class="active" onclick="changePeriod(this, 'DAYS')">День</button>
    <button onclick="changePeriod(this, 'MONTHS')">Месяц</button>
    <button onclick="changePeriod(this, 'YEARS')">Год</button>
    <button onclick="changePeriod(this, 'PERIOD')">Период</button>
  </div>

  <!-- Основная сетка дашборда -->
  <div class="dashboard-grid">
    <!-- Слева: Место под два графика (Линейный и Круговой) -->
    <div class="card-box" style="display:flex; gap:20px;">
      <div style="flex: 2;"><canvas id="salesChart"></canvas></div>
      <div style="flex: 1;"><canvas id="pieChart"></canvas></div>
    </div>

    <!-- Справа: Блок технического состояния -->
    <div class="card-box">
      <h3>Состояние автомата</h3>
      <div id="sensor-data">Загрузка сенсоров...</div>
    </div>
  </div>
</div>
</body>
<script>
function changePeriod(element, term) {
    // Переключаем активный класс на кнопках
    document.querySelectorAll('.controls-panel button').forEach(b => b.classList.remove('active'));
    element.classList.add('active');
    
    // Вызываем обновление дашборда с новым периодом
    loadDashboardData(term);
}
</script>
<script>
  let mainChart = null;
  let pieChart = null;

  // Инициализация графиков при загрузке страницы
  window.onload = function() {
    const ctxMain = document.getElementById('salesChart').getContext('2d');
    const ctxPie = document.getElementById('pieChart').getContext('2d');

    // Настройка основного графика продаж (столбцы выручки и объема)
    mainChart = new Chart(ctxMain, {
      type: 'bar',
      data: { labels: [], datasets: [{ label: 'Выручка (руб)', data: [] }] },
      options: { responsive: true }
    });

    // Настройка новой круговой диаграммы (распределение доходов)
    pieChart = new Chart(ctxPie, {
      type: 'doughnut', // Стильный тип "пончик"
      data: {
        labels: ['Наличные', 'Безнал (Vendista)', 'Бонусы'],
        datasets: [{
          data: [0, 0, 0], 
          backgroundColor: ['#28a745', '#007bff', '#ffc107']
        }]
      },
      options: { responsive: true }
    });

    // Функция запроса данных с сервера
    loadDashboardData();
  };

async function loadDashboardData(term = 'DAYS') {
    try {
      const res = await fetch(`main_dashboard.php?action=get_data&term=${term}`);
      
      if (!res.ok) {
        throw new Error(`Ошибка сервера: ${res.status}`);
      }
      
      const data = await res.json();
      
      // 1. Обновление КРУГОВОЙ диаграммы доходов (из блока аякс-ответа)
      // Если PHP отдает структуры данных по-другому, подставьте нужные ключи вместо data.cash/card/bonus
      if (data.cash !== undefined || data.card !== undefined || data.bonus !== undefined) {
        pieChart.data.datasets[0].data = [
          parseFloat(data.cash || 0), 
          parseFloat(data.card || 0), 
          parseFloat(data.bonus || 0)
        ];
        pieChart.update();
      }

      // 2. Обновление ОСНОВНОГО графика продаж (FirstWater API)
      if (data.chart && data.chart.labels) {
        mainChart.data.labels = data.chart.labels; // Метки времени (часы/дни)
        mainChart.data.datasets[0].data = data.chart.revenue; // Массив значений выручки
        mainChart.update();
      }

      // 3. Вывод ТЕХНИЧЕСКИХ датчиков автомата в правый блок
      const sensorDiv = document.getElementById('sensor-data');
      if (sensorDiv && data.sensors) {
        sensorDiv.innerHTML = `
          <p>Статус: <b>${data.sensors.status || 'В работе'}</b></p>
          <p>TDS воды: <b>${data.sensors.tds || '—'} ppm</b></p>
          <p>Баланс SIM: <b>${data.sensors.balance || '—'} руб.</b></p>
        `;
      }

    } catch (e) {
      console.error("Ошибка парсинга или запроса данных:", e);
      document.getElementById('sensor-data').innerText = "Ошибка загрузки данных автоматики.";
    }
  }
</script>
</html>