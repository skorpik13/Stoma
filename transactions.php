<?php
if (session_status() === PHP_SESSION_NONE) {
    session_start();
}

// 0. ЗАЩИТА: Проверяем авторизацию пользователя
/*if (!isset($_SESSION['logged_in']) || $_SESSION['logged_in'] !== true) {
    header('Location: login.php');
    exit;
}*/

// 1. ПОДКЛЮЧЕНИЕ КОНФИГУРАЦИИ И БД
require_once 'config.php';

try {
    $pdo = new PDO("mysql:host=$db_host;dbname=$db_name;charset=utf8mb4", $db_user, $db_pass);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    die("Ошибка подключения к БД: " . $e->getMessage());
}

//2) Выбор даты из параметров URL
if (isset($_GET['date'])) {
     $selectedDateInput = $_GET['date'];
    } elseif (isset($_GET['date_filter'])) {
     $selectedDateInput = $_GET['date_filter'];
    } else {
     $selectedDateInput = date('Y-m-d');
    }
// 3) Приводим к формату Y-m-d и задаём диапазон на весь день
// Переменная в стандартном формате (2026-11-10) — ОСТАВЛЯЕМ для SQL-запросов, чтобы не было ошибок в БД
$dateParam = date('Y-m-d', strtotime($selectedDateInput));
// Новая переменная без дефисов (20261110) — ИСКЛЮЧИТЕЛЬНО для красивой ссылки
$linkDate = date('Ymd', strtotime($selectedDateInput));

$start = $dateParam . ' 00:00:00';
$end = date('Y-m-d', strtotime($dateParam . ' +1 day')) . ' 00:00:00';
// 4) Запрос к expresspay_payments с конвертацией Created к DATETIME внутри условия
try {
     $stmt = $pdo->prepare(" SELECT PaymentNo, AccountNo, Created, Amount, Currency, Info FROM expresspay_payments WHERE STR_TO_DATE(Created, '%d.%m.%Y %H:%i:%s') >= :start AND STR_TO_DATE(Created, '%d.%m.%Y %H:%i:%s') < :end ORDER BY Created DESC ");
     $stmt->bindValue(':start', $start, PDO::PARAM_STR);
     $stmt->bindValue(':end', $end, PDO::PARAM_STR);
     $stmt->execute(); $transactions_expresspay = $stmt->fetchAll(PDO::FETCH_ASSOC);
    }
catch (Exception $e) {
     die("Ошибка выполнения SQL-запроса 1: " . $e->getMessage());
    }



// 5) Запрос к vendista_transactions. Выбираем только успешные операции без отмен
try {
    $stmtVendista = $pdo->prepare("SELECT id, terminal_id, term_id, payment_method, sum, time, volume FROM vendista_transactions WHERE time >= :start AND time < :end AND (response_code = 0 OR response_code = 995) AND (reverse_id IS NULL OR reverse_id = 0) ORDER BY time DESC");
    $stmtVendista->bindValue(':start', $start, PDO::PARAM_STR);
    $stmtVendista->bindValue(':end', $end, PDO::PARAM_STR);
    $stmtVendista->execute();

    foreach ($stmtVendista->fetchAll(PDO::FETCH_ASSOC) as $vTr) {
$terminalId = !empty($vTr['terminal_id']) ? $vTr['terminal_id'] : (!empty($vTr['term_id']) ? $vTr['term_id'] : '');
$qrSource = 'https://c.vendista.ru/transactions/receipt?id=' . urlencode($vTr['id']) . '&tid=' . urlencode($terminalId);

        $normalizedTransactions[] = [
            'timestamp'      => strtotime($vTr['time']),
            'time_formatted' => date('H:i:s', strtotime($vTr['time'])),
            'amount'         => $vTr['sum'] / 100, // Перевод копеек в рубли
            'method'         => !empty($vTr['payment_method']) ? $vTr['payment_method'] : 'Карта/Смартфон',
            'volume'         => $vTr['volume'],
//            'qr_source'      => 'https://p.vendista.ru/Transactions/Receipt/' . $vTr['id'], // Прямая ссылка на чек
'qr_source' => $qrSource, // Эта ссылка уйдет в QR и в кнопку "Чек Vendista"
            'type'           => 'vendista'
        ];
      }
    }
catch (Exception $e) {
     die("Ошибка выполнения SQL-запроса 2: " . $e->getMessage());
    }

//нормализация данных ExpressPay и объединения с Vendista, и сортировки по времени
$normalizedTransactions = $normalizedTransactions ?? [];
if (!empty($transactions_expresspay)) {
    foreach ($transactions_expresspay as $tr) {
        $volume = !empty($tr['Info']) ? (int)preg_replace('/[^0-9]/', '', $tr['Info']) : 0;
        $qrSource = (!empty($tr['Info']) && filter_var($tr['Info'], FILTER_VALIDATE_URL)) ? $tr['Info'] : (!empty($tr['PaymentNo']) ? 'https://raschet.by' . urlencode($tr['PaymentNo']) : '');
        $normalizedTransactions[] = [
            'timestamp' => strtotime($tr['Created']),
            'time_formatted' => date('H:i:s', strtotime($tr['Created'])),
            'amount' => (float)$tr['Amount'],
            'method' => 'ЕРИП / QR-код',
            'volume' => $volume > 0 ? $volume : '-',
            'qr_source' => $qrSource,
            'type' => 'expresspay'
        ];
    }
}
usort($normalizedTransactions, function($a, $b) {
    return $b['timestamp'] <=> $a['timestamp'];
});

?>

<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Просмотр транзакций — Терминал-Водомат</title>
    <link rel="stylesheet" href="/css/style_dashboard.css">
</head>
<body>
 <div class="navigation-actions" style="margin-bottom: 20px;">
  <?php if (isset($_SESSION['logged_in']) && $_SESSION['logged_in'] === true): ?>
    <!-- Этот блок видит ТОЛЬКО АДМИНИСТРАТОР -->
    <a href="dashboard.php?date_filter=<?= $linkDate ?>" class="btn-to-site">← Назад в панель управления</a>
    <a href="javascript:void(0);" onclick="runBackgroundImport('<?= htmlspecialchars($dateParam, ENT_QUOTES, 'UTF-8') ?>')" id="btnRefreshQR" class="btn-refresh-qr">🔄 Обновить QR-коды</a>
  <?php else: ?>
    <!-- Этот блок видит ОБЫЧНЫЙ ПОСЕТИТЕЛЬ сайта -->
    <a href="https://vodatut.by" class="btn-to-site">🏠 На главную сайта</a>
    <a href="javascript:void(0);" onclick="runBackgroundImport('<?= htmlspecialchars($dateParam, ENT_QUOTES, 'UTF-8') ?>')" id="btnRefreshQR" class="btn-refresh-qr">🔄 Обновить QR-коды</a>
  <?php endif; ?>
 </div>

    <table class="table-transactions">
        <thead>
            <tr>
                <th style="width: 10%;">Время</th>
                <th style="width: 12%;">Сумма</th>
                <th style="width: 15%;">Способ оплаты</th>
                <th style="width: 10%;">Объем (л)</th>
                <th style="width: 25%;">Платёжный QR / Электронный чек</th>
            </tr>
        </thead>
        <tbody>
<?php if (empty($normalizedTransactions)): ?>
    <tr>
        <td colspan="5" style="padding: 30px; font-size: 16px; color: #6c757d; text-align: center;">
            За этот день транзакций не найдено.
        </td>
    </tr>
<?php else: ?>
    <?php foreach ($normalizedTransactions as $tr): ?>
        <tr>
            <td style="font-weight: 500;"><?= $tr['time_formatted'] ?></td>
            <td style="font-weight: bold; color: #212529;"><?= number_format($tr['amount'], 2, '.', '') ?> руб.</td>
            <td><?= htmlspecialchars($tr['method']) ?></td>
            <td><?= htmlspecialchars($tr['volume']) ?> л</td>
            <td>
                <div class="qr-wrapper">
                    <?php if (!empty($tr['qr_source'])): ?>
                        <!-- Генерируем QR-код высокого разрешения на основе источника -->
                        <img src="https://quickchart.io/qr?text=<?= urlencode($tr['qr_source']) ?>&size=600&ecLevel=M&format=png" alt="QR Код" class="tecit-qr-image" style="width: 180px; height: 180px; border:1px solid #ddd;" />
                        
                        <?php if ($tr['type'] === 'expresspay'): ?>
                            <!-- Для ЕРИП выводим текстовую ссылку -->
                            <a href="<?= htmlspecialchars($tr['qr_source']) ?>" target="_blank" class="link-text-erip">Ссылка ЕРИП</a>
                        <?php endif; ?>
                    <?php else: ?>
                        <span>QR недоступен</span>
                    <?php endif; ?>

                    <?php if ($tr['type'] === 'vendista'): ?>
                        <!-- Для Vendista выводим кнопку чека -->
                        <a href="<?= htmlspecialchars($tr['qr_source']) ?>" target="_blank" class="btn-receipt">
                            🧾 Чек Vendista
                        </a>
                    <?php endif; ?>
                </div>
            </td>
        </tr>
    <?php endforeach; ?>
<?php endif; ?>
        </tbody>
    </table>
</div>
<script src="/js/scripts_tr.js"></script>
</body>
</html>
