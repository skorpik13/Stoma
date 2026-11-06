<?php
// Считываем дату из ссылки, если её нет — ставим сегодняшний день
$passed_date = isset($_GET['date']) ? $_GET['date'] : date('Y-m-d');
// Подстраховка для timestamp инпутов, если переменная не задана в config
$startTimestamp = isset($startTimestamp) ? $startTimestamp : time();
$current_date_formatted = date('Y-m-d', $startTimestamp);
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
  
  <!-- Подключаем стили Flatpickr (Тема по умолчанию, можно менять) -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/flatpickr/dist/flatpickr.min.css">
<script src="https://cdn.jsdelivr.net/npm/flatpickr"></script>
  <style>
    /* Небольшие стили для адаптации нового инпута под CSS вашей формы */
    .range-picker-wrapper {
      display: inline-flex;
      align-items: center;
    }
    .range-input-custom {
      padding: 6px 10px;
      border: 1px solid #ccc;
      border-radius: 4px;
      font-size: 14px;
      background: #fff;
      cursor: pointer;
      text-align: center;
      min-width: 200px;
    }
  </style>
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
        
        <!-- Новый объединенный красивый элемент -->
        <div class="range-picker-wrapper">
          <label for="dateRangePicker" style="margin-right: 5px;">Период:</label>
          <input type="text" id="dateRangePicker" class="range-input-custom" placeholder="Выберите даты..." readonly />
        </div>

        <!-- Старые инпуты делаем скрытыми (hidden), чтобы js-скрипты не сломались -->
        <input type="hidden" id="startDate" name="startDate" value="<?= $current_date_formatted ?>" />
        <input type="hidden" id="endDate" name="endDate" value="<?= $current_date_formatted ?>" />
        
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
<!-- Подключение стилей Flatpickr -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/flatpickr/dist/flatpickr.min.css">
<!-- Скрипты Flatpickr и русской локализации -->
<!-- Основной скрипт Flatpickr -->
<script src="https://cdn.jsdelivr.net/npm/flatpickr"></script>
<!-- Скрипт русской локализации -->
<script src="https://cdn.jsdelivr.net/npm/flatpickr/dist/l10n/ru.js"></script>

<script>
  // Инициализация календаря выбора диапазона
document.addEventListener("DOMContentLoaded", function() {
  const startInput = document.getElementById('startDate');
  const endInput = document.getElementById('endDate');

  flatpickr("#dateRangePicker", {
    mode: "range",
    dateFormat: "d.m.Y", // Формат вывода в инпуте: 01.11.2026
    locale: "ru",
    // Передаем начальные значения, если они есть в hidden-инпутах
    defaultDate: [startInput.value, endInput.value], 
    onChange: function(selectedDates, dateStr, instance) {
      // Исправленная логика записи в hidden-поля:
      if (selectedDates.length === 2) {
        // Первая дата (Старт) в формате YYYY-MM-DD
        startInput.value = instance.formatDate(selectedDates[0], "Y-m-d");
        // Вторая дата (Конец) в формате YYYY-MM-DD
        endInput.value = instance.formatDate(selectedDates[1], "Y-m-d");
      } else if (selectedDates.length === 1) {
        // Пока выбрана только одна дата, временно дублируем её в оба инпута
        const singleDate = instance.formatDate(selectedDates[0], "Y-m-d");
        startInput.value = singleDate;
        endInput.value = singleDate;
      }
    }
  });
});

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
