<?php
session_start();

// 1. ЗАЩИТА: Проверяем, авторизован ли пользователь
if (!isset($_SESSION['logged_in']) || $_SESSION['logged_in'] !== true) {
    header('Location: login.php');
    exit;
}

// 2. ПОДКЛЮЧЕНИЕ КОНФИГУРАЦИИ И БД
require_once 'config.php';

try {
    $pdo = new PDO("mysql:host=$db_host;dbname=$db_name;charset=utf8mb4", $db_user, $db_pass);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    die("Ошибка подключения к БД: " . $e->getMessage());
}

// 3. ОБРАБОТКА ВЫБОРА ДАТЫ (Календарь)
// Если дата передана из формы фильтра — берем её, иначе ставим сегодняшний день
$selected_date = isset($_GET['date_filter']) ? $_GET['date_filter'] : date('Y-m-d');

// 4. ОБРАБОТКА ФОРМЫ РАСХОДОВ
$expense_success = false;
if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['add_expense'])) {
    $amount = floatval($_POST['amount']);
    $category = trim($_POST['category']);
    $comment = trim($_POST['comment']);
    $date = $_POST['date'];

    if ($amount > 0 && !empty($category) && !empty($date)) {
        $stmt = $pdo->prepare("INSERT INTO expenses (amount, category, comment, date) VALUES (?, ?, ?, ?)");
        $stmt->execute([$amount, $category, $comment, $date]);
        $expense_success = true;
        
        // После успешного добавления расхода, перенаправим пользователя на ту дату, в которую он его внес
        header("Location: dashboard.php?date_filter=" . urlencode($date) . "&success=1");
        exit;
    }
}

if (isset($_GET['success'])) {
    $expense_success = true;
}

// 5. ПОЛУЧЕНИЕ СТАТИСТИКИ ЗА ВЫБРАННУЮ ДАТУ

// А. Безнал из Vendista за выбранный день (делим на 100, если копейки пишутся как целое)
try {
//    $sql1 = "SELECT SUM(sum) AS total_vendista FROM vendista_transactions WHERE DATE(time) = '$selected_date'";
//    echo "SQL 1: " . $sql1 . PHP_EOL; // Вывод в консоль
    $stmt = $pdo->prepare("SELECT SUM(sum) AS total_vendista FROM vendista_transactions WHERE (response_code = 0) AND (DATE(time) = ?)");
    $stmt->execute([$selected_date]);
    $vendista_data = $stmt->fetch(PDO::FETCH_ASSOC);
    $date_vendista = ($vendista_data['total_vendista'] ?? 0) / 100;
} catch (Exception $e) {
    $date_vendista = 0;
}

// Б. Продажи из FirstWater за выбранный день
try {
//    $sql2 = "SELECT SUM(coins_total) AS total_fw FROM firstwater_transactions WHERE DATE(time) = '$selected_date'";
//    echo "SQL 2: " . $sql2 . PHP_EOL; // Вывод в консоль
    $stmt = $pdo->prepare("SELECT SUM(coins_total) AS total_fw FROM firstwater_transactions WHERE DATE(time) = ?");
    $stmt->execute([$selected_date]);
    $fw_data = $stmt->fetch(PDO::FETCH_ASSOC);
    $date_fw = $fw_data['total_fw'] ?? 0;
} catch (Exception $e) {
    $date_fw = 0;
}

// В. Бонусы из Vendista за выбранный день (делим на 100, если копейки пишутся как целое)
try {
    $stmt = $pdo->prepare("SELECT SUM(bonus) AS bonus FROM vendista_transactions WHERE (response_code = 995) AND (DATE(time) = ?)");
    $stmt->execute([$selected_date]);
    $bonus_data = $stmt->fetch(PDO::FETCH_ASSOC);
    $bonus = ($bonus_data['bonus'] ?? 0) * (-1) / 100;
} catch (Exception $e) {
    $bonus = 0;
}

// Общий доход за выбранный день
$date_income = $date_vendista + $date_fw;

// Г. Комиссия из Vendista за выбранный день (делим на 100, если копейки пишутся как целое)
try {
    $stmt = $pdo->prepare("SELECT SUM(commis) AS commis FROM vendista_transactions WHERE response_code = 0 AND (DATE(time) = ?)");
    $stmt->execute([$selected_date]);
    $commis_data = $stmt->fetch(PDO::FETCH_ASSOC);
    $commis = ($commis_data['commis'] ?? 0) / 100;
} catch (Exception $e) {
    $commis = 0;
}

// Д. Расходы за выбранный день из таблицы expenses
try {
    $stmt = $pdo->prepare("SELECT SUM(amount) AS total_expenses FROM expenses WHERE date = ?");
    $stmt->execute([$selected_date]);
    $expense_data = $stmt->fetch(PDO::FETCH_ASSOC);
    $date_expenses = $expense_data['total_expenses'] ?? 0;
} catch (Exception $e) {
    $date_expenses = 0;
}

// Общий расход за выбранный день
$date_expenses += $commis;

// Е. Чистая прибыль за выбранный день
$date_profit = $date_income - $date_expenses;

// Красивое форматирование даты для вывода на экран (например, "21.08.2026")
$formatted_date = date('d.m.Y', strtotime($selected_date));
?>

<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Панель управления Водомата</title>
    <link rel="stylesheet" href="/css/style_dashboard.css">
</head>
<body>

<div class="container">
    <header>
        <h2>Кабинет: Водомат ONE S200 "Единичка"</h2>
        <a href="logout.php" class="logout-btn">Выйти</a>
    </header>

    <!-- Блок выбора даты -->
    <div class="filter-box">
        <form method="GET" action="dashboard.php">
            <label for="date_filter" style="margin: 0; font-weight: bold;">Выбрать дату отчета:</label>
            <input type="date" id="date_filter" name="date_filter" class="filter-input" value="<?= htmlspecialchars($selected_date) ?>">
            <button type="submit" class="filter-btn">Показать</button>
            
            <div class="current-date-title">Данные за: <?= $formatted_date ?></div>
        </form>
    </div>

    <!-- Сводка за выбранный день -->
    <div class="stats-grid">
        <div class="card income">
            <div class="card-title">Общий Доход</div>
            <div class="card-value"><?= number_format($date_income, 2, '.', '') ?> руб.</div>
            <div class="card-sub">Наличка: <?= number_format($date_fw, 2, '.', '') ?> | Безнал: <?= number_format($date_vendista, 2, '.', '') ?> | За бонусы: <?= number_format($bonus, 2, '.', '') ?></div>
        </div>
        <div class="card expense">
            <div class="card-title">Расходы за день</div>
            <div class="card-value"><?= number_format($date_expenses, 2, '.', '') ?> руб.</div>
            <div class="card-sub">Комиссия: <?= number_format($commis, 2, '.', '') ?> | Внесено через форму</div>
        </div>
        <div class="card profit">
            <div class="card-title">Чистая прибыль</div>
            <div class="card-value"><?= number_format($date_profit, 2, '.', '') ?> руб.</div>
            <div class="card-sub">Доходы минус Расходы</div>
        </div>
    </div>

    <div class="content-grid">
        <!-- Блок внесения расходов -->
        <div class="section-box">
            <h3>Внести расход за день</h3>
            <br>
            <?php if ($expense_success): ?>
                <div class="alert-success">Расход успешно добавлен!</div>
            <?php endif; ?>

            <form action="dashboard.php" method="POST">
                <input type="hidden" name="add_expense" value="1">
                
                <div class="form-group">
                    <label>Сумма (руб):</label>
                    <input type="number" step="0.01" name="amount" required placeholder="0.00">
                </div>
                
                <div class="form-group">
                    <label>Категория:</label>
                    <select name="category" required>
                        <option value="Аренда">Аренда места</option>
                        <option value="Вода">Оплата воды / Водоканал</option>
                        <option value="Электричество">Электричество</option>
                        <option value="Обслуживание">Тех. обслуживание / Фильтры</option>
                        <option value="Инкассация">Инкассация / Налоги</option>
                        <option value="Другое">Другое</option>
                    </select>
                </div>

                <div class="form-group">
                    <label>Дата:</label>
                    <!-- По умолчанию подставляется та дата, которая сейчас выбрана в календаре кабинета -->
                    <input type="date" name="date" value="<?= htmlspecialchars($selected_date) ?>" required>
                </div>

                <div class="form-group">
                    <label>Комментарий:</label>
                    <textarea name="comment" rows="2" placeholder="Например: замена фильтров..."></textarea>
                </div>

                <button type="submit">Сохранить расход</button>
            </form>
        </div>
        <!-- Управление данными -->
        <div class="section-box">
            <h3>Управление данными</h3>
            <p>Текущий водомат ID: <strong><?= htmlspecialchars($targetDeviceId) ?></strong></p>
            
            <a href="transactions.php?date=<?= $selected_date ?>" style="display: block; background: #28a745; color: white; text-decoration: none; padding: 12px; border-radius: 4px; font-weight: bold; text-align: center; margin-bottom: 10px;">📄 Просмотр транзакций & QR</a>

            <a href="generate_excel.php" class="menu-link" style="background: #ffc107; color: #333; font-weight: bold;">📂 Выгрузить отчет в XLS (Доходы/Расходы)</a>
<!--            <a href="tr.php" class="menu-link" style="background: #007bff; color: white; font-weight: bold;">Посмотреть операции на терминале и водомате</a>-->
<a href="tr.php?date=<?= $selected_date ?>" class="menu-link" style="background: #007bff; color: white; font-weight: bold;">Посмотреть операции на терминале и водомате</a>

        </div>
    </div>
</div>
</body>
</html>
