<?php
//ini_set('display_errors', 1);
//ini_set('display_startup_errors', 1);
//error_reporting(E_ALL);
 
 
// Подключение конфигурационного файла
require 'config.php';
 
// Подключение к БД
$conn = new mysqli($db_host, $db_user, $db_pass, $db_name);
if ($conn->connect_error) {
    die('Ошибка подключения: ' . $conn->connect_error);
}
 
// Получение данных
$startDate = $_POST['startDate'] ?? '';
$endDate = $_POST['endDate'] ?? '';
$paymentType = $_POST['payment_type'] ?? 'all';
 
// Валидация и ограничение допустимых значений
$allowed = ['all','cash','cashless'];
if (!in_array($paymentType, $allowed, true)) {
    $paymentType = 'all';
}
 
// Валидация дат
/*if (!$startDate || !$endDate) {
    echo "<p>Пожалуйста, укажите обе даты.</p>";
    exit;
}*/
 
// Формирование временного диапазона
$startDatetime = $startDate . ' 00:00:00';
$endDatetime = $endDate . ' 23:59:59';
 
// Подготовка переменных для заголовков и колонок
$headers = [];
$columns = [];
 
if ($paymentType === 'all') {
    $stmt = $conn->prepare("
        SELECT time as data_time, cash_total as cash, coins_total as coins, card_total as card, liters as litres
        FROM firstwater_transactions
        WHERE time BETWEEN ? AND ?
        ORDER BY time DESC
    ");
    $stmt->bind_param('ss', $startDatetime, $endDatetime);
 
    $headers = ['Дата/время', 'Наличные', 'Монеты', 'Карта', 'Объем'];
    $columns = ['cash','coins','card','litres'];
} elseif ($paymentType === 'cash') {
    $stmt = $conn->prepare("
        SELECT time as data_time, cash_total as cash, coins_total as coins, liters as litres
        FROM firstwater_transactions
        WHERE time BETWEEN ? AND ? AND type = ?
        ORDER BY time DESC
    ");
    $typeParam = 'CASH';
    $stmt->bind_param('sss', $startDatetime, $endDatetime, $typeParam);
 
    $headers = ['Дата/время', 'Наличные', 'Монеты', 'Объем'];
    $columns = ['cash','coins','litres'];
} else { // cashless
    $stmt = $conn->prepare("
        SELECT time as data_time, card_total as card, liters as litres
        FROM firstwater_transactions
        WHERE time BETWEEN ? AND ? AND type = ?
        ORDER BY time DESC
    ");
    $typeParam = 'CASHLESS';
    $stmt->bind_param('sss', $startDatetime, $endDatetime, $typeParam);
 
    $headers = ['Дата/время', 'Карта', 'Объем'];
    $columns = ['card','litres'];
}
 
if (!$stmt) {
    http_response_code(500);
    error_log('DB prepare failed: ' . $conn->error);
    echo 'DB prepare failed';
    exit;
}
if (!$stmt->execute()) {
    http_response_code(500);
    error_log('DB execute failed: ' . $stmt->error);
    echo 'DB execute failed';
    exit;
}
 
$result = $stmt->get_result();
 
// Вывод таблицы
echo '<table class="styled-table" id="transactionsTableCash" style="width: 100%; text-align: left;">';
echo '<thead>';
// 1. Первая строка: Названия колонок
echo '<tr>';
foreach ($headers as $header) {
  echo '<th>' . htmlspecialchars($header) . '</th>';
}
echo '</tr>';
// 2. Вторая строка: Поля ввода для фильтрации
echo '<tr class="filter-row">';
foreach ($headers as $key => $header) {
  echo '<th>';
  $placeholder = ($key === 0) ? 'ДД.ММ.ГГГГ чч:мм:сс' : 'Поиск...';
  echo '<input type="text" class="table-filter" data-column="' . $key . '" placeholder="' . $placeholder . '">';
  echo '</th>';
}
echo '</tr>';
echo '</thead><tbody>';
 
if ($result->num_rows > 0) {
  while ($row = $result->fetch_assoc()) {
    $formattedDate = '';
    if ($row['data_time']) {
      $timestamp = strtotime($row['data_time']);
      if ($timestamp !== false) {
        $formattedDate = date('d.m.Y H:i:s', $timestamp);
      } else {
        $formattedDate = htmlspecialchars($row['data_time']);
      }
    }
 
    echo '<tr>';
    echo '<td>' . htmlspecialchars($formattedDate) . '</td>';
 
    foreach ($columns as $col) {
      $value = isset($row[$col]) ? $row[$col] : null;
      $display = ($value !== null) ? number_format($value, 2, '.', '') : '';
      echo '<td>' . htmlspecialchars($display) . '</td>';
    }
    echo '</tr>';
  }
} else {
  $colCount = count($headers);
  echo '<tr><td colspan="' . $colCount . '">Нет данных за указанный период</td></tr>';
}
 
echo '</tbody>';
echo '<tfoot>';
echo '<tr class="total-row">';
echo '<td>ИТОГИ:</td>';
 
foreach ($columns as $colName) {
    echo '<td id="total_' . $colName . '">0.00</td>';
}
 
echo '</tr>';
echo '</tfoot>';
echo '</table>'; // Обязательно закрываем таблицу здесь!
 
$stmt->close();
$conn->close();
?>
