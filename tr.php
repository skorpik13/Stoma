<?php
// Считываем дату из ссылки (ожидаем формат YYYYmmdd, например, 20260323)
if (isset($_GET['date']) && strlen($_GET['date']) === 8 && is_numeric($_GET['date'])) {
    $passed_date = $_GET['date']; // Сохраняем исходный вариант для кнопки «Назад»
    // Форматируем в YYYY-MM-DD, чтобы инпуты типа date смогли её прочитать
    $date_for_input = substr($passed_date, 0, 4) . '-' . substr($passed_date, 4, 2) . '-' . substr($passed_date, 6, 2);
} else {
    // Если даты нет или формат неверный — берем текущий день
    $passed_date = date('Ymd');
    $date_for_input = date('Y-m-d');
}
?>
<!DOCTYPE html>
<html lang="ru">
<head>
  <script>
  if (window.location.hostname.indexOf('pavlovski.by') !== -1) {
      window.location.href = window.location.href.replace('pavlovski.by', 'vodatut.by');
  }
  </script>
  <meta charset="UTF-8" />
  <title>Операции на водомате</title>
  <link rel="stylesheet" href="/css/style_tr.css">
</head>
<body>
 
<div class="header-wrapper">
  <h1 style="margin:0; padding-top: 5px;">Операции на водомате</h1>
 
  <div class="main-header">
    <!-- Кнопки вкладок в сэндвич-меню -->
    <div class="menu-container">
      <button class="burger-btn" onclick="toggleMenu(event)">
        ☰ Меню
      </button>
      <div class="burger-tabs" id="burgerMenu">
        <button class="tablink active" data-tab="nalog" onclick="openTab('nalog'); toggleMenu(event);">Вендиста</button>
        <button class="tablink" data-tab="cash" onclick="openTab('cash'); toggleMenu(event);">Мониторинг</button>
      </div>
    </div>
 
    <div class="forms-container">
      <!-- Первая форма -->
      <form id="filterForm">
        <a href="dashboard.php?date_filter=<?= htmlspecialchars($passed_date) ?>" class="btn-back">← Назад в панель управления</a>
        <label>
          С: <input type="date" id="startDate" name="startDate" value="<?= $current_date_formatted ?>" required />
        </label>
        <label>
          По: <input type="date" id="endDate" name="endDate" value="<?= $current_date_formatted ?>" required />
        </label>
        <button id="uploadBtn" type="button">Обновить транзакции</button>
        <button type="button" onclick="generateReport()">Показать отчет</button>
      </form>
 
      <!-- Вторая форма, справа -->
      <form id="commentForm" action="add_cardcomment.php" method="POST" onsubmit="submitComment(event, this)">
          <input type="text" name="num_card" placeholder="XX****XXXX" required>
          <textarea name="comment" placeholder="Комментарий" maxlength="200" rows="2" required></textarea>
          <button type="submit">Добавить комментарий</button>
      </form>
    </div>
  </div>
 
  <!-- ПЕРЕНЕСЕНО СЮДА: Теперь блок радиокнопок жестко сидит внутри фиксированного верхнего хедера -->
  <div id="cashFilterContainer" style="display: none; text-align: center; font-family: sans-serif; background: #f5f5f5; padding: 10px; border-top: 1px solid #ccc;">
    <label style="cursor: pointer; margin: 0 10px; font-weight: bold; color: #333;">
      <input type="radio" name="payment_type" value="all" checked disabled> Все
    </label>
    <label style="cursor: pointer; margin: 0 10px; font-weight: bold; color: #333;">
      <input type="radio" name="payment_type" value="cash" disabled> Наличные
    </label>
    <label style="cursor: pointer; margin: 0 10px; font-weight: bold; color: #333;">
      <input type="radio" name="payment_type" value="cashless" disabled> Безнал
    </label>
  </div>
</div>
 
<!-- Основной блок таблицы -->
<div id="main-content">
  <!-- Вкладка: Вендиста (Nalogs) -->
  <div id="nalogTab" class="tab-panel" style="display: block;">
    <!-- Таблица загрузится целиком внутрь этого контейнера -->
    <div id="transactionsTableNalog"></div>
  </div>
 
  <!-- Вкладка: Мониторинг (Cash) -->
  <div id="cashTab" class="tab-panel" style="display: none;">
    <!-- Таблица загрузится целиком внутрь этого контейнера -->
    <div id="transactionsTableCash"></div>
  </div>
</div>
 
 
<script src="/js/scripts_tr.js"></script>
<script>
  function toggleMenu(event) {
    event.stopPropagation();
    const menu = document.getElementById('burgerMenu');
    menu.classList.toggle('show');
  }
 
  window.onclick = function(event) {
    if (!event.target.matches('.burger-btn')) {
      const dropdowns = document.getElementsByClassName("burger-tabs");
      for (let i = 0; i < dropdowns.length; i++) {
        const openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }
</script>
</body>
</html>
