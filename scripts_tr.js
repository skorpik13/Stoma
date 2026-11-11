// scripts_tr.js
 
// Флаг начальной загрузки
let initialLoad = true;
 
// Функция форматирования даты
function formatDate(date) {
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const day = date.getDate().toString().padStart(2, '0');
  return `${year}-${month}-${day}`;
}
 
// Получение имени активной вкладки
function getActiveTabName() {
  const activeBtn = document.querySelector('.tablink.active[data-tab]');
  return activeBtn?.getAttribute('data-tab') || 'nalog';
}
 
// Возвращает текущую таблицу по активной вкладке
function getActiveTransactionsTable() {
  const tab = getActiveTabName();
  if (tab === 'nalog') {
    return document.getElementById('transactionsTableNalog');
  } else if (tab === 'cash') {
    return document.getElementById('transactionsTableCash');
  }
  return null;
}
 
// Загрузка по активной вкладке
function loadActiveTabTransactions() {
  const tab = getActiveTabName();
  if (tab === 'nalog') {
    loadTransactions();
  } else if (tab === 'cash') {
    loadCashTransactions();
  }
}
 
// 1) Загрузка транзакций на вкладке "nalog"
function loadTransactions() {
  const startDateInput = document.getElementById('startDate');
  const endDateInput = document.getElementById('endDate');
  
  let startDate = '';
  let endDate = '';

  if (startDateInput && endDateInput) {
    // Если мы в админке — берем даты из инпутов
    startDate = startDateInput.value;
    endDate = endDateInput.value;
  } else {
    // Если мы на клиентской странице — берем даты из URL-параметров
    const urlParams = new URLSearchParams(window.location.search);
    
    // Получаем текущую дату в формате YYYY-MM-DD (с учетом локального часового пояса)
    const today = new Date().toLocaleDateString('sv-SE'); // 'sv-SE' возвращает формат YYYY-MM-DD
    
    startDate = urlParams.get('date') || urlParams.get('date_filter') || today;
    endDate = startDate; // Для клиента обычно это один и тот же день
}

  if (!startDate || !endDate) {
    alert('Пожалуйста, выберите обе даты.');
    return;
  }
 
  if (!startDate || !endDate) {
    alert('Пожалуйста, выберите обе даты.');
    return;
  }
 
  const table = getActiveTransactionsTable();
  let oldRowCount = 0;
  if (table) {
    const tb = table.querySelector('tbody');
    oldRowCount = tb ? tb.querySelectorAll('tr').length : 0;
  }
 
  fetch('fetch_transactions.php', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: `startDate=${encodeURIComponent(startDate)}&endDate=${encodeURIComponent(endDate)}`
  })
  .then(response => response.text())
  .then(html => {
    // 1. Отрисовываем пришедшую от fetch_transactions.php таблицу на экране
    if (table) table.innerHTML = html;
 
    // 2. Находим только что созданный текстовый инпут фильтра даты внутри таблицы
    const nalogFilterInput = document.getElementById('date_filter');
 
    // 3. Если он пустой, принудительно вставляем в него текущую дату компьютера (ДД.ММ.ГГГГ)
    if (nalogFilterInput && !nalogFilterInput.value) {
      const urlParams = new URLSearchParams(window.location.search);
      const urlDate = urlParams.get('date') || urlParams.get('date_filter');
      if (urlDate) {
        const parts = urlDate.split('-');
        nalogFilterInput.value = parts.length === 3 ? `${parts[2]}.${parts[1]}.${parts[0]}` : urlDate;
      } else {
        nalogFilterInput.value = new Date().toLocaleDateString('ru-RU');
      }
    }
 
    // 4. Инициализируем стандартные обработчики вашей таблицы
    setupFilters();
    updateTableTotals();
 
    // 5. Даем браузеру 20 миллисекунд на применение маски и запускаем фильтрацию строк
    setTimeout(() => {
      if (typeof filterAll === 'function') {
        filterAll();
      }
    }, 20);
 
    // 6. Подсчет новых строк для уведомлений (перенесено внутрь блока .then)
    const newRowCount = table ? table.querySelectorAll('tbody tr').length : 0;
    if (newRowCount > oldRowCount) {
      if (!initialLoad) {
        // sendTelegramMessage(`Обновление транзакций: добавлено ${newRowCount - oldRowCount} новых записей.`);
      }
    }
    initialLoad = false;
  })
  .catch(error => {
    console.error('Ошибка загрузки данных:', error);
  });
}
 
 
// 2) Загрузка наличных на вкладке "cash"
function loadCashTransactions() {
  const startDate = document.getElementById('startDate').value;
  const endDate = document.getElementById('endDate').value;
 
  const checked = document.querySelector('input[name="payment_type"]:checked');
  const paymentType = checked ? checked.value : 'all';
 
  const table = getActiveTransactionsTable();
  let oldRowCount = 0;
  if (table) {
    const tb = table.querySelector('tbody');
    oldRowCount = tb ? tb.querySelectorAll('tr').length : 0;
  }
 
  fetch('fetch_cash.php', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: `startDate=${encodeURIComponent(startDate)}&endDate=${encodeURIComponent(endDate)}&payment_type=${encodeURIComponent(paymentType)}`
  })
  .then(response => response.text())
  .then(html => {
    if (table) table.innerHTML = html;
 
        const cashPanel = document.getElementById('cashTab');
        if (cashPanel) {
          // Сбрасываем и тут же возвращаем скролл на 1 пиксель,
          // чтобы заставить браузер намертво закрепить th на top: 0
          cashPanel.scrollTop = 1;
          cashPanel.scrollTop = 0;
        }
 
//const cashDateInp = table ? table.querySelector('input.table-filter[data-column="0"]') : null; if(cashDateInp && !cashDateInp.value) cashDateInp.value = new Date().toLocaleDateString('ru-RU');
    const cashDateInp = table ? table.querySelector('input.table-filter[data-column="0"]') : null; 
    if (cashDateInp && !cashDateInp.value) {
      // Читаем параметры из строки браузера
      const urlParams = new URLSearchParams(window.location.search);
      const urlDate = urlParams.get('date') || urlParams.get('date_filter');
 
      if (urlDate) {
        // Переводим формат YYYY-MM-DD в ДД.ММ.ГГГГ
        const parts = urlDate.split('-');
        cashDateInp.value = parts.length === 3 ? `${parts[2]}.${parts[1]}.${parts[0]}` : urlDate;
      } else {
        // Если даты в URL нет — ставим текущую
        cashDateInp.value = new Date().toLocaleDateString('ru-RU');
      }
    }
 
   setupFilters();
    updateTableTotals();
 
    const newRowCount = table ? table.querySelectorAll('tbody tr').length : 0;
    if (newRowCount > oldRowCount) {
      // Можно раскомментировать: sendTelegramMessage(...)
    }
    initialLoad = false;
  })
  .catch(error => {
    console.error('Ошибка загрузки наличных:', error);
  });
}
 
// Функция отправки Telegram (пример, можно оставить отключенным)
function sendTelegramMessage(message) {
  const botToken = 'YOUR_BOT_TOKEN'; // вставьте свой токен
  const chatIds = [7605706186, 1217905692, 7038569717];
  chatIds.forEach(chatId => {
      fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ chat_id: chatId, text: message })
      }).catch(error => console.error('Ошибка отправки Telegram:', error));
  });
}
 
// Инициализация и переключение вкладок
window.addEventListener('DOMContentLoaded', () => {
  // Устанавливаем стартовые даты по умолчанию (можно изменить)
  const tomorrow = new Date();
  const yesterday = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  yesterday.setDate(yesterday.getDate() - 1);
//  document.getElementById('startDate').value = formatDate(yesterday);
//  document.getElementById('startDate').value = '2026-01-01';
//  document.getElementById('endDate').value = formatDate(tomorrow);
  const startDateInput = document.getElementById('startDate');
  if (startDateInput) {
      startDateInput.value = '2026-01-01'; // Выполняется только если элемент найден
  }

  const endDateInput = document.getElementById('endDate');
  if (endDateInput) {
      endDateInput.value = formatDate(tomorrow); // Выполняется только если элемент найден
  }
 
  // По умолчанию открыть вкладку nalog
  // Если у вас есть openTab('nalog'), можно вызвать его. Здесь просто обновим контент.
  loadTransactions();
 
  // Автоматическое обновление каждые 5 минут для активной вкладки
  setInterval(() => loadActiveTabTransactions(), 300000);
});
 
// Обработчик кнопки загрузки транзакций
//document.getElementById('uploadBtn').addEventListener('click', () => {
  const uploadBtn = document.getElementById('uploadBtn');
  if (uploadBtn) {
    uploadBtn.addEventListener('click', () => {

  const startDate = document.getElementById('startDate').value;
  const endDate = document.getElementById('endDate').value;
 
  if (!startDate || !endDate) {
    alert('Пожалуйста, выберите даты.');
    return;
  }
 
  fetch(`upload_transactions.php?DateFrom=${encodeURIComponent(startDate)}&DateTo=${encodeURIComponent(endDate)}`)
  .then(response => {
    if (!response.ok) {
      return response.text().then(text => { throw new Error('Статус: ' + response.status + ', ответ: ' + text); });
    }
    loadActiveTabTransactions();
    return response.text();
  })
  .then(text => alert(text))
  .catch(err => {
    console.error('Ошибка загрузки транзакций:', err);
    alert('Ошибка: ' + err.message);
  });
 });
} 

// =====================
// Фильтры
// =====================
 
// Динамические фильтры по всем столбцам на второй вкладке
function applyDynamicTableFilters() {
  // Находим вторую таблицу
  const table = document.getElementById('transactionsTableCash');
  if (!table) return; // Если таблицы на экране нет, прерываем выполнение
 
  // 1. ПОИСК И ФИЛЬТРАЦИЯ СТРОК
  const thead = table.querySelector('thead');
  const tbody = table.querySelector('tbody');
  if (!thead || !tbody) return;
 
  // Находим все инпуты фильтров во второй строке заголовка
  const filterInputs = thead.querySelectorAll('.filter-row input.table-filter');
  const rows = tbody.querySelectorAll('tr');
 
  // Пробегаемся по каждой строке данных в таблице
  rows.forEach(row => {
    let shouldShow = true;
 
    // Проверяем строку по каждому активному инпуту фильтра
    filterInputs.forEach(input => {
      const filterValue = input.value.trim().toLowerCase();
      if (!filterValue) return; // Если фильтр пустой, пропускаем его
 
      // Определяем индекс колонки, к которой привязан этот инпут
      const colIndex = parseInt(input.getAttribute('data-column'), 10);
      const cell = row.cells[colIndex];
 
      if (cell) {
        const cellText = cell.textContent.trim().toLowerCase();
        // Если текст ячейки НЕ содержит введенное значение, скрываем строку
        if (!cellText.includes(filterValue)) {
          shouldShow = false;
        }
      }
    });
 
    // Управляем видимостью строки на основе проверок
    if (shouldShow) {
      row.style.display = '';
    } else {
      row.style.display = 'none';
    }
  });
 
 
  // 2. ДИНАМИЧЕСКИЙ РАСЧЕТ ИТОГОВ
  // Отбираем только те строки, которые остались ВИДИМЫМИ после фильтрации
  const visibleRows = Array.from(rows).filter(row => row.style.display !== 'none');
 
  // Список всех возможных колонок для подсчета сумм во второй таблице
  const fields = ['cash', 'coins', 'card', 'litres'];
 
  // Создаем объект для хранения сумм, изначально везде 0
  const totals = { cash: 0, coins: 0, card: 0, litres: 0 };
 
  // Пробегаемся по всем видимым строкам и суммируем числа
  visibleRows.forEach(row => {
    fields.forEach(field => {
      // Ищем ячейку итогов в tfoot по её уникальному ID (например, total_cash)
      const totalCell = document.getElementById(`total_${field}`);
      if (!totalCell) return; // Если этой колонки нет в текущем режиме (например, карт при наличных), пропускаем
 
      // Автоматически узнаем порядковый индекс этой колонки в таблице
      const colIndex = totalCell.cellIndex;
      const cell = row.cells[colIndex];
 
      if (cell) {
        // Очищаем текст ячейки от лишних символов (букв, пробелов) и превращаем в число
        const val = parseFloat(cell.textContent.replace(/[^0-9.,-]/g, '').replace(',', '.'));
        if (!isNaN(val)) {
          totals[field] += val;
        }
      }
    });
  });
 
  // 3. ВЫВОД РЕЗУЛЬТАТОВ В ИТОГОВУЮ СТРОКУ (TFOOT)
  fields.forEach(field => {
    const totalCell = document.getElementById(`total_${field}`);
    if (totalCell) {
      // Округляем посчитанную сумму до двух знаков после запятой
      totalCell.textContent = totals[field].toFixed(2);
    }
  });
}
 
/*function applyDynamicTableFilters() {
  const table = getActiveTransactionsTable();
  if (!table) return;
 
  const tbody = table.querySelector('tbody');
  if (!tbody) return;
 
  const filters = {};
  table.querySelectorAll('input.table-filter').forEach(input => {
    const col = parseInt(input.dataset.column, 10);
    const val = (input.value || '').trim().toLowerCase();
    if (!Number.isNaN(col) && val !== '') {
      filters[col] = val;
    }
  });
 
  Array.from(tbody.querySelectorAll('tr')).forEach(row => {
    const cells = Array.from(row.querySelectorAll('td'));
    let show = true;
    for (const [colStr, val] of Object.entries(filters)) {
      const col = parseInt(colStr, 10);
      const cellText = cells[col]?.textContent?.trim().toLowerCase() ?? '';
      if (!cellText.includes(val)) {
        show = false;
        break;
      }
    }
    row.style.display = show ? '' : 'none';
  });
 
  updateTableTotals();
}*/
 
// Расширенная настройка фильтров
// 1. Выносим чистую логику форматирования (чтобы использовать для всех полей даты)
function formatToDateString(value) {
  const digits = value.replace(/\D/g, '');
  let formatted = '';
  if (digits.length > 0) {
    formatted = digits.substring(0, Math.min(2, digits.length));
  }
  if (digits.length > 2) {
    formatted += '.' + digits.substring(2, Math.min(4, digits.length));
  }
  if (digits.length > 4) {
    formatted += '.' + digits.substring(4, Math.min(8, digits.length));
  }
  return formatted;
}
 
// 2. Глобальный перехватчик ввода для автоматических точек (работает всегда и везде)
document.addEventListener('input', (event) => {
  const input = event.target;
 
  // Проверяем: это либо статический 'date_filter', либо динамический фильтр первой колонки (дата)
  const isFirstTabDate = input.id === 'date_filter';
  const isSecondTabDate = input.classList.contains('table-filter') && input.getAttribute('data-column') === '0';
 
  if (isFirstTabDate || isSecondTabDate) {
    const oldLength = input.value.length;
    const cursorPosition = input.selectionStart;
 
    // Применяем форматирование
    input.value = formatToDateString(input.value);
 
    // Вычисляем новую позицию курсора, чтобы он не прыгал в конец при удалении/вводе точек
    const newLength = input.value.length;
    const nextPosition = cursorPosition + (newLength - oldLength);
 
    requestAnimationFrame(() => {
      input.selectionStart = input.selectionEnd = nextPosition;
    });
  }
});
 
// 3. Ваша основная функция настройки (с небольшими правками под динамику)
function setupFilters() {
  const filters = [
    { id: 'date_filter', colIndex: 2 },
    { id: 'amount_filter', colIndex: 3 },
    { id: 'volume_filter', colIndex: 5 },
    { id: 'n_card', colIndex: 6 },
    { id: 'status_filter', colIndex: 7 },
    { id: 'code_filter', colIndex: 8 },
    { id: 'comment_filter', colIndex: 9 }
  ];
 
  filters.forEach(({ id }) => {
    const input = document.getElementById(id);
    if (!input) return;
 
    // Логику маски отсюда убрали, так как её теперь круглосуточно контролирует document.addEventListener выше
 
    input.removeEventListener('input', filterAll);
    input.removeEventListener('change', filterAll);
    const eventType = (id === 'amount_filter') ? 'change' : 'input';
    input.addEventListener(eventType, filterAll);
  });
 
  // Привязка динамической фильтрации (поиск по строкам)
  const tableNalogs = document.getElementById('transactionsTableNalog');
  const tableCash = document.getElementById('transactionsTableCash');
  [tableNalogs, tableCash].forEach(tbl => {
    if (tbl) tbl.querySelectorAll('input.table-filter').forEach(inp => {
      inp.removeEventListener('input', applyDynamicTableFilters); // защищаем от дублирования
      inp.addEventListener('input', applyDynamicTableFilters);
    });
  });
 
  applyDynamicTableFilters();
}
 
// Основная фильтрация по конкретным полям (старые фильтры)
function filterAll() {
  const table = getActiveTransactionsTable();
  if (!table) return;
  const tbody = table.querySelector('tbody');
  if (!tbody) return;
  const rows = tbody.querySelectorAll('tr');
 
  const dateFilter = document.getElementById('date_filter')?.value.trim().toLowerCase() ?? '';
  const amountFilter = document.getElementById('amount_filter')?.value.trim() ?? '';
  const volumeFilter = document.getElementById('volume_filter')?.value.trim() ?? '';
  const cardFilter = document.getElementById('n_card')?.value.trim().toLowerCase() ?? '';
  const statusFilter = document.getElementById('status_filter')?.value.trim().toLowerCase() ?? '';
  const commentFilter = document.getElementById('comment_filter')?.value.trim().toLowerCase() ?? '';
  const codeFilterVal = document.getElementById('code_filter')?.value.trim() ?? '';
 
  rows.forEach(row => {
    const cells = row.querySelectorAll('td');
    const dateText = cells[1]?.textContent.trim().toLowerCase() ?? '';
    const amountText = cells[2]?.textContent.trim() ?? '';
    const volumeText = cells[4]?.textContent.trim() ?? '';
    const cardText = cells[5]?.textContent.trim().toLowerCase() ?? '';
    const statusText = cells[6]?.textContent.trim().toLowerCase() ?? '';
    const codeText = cells[7]?.textContent.trim() ?? '';
    const commentText = cells[8]?.textContent.trim().toLowerCase() ?? '';
 
    const matchDate = dateText.includes(dateFilter);
    const matchAmount = (amountFilter === '' || amountText === amountFilter);
    const matchVolume = (volumeFilter === '' || volumeText === volumeFilter);
    const matchCard = cardText.includes(cardFilter);
    const matchStatus = (statusFilter === '' || statusText === statusFilter);
    const matchComment = (commentFilter === '' || commentText.includes(commentFilter));
 
    let showByCard = true;
    if (cardFilter === '≠*') {
      showByCard = !cardText.includes('*');
    } else if (cardFilter !== '') {
      showByCard = cardText.includes(cardFilter);
    }
 
    let showByCode = true;
    if (codeFilterVal !== "") {
      if (codeFilterVal === "0") {
        showByCode = (codeText === "0");
      } else if (codeFilterVal === "notZero") {
        showByCode = (codeText !== "0");
      } else {
        showByCode = (codeText === codeFilterVal);
      }
    }
 
    if (matchDate && matchAmount && matchVolume && showByCard && matchStatus && matchComment && showByCode) {
      row.style.display = '';
    } else {
      row.style.display = 'none';
    }
  });
 
  updateTableTotals();
}
 
// Подсчет итогов
function updateTableTotals() {
  let totalSumm = 0;
  let totalCommis = 0;
  let totalVolume = 0;
  let totalCommisCard = 0; // Комиссия по картам
  let totalCommisQR = 0; // Комиссия по QR-кодам
 
  const table = getActiveTransactionsTable();
  if (!table) return;
  const tbody = table.querySelector('tbody');
  if (!tbody) return;
 
  tbody.querySelectorAll('tr').forEach(row => {
    if (row.style.display === 'none') return;
    const cells = row.querySelectorAll('td');
    const summStr = cells[2]?.textContent.trim().replace(',', '.') || '0';
    const commisStr = cells[3]?.textContent.trim().replace(',', '.') || '0';
    const volumeStr = cells[4]?.textContent.trim().replace(',', '.') || '0';
    const cardText = cells[5]?.textContent.trim() ?? ''; 
    const responseCode = cells[7]?.textContent.trim();

    if (responseCode !== '0' && responseCode !== '995' && responseCode !== '400') return;
 
    const summ = parseFloat(summStr);
    const commis = parseFloat(commisStr);
    const volume = parseFloat(volumeStr);
    if (!isNaN(summ)) totalSumm += summ;
//    if (!isNaN(commis)) totalCommis += commis;
    if (cardText.includes('*')) {
      totalCommisCard += commis;
    } else {
      totalCommisQR += commis;
    }
    if (!isNaN(volume)) totalVolume += volume;
  });

  const totalSummEl = document.getElementById('totalSumm');
  const totalCommisCardEl = document.getElementById('totalCommisCard');
  const totalCommisQREl = document.getElementById('totalCommisQR');
//  const totalCommisEl = document.getElementById('totalCommis');
  const totalVolumeEl = document.getElementById('totalVolume');

  if (totalSummEl) totalSummEl.textContent = totalSumm.toFixed(2);
//  if (totalCommisEl) totalCommisEl.textContent = totalCommis.toFixed(2);
  if (totalCommisCardEl) totalCommisCardEl.textContent = totalCommisCard.toFixed(2) + ' (Карты)';
  if (totalCommisQREl) totalCommisQREl.textContent = totalCommisQR.toFixed(2) + ' (QR-коды)';
  if (totalVolumeEl) totalVolumeEl.textContent = totalVolume.toFixed(0);
}
 
// Функции для открытия вкладок (упрощенная версия под ваш HTML)
function openTab(tabName) {
  const nalogPanel = document.getElementById('nalogTab');
  const cashPanel = document.getElementById('cashTab');
  const cashFilterContainer = document.getElementById('cashFilterContainer');
 
  if (nalogPanel && cashPanel) {
    // Находим все радиокнопки внутри контейнера фильтров
    const radioButtons = cashFilterContainer ? cashFilterContainer.querySelectorAll('input[type="radio"]') : [];
 
    if (tabName === 'nalog') {
      nalogPanel.style.display = 'block';
      cashPanel.style.display = 'none';
 
      // Активная вкладка
      document.querySelectorAll('.tablink').forEach(b => b.classList.remove('active'));
      const btnNal = document.querySelector('.tablink[data-tab="nalog"]');
      btnNal?.classList.add('active');
 
      // Оставляем контейнер видимым, но делаем радиокнопки НЕАКТИВНЫМИ
      if (cashFilterContainer) {
        cashFilterContainer.style.display = 'block'; 
        radioButtons.forEach(radio => radio.disabled = true);
      }
 
      loadTransactions();
    } else if (tabName === 'cash') {
      nalogPanel.style.display = 'none';
      cashPanel.style.display = 'block';
 
      document.querySelectorAll('.tablink').forEach(b => b.classList.remove('active'));
      const btnCash = document.querySelector('.tablink[data-tab="cash"]');
      btnCash?.classList.add('active');
 
      // Оставляем контейнер видимым и ДЕЛАЕМ радиокнопки АКТИВНЫМИ
      if (cashFilterContainer) {
        cashFilterContainer.style.display = 'block';
        radioButtons.forEach(radio => radio.disabled = false);
      }
 
      loadCashTransactions();
    }
  }
}
/*function openTab(tabName) {
  const nalogPanel = document.getElementById('nalogTab');
  const cashPanel = document.getElementById('cashTab');
  const cashFilterContainer = document.getElementById('cashFilterContainer');
 
  if (nalogPanel && cashPanel) {
    if (tabName === 'nalog') {
      nalogPanel.style.display = 'block';
      cashPanel.style.display = 'none';
      // активная вкладка
      document.querySelectorAll('.tablink').forEach(b => b.classList.remove('active'));
      const btnNal = document.querySelector('.tablink[data-tab="nalog"]');
      btnNal?.classList.add('active');
      if (cashFilterContainer) cashFilterContainer.style.display = 'none';
      loadTransactions();
    } else if (tabName === 'cash') {
      nalogPanel.style.display = 'none';
      cashPanel.style.display = 'block';
      document.querySelectorAll('.tablink').forEach(b => b.classList.remove('active'));
      const btnCash = document.querySelector('.tablink[data-tab="cash"]');
      btnCash?.classList.add('active');
      if (cashFilterContainer) cashFilterContainer.style.display = 'block';
      loadCashTransactions();
    }
  }
}*/
 
// Функция переключения радиокнопки
document.addEventListener('DOMContentLoaded', function() {
  const tableCash = document.getElementById('transactionsTableCash');
  if (!tableCash) return;
  // Если нужно, показать контейнер
  const container = document.getElementById('cashFilterContainer');
  if (container) container.style.display = 'block';
 
  // Начальная загрузка по умолчанию
  loadCashTransactions();
 
  // Делегирование: любая смена радиокнопки вызывает загрузку
  document.addEventListener('change', function(e) {
    if (e.target && e.target.name === 'payment_type') {
      loadCashTransactions();
    }
  });
});
 
// Функция для показа отчета
function generateReport() {
  const table = document.querySelector('#transactionsTableNalog');
  if (!table) return;
  const rows = table.querySelectorAll('tr');
 
  let totalOps = 0;
  const amountCounts = {};
  let successCount = 0;
  let failCount = 0;
  let cancelCount = 0;
 
  rows.forEach(row => {
    const cells = row.querySelectorAll('td');
    const amount = parseFloat(cells[2]?.textContent.trim().replace(',', '.') || '0');
    const code = cells[5]?.textContent.trim() || '';
 
    totalOps++;
    const sumStr = amount.toFixed(2);
    amountCounts[sumStr] = (amountCounts[sumStr] || 0) + 1;
 
    if (code === '0') successCount++;
    else if (code === '116') failCount++;
    else if (code === '400') cancelCount++;
  });
 
  let report = `
Всего операций: ${totalOps}
`;
  report += `
По суммам:
`;
  for (const sum in amountCounts) {
    report += `  ${sum}: ${amountCounts[sum]}\n`;
  }
  report += `
Успешных (код 0): ${successCount}
Неуспешных (код 116): ${failCount}
Отмененных (код 400): ${cancelCount}
`;
  alert(report);
}
 
function submitComment(event, form) {
    event.preventDefault(); // Запрещаем стандартную перезагрузку страницы
 
    const formData = new FormData(form);
 
    fetch(form.action, {
        method: 'POST',
        body: formData
    })
    .then(response => response.text())
    .then(data => {
        // Проверяем, что ответил сервер (ваш add_cardcomment.php возвращает "success")
        if (data.trim() === 'success') {
            alert('✅ Комментарий успешно добавлен!');
            form.reset(); // Очищаем поля формы после успешной отправки
        } else {
            alert('⚠️ Ошибка при добавлении: ' + data);
        }
    })
    .catch(error => {
        console.error('Ошибка:', error);
        alert('❌ Не удалось отправить запрос.');
    });
}

// Функция для обновления QR-кодов на странице сайта через get_expresspay_payments.php
function runBackgroundImport(dateParam) {
  // Находим кнопку и по ID, и по классу, чтобы она точно нашлась на любой странице
  const btn = document.getElementById('btnRefreshQR') || document.querySelector('.btn-refresh-qr');
  if (!btn) return;
  
  const originalText = btn.innerHTML;
  
  // Визуально блокируем кнопку на время работы скрипта
  btn.style.pointerEvents = 'none';
  btn.style.opacity = '0.7';
  btn.innerHTML = '⏳ Обновление...';

  // Преобразуем формат даты из YYYY-MM-DD в YYYYMMDD, убирая дефисы
  const formattedDate = dateParam.replace(/-/g, '');

  // 1. Отправляем фоновый запрос к get_expresspay_payments.php
  fetch(`get_expresspay_payments.php?date=${encodeURIComponent(formattedDate)}`)
    .then(response => {
      if (!response.ok) throw new Error('Ошибка сервера при выполнении get_expresspay_payments.php');
      return response.text();
    })
    .then(result => {
      // 2. Импорт завершен. Проверяем, где мы находимся (в админке или у клиентов)
      const nalogTable = document.getElementById('transactionsTableNalog');
      const cashTable = document.getElementById('transactionsTableCash');
      
      if (nalogTable || cashTable) {
        // Мы в панели управления. Собираем даты из инпутов хедера
        const sD = document.getElementById('startDate')?.value || dateParam;
        const eD = document.getElementById('endDate')?.value || dateParam;
        
        // Проверяем, какая вкладка сейчас активна
        const nalogPanel = document.getElementById('nalogTab');
        if (nalogPanel && nalogPanel.style.display !== 'none') {
          // Вызываем вашу реальную функцию для первой вкладки и передаем ей даты!
          if (typeof loadTransactions === 'function') loadTransactions(sD, eD);
        } else {
          // Вызываем вашу реальную функцию для второй вкладки с датами и типом оплаты
          const pT = document.querySelector('input[name="payment_type"]:checked')?.value || 'all';
          if (typeof loadCashTransactions === 'function') loadCashTransactions(sD, eD, pT);
        }
      } else {
        // Мы на клиентской странице transactions.php — обновляем экран целиком
        window.location.reload();
      }
    })
    .catch(error => {
      console.error('Ошибка фонового обновления:', error);
      alert('Не удалось обновить коды. Попробуйте еще раз.');
    })
    .finally(() => {
      // Возвращаем кнопку в исходное активное состояние
      if (btn) {
        btn.style.pointerEvents = 'auto';
        btn.style.opacity = '1';
        btn.innerHTML = originalText;
      }
    });
}
 
// Функция автоматического расчета высоты фиксированной шапки
function updateHeaderHeight() {
  const header = document.querySelector('.header-wrapper');
  if (header) {
    // Получаем точную высоту шапки в пикселях с учетом всех отступов
    const height = header.offsetHeight;
    // Передаем это значение в CSS переменную на весь документ
    document.documentElement.style.setProperty('--header-height', height + 'px');
  }
}
 
// Запускаем расчет при загрузке страницы
window.addEventListener('DOMContentLoaded', updateHeaderHeight);
// Пересчитываем, если пользователь повернул экран или изменил размер окна браузера
window.addEventListener('resize', updateHeaderHeight);
 
// На всякий случай запускаем перерасчет при переключении вкладок 
// (так как высота шапки может незначительно меняться)
document.querySelectorAll('.tablink').forEach(btn => {
  btn.addEventListener('click', () => {
    setTimeout(updateHeaderHeight, 50);
  });
});
