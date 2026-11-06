<?php
 
// Включение ошибок для отладки (убрать в продакшене)
error_reporting(E_ALL);
ini_set('display_errors', 1);
 
// Подключение конфигурационного файла
require 'config.php';
 
// Получаем параметры POST
$startDate = isset($_POST['startDate']) ? $_POST['startDate'] : '';
$endDate = isset($_POST['endDate']) ? $_POST['endDate'] : '';
$cardNumber = isset($_POST['cardNumber']) ? trim($_POST['cardNumber']) : '';
 
if (!$startDate || !$endDate) {
    die('Пожалуйста, укажите диапазон дат.');
}
 
// Подключение к базе
$conn = new mysqli($db_host, $db_user, $db_pass, $db_name);
if ($conn->connect_error) {
    die('Ошибка подключения: ' . $conn->connect_error);
}
 
$conditions = [];
//$conditions[] = "t.data_time BETWEEN ? AND ?";
$conditions[] = "t.time BETWEEN ? AND ?";
$types = 'ss';
$params = [$startDate, $endDate];
 
if ($cardNumber !== '') {
    $conditions[] = "t.num_card LIKE ?";
    $types .= 's';
    $params[] = '%' . $cardNumber . '%';
}
 
$whereClause = implode(' AND ', $conditions);
 
// Обновленный SQL-запрос с LEFT JOIN
/*$sql = "SELECT t.data_time, t.summ, t.commis, t.num_card, t.status, t.ResponseCode, c.comment
        FROM transactions t
        LEFT JOIN cards c ON t.num_card = c.num_card
        WHERE $whereClause
        ORDER BY t.data_time DESC";*/

$sql = "SELECT t.time, ROUND(t.sum / 100, 2) AS sum, ROUND(t.commis / 100, 2) AS commis, t.volume, t.card_number, t.status, t.response_code, c.comment
        FROM vendista_transactions t
        LEFT JOIN cards c ON t.card_number = c.num_card COLLATE utf8mb4_unicode_ci
        WHERE $whereClause
        ORDER BY t.time DESC";
 
$stmt = $conn->prepare($sql);
if (!$stmt) {
    die("Ошибка подготовки запроса: " . $conn->error);
}
$stmt->bind_param($types, ...$params);
$stmt->execute();
$result = $stmt->get_result();
 
// Начало таблицы
echo '<table class="styled-table" id="transactionsTableNalog">';
echo ' <thead>
        <tr>
            <th>№</th> <!-- Номер строки -->
            <th>Дата время<br><input type="text" id="date_filter" name="date_time" placeholder="ДД.ММ.ГГГГ чч:мм:сс" style="width: 90%; margin-top: 4px;"></th></th>
            <th>
              Сумма
              <br>
              <select id="amount_filter" style="width: 100%; margin-top: 4px;">
                <option value="">Все</option>
                <option value="0.35">0.35 руб</option>
                <option value="1.75">1.75 руб</option>
                <option value="3.50">3.50 руб</option>
                <option value="6.65">6.65 руб</option>
              </select>
            </th>
            <th>Комиссия</th>
            <th>
              Объём
              <br>
              <select id="volume_filter" style="width: 100%; margin-top: 4px;">
                <option value="">Все</option>
                <option value="1">1 л</option>
                <option value="5">5 л</option>
                <option value="10">10 л</option>
                <option value="19">19 л</option>
              </select>
            </th>
            <th>Номер карты<br>
             <input type="text" id="n_card" name="num_card" placeholder="Фильтр по карте" list="card_filter" style="width: 90%; margin-top: 4px;">
 <!--            <select id="n_card" name="num_card" style="width: 90%; margin-top: 4px;">-->
             <datalist id="card_filter">
              <option value="">Все</option>
              <option value="&ne;*">QR-коды</option>
              <option value="*">Карты</option>
             </datalist>
 <!--            </select>-->
            </th>
            <th>
            <label>
              Статус<br>
              <select id="status_filter">
               <option value="">Все статусы</option>
               <option value="Успешная транзакция снятия денег">Успешная транзакция снятия денег (1)</option>
               <option value="Успешная транзакция снятия денег, по которой впоследствии произошел возврат">Успешная транзакция снятия денег, по которой впоследствии произошел возврат (2)</option>
               <option value="Неуспешная транзакция снятия денег">Неуспешная транзакция снятия денег (3)</option>
               <option value="Успешный возврат денег на карту">Успешный возврат денег на карту (4)</option>
               <option value="Неуспешный возврат денег на карту">Неуспешный возврат денег на карту (5)</option>
              </select>
            </label>
            </th>
            <th>
            <label>
              Код:<br>
              <select id="code_filter">
               <option value="">Все коды</option>
               <option value="0">0</option>
               <option value="notZero">&ne;0</option>
               <option value="101">101</option>
               <option value="116">116</option>
               <option value="991">991</option>
               <option value="992">992</option>
               <option value="995">995</option>
               <option value="400">400</option>
              </select>
            </label>
            </th>
            <th>Комментарий<br><input type="text" id="comment_filter" placeholder="Фильтр по комментарию" style="width: 90%; margin-top: 4px;"></th>
        </tr>
      </thead>';
echo '<tbody>';
 
// Объявляем счётчик для номера строки
$rowNumber = 1;
 
while ($row = $result->fetch_assoc()) {
    // Форматируем дату
    $formattedDate = '';
    if ($row['time']) {
        $timestamp = strtotime($row['time']);
        if ($timestamp !== false) {
            $formattedDate = date('d.m.Y H:i:s', $timestamp);
        } else {
            $formattedDate = htmlspecialchars($row['time']);
        }
    // Преобразуем числовой статус в текст
    $statusText = match ((int)$row['status']) {
        1 => 'Успешная транзакция снятия денег',
        2 => 'Успешная транзакция снятия денег, по которой впоследствии произошел возврат',
        3 => 'Неуспешная транзакция снятия денег',
        4 => 'Успешный возврат денег на карту',
        5 => 'Неуспешный возврат денег на карту',
        default => 'Неизвестный статус (' . htmlspecialchars($row['status']) . ')'
    };
    }
 
    // Вывод строки с номером
    echo '<tr>';
    echo '<td>' . $rowNumber . '</td>'; // Номер строки
    echo '<td>' . htmlspecialchars($formattedDate) . '</td>';
    echo '<td>' . htmlspecialchars($row['sum']) . '</td>';
    echo '<td>' . htmlspecialchars($row['commis']) . '</td>';
    echo '<td>' . htmlspecialchars($row['volume']) . '</td>';
    echo '<td>' . htmlspecialchars($row['card_number']) . '</td>';
    echo '<td>' . $statusText . '</td>'; 
    echo '<td>' . htmlspecialchars($row['response_code']) . '</td>';
    echo '<td>' . htmlspecialchars($row['comment'] ?? '') . '</td>';
    echo '</tr>';
 
    $rowNumber++;
}
 
echo '</tbody>';
echo '<tfoot>';
echo '<tr class="total-row">';
echo '<td colspan="2">ИТОГИ:</td>';
echo '<td id="totalSumm"></td>';
echo '<td>';
echo '  <div id="totalCommisCard"></div>';
echo '  <div id="totalCommisQR"></div>';
echo '</td>';
echo '<td id="totalVolume"></td>';
echo '<td id="totalNumCard"></td>';
echo '<td id="totalStatus"></td>';
echo '<td id="totalCode"></td>';
echo '<td id="totalComment"></td>';
echo '</tr>';
echo '</tfoot>';
echo '</table>';
echo '</div>';
 
// Освобождение ресурсов
$stmt->close();
$conn->close();
 
?>
