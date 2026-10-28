// Ждем, пока браузер полностью загрузит всю HTML-структуру сайта
document.addEventListener('DOMContentLoaded', function() {

 // --- ФУНКЦИЯ ДИНАМИЧЕСКОГО СТАРТА ЯНДЕКС.МЕТРИКИ ---
  function startYandexMetrika() {
    if (typeof window.ym === 'undefined') {
      (function(m,e,t,r,i,k,a){
        m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
        m[i].l=1*new Date();
        k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
      })(window, document,'script','https://mc.yandex.ru/metrika/tag.js','ym');

      ym(106324474, 'init', {
        ssr: true, 
        webvisor: true, 
        clickmap: true, 
        ecommerce: "dataLayer", 
        accurateTrackBounce: true, 
        trackLinks: true
      });
      console.log('Яндекс.Метрика успешно запущена после согласия.');
    }
  }

  // --- УПРАВЛЕНИЕ БАННЕРОМ COOKIE ---
  var banner = document.getElementById('cookie-consent-banner');
  var acceptBtn = document.getElementById('cookie-accept-all');
  var rejectBtn = document.getElementById('cookie-reject');

  // Проверяем прошлый выбор пользователя
  var cookieChoice = localStorage.getItem('cookieConsentChoice');

  if (!cookieChoice) {
    // Если выбора не было — показываем баннер
    if (banner) banner.style.display = 'block';
  } else if (cookieChoice === 'accepted') {
    // Если ранее уже согласился — включаем Метрику автоматически
    startYandexMetrika();
  } else if (cookieChoice === 'rejected') {
    // Если ранее отклонил — Метрика НЕ запускается, куки не собираются
    console.log('Метрика заблокирована пользователем.');
  }

  // Нажатие на кнопку "Принять все"
  if (acceptBtn) {
    acceptBtn.addEventListener('click', function() {
      localStorage.setItem('cookieConsentChoice', 'accepted');
      if (banner) banner.style.display = 'none';
      startYandexMetrika(); // Запускаем Метрику
    });
  }

  // Нажатие на кнопку "Отклонить необязательные"
  if (rejectBtn) {
    rejectBtn.addEventListener('click', function() {
      localStorage.setItem('cookieConsentChoice', 'rejected');
      if (banner) banner.style.display = 'none';
      // Метрику НЕ вызываем. Пользователь чист, аналитика заблокирована.
    });
  }

  // --- 1. КНОПКА ОТКРЫТИЯ/СКРЫТИЯ ФОРМЫ ---
  var toggleFormBtn = document.getElementById('toggleFormBtn');
  if (toggleFormBtn) {
    toggleFormBtn.addEventListener('click', function() {
      var container = document.getElementById('orderFormContainer');
      if (container) {
        container.classList.toggle('show');
        var formField = document.querySelector('.order-form input, .order-form textarea');
        if (formField) {
          setTimeout(function() {
            formField.focus();
          }, 300);
        }
      }
    });
  }

  // --- 2. КНОПКА "ЗАКАЗАТЬ" (ФИКСИРОВАННАЯ) ---
  var fixedOrderLink = document.getElementById('fixedOrderLink');
  if (fixedOrderLink) {
    fixedOrderLink.addEventListener('click', function(e) {
      e.preventDefault();
      var container = document.getElementById('orderFormContainer');
      if (container) {
        var formField = document.querySelector('#orderFormContainer input, #orderFormContainer textarea, #orderFormContainer select');
        container.classList.add('show');
        container.scrollIntoView({ behavior: 'smooth', block: 'start' });
        setTimeout(function() {
          if (formField) formField.focus();
        }, 300);
      }
    });
  }

  // --- 3. ССЫЛКА В ШАПКЕ ---
  var toggleFormLink = document.getElementById('toggleFormLink');
  if (toggleFormLink) {
    toggleFormLink.addEventListener('click', function(e) {
      e.preventDefault();
      var container = document.getElementById('orderFormContainer');
      if (container) {
        var formField = document.querySelector('#orderFormContainer input, #orderFormContainer textarea, #orderFormContainer select');
        container.classList.add('show');
        container.scrollIntoView({ behavior: 'smooth', block: 'start' });
        setTimeout(function() {
          if (formField) formField.focus();
        }, 300);
      }
    });
  }

  // --- 4. КНОПКА "НАВЕРХ" ---
  var scrollButton = document.getElementById('scrollToTop');
  if (scrollButton) {
    window.addEventListener('scroll', function() {
      if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        scrollButton.style.display = "block";
      } else {
        scrollButton.style.display = "none";
      }
    });

    scrollButton.addEventListener('click', function() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // --- 5. УВЕЛИЧЕНИЕ КАРТОЧЕК ТОВАРОВ ---
  var productImages = document.querySelectorAll('.product-card img');
  if (productImages.length > 0) {
    productImages.forEach(img => {
      img.addEventListener('click', () => {
        const isZoomed = img.style.transform === 'scale(4)';
        
        productImages.forEach(i => {
          i.style.transform = 'scale(1)';
        });
        
        if (!isZoomed) {
          img.style.transform = 'scale(4)';
        }
      });
    });
  }

  // --- 6. ОБРАБОТКА ФОРМЫ ЗАКАЗА ЧЕРЕЗ AJAX (RECAPTCHA V3) ---
  var orderForm = document.getElementById('orderForm');
  if (orderForm) {
    orderForm.addEventListener('submit', function(e) {
      var form = this;
      e.preventDefault(); 
      
      grecaptcha.ready(function() {
        grecaptcha.execute('6LfviQgtAAAAAKF4wz8qsLTAbJ2U1nJl2314STWS', {action: 'submit_form'}).then(function(token) {
          
          var responseInput = document.getElementById('g-recaptcha-response');
          if (responseInput) {
              responseInput.value = token;
          }
          
          var formData = new FormData(form);
          
          // Отправляем AJAX запрос в PHP
          fetch('/send_order.php', {
              method: 'POST',
              body: formData
          })
          .then(function(response) {
              // Если сервер вернул JSON, передаем его дальше, иначе — текст
              if (response.ok) {
                  return response.text(); 
              }
              throw new Error('Ошибка сервера');
          })
          .then(function(text) {
              try {
                  var data = JSON.parse(text.trim());
                  if (data.success) {
                      alert(data.message);
                      form.reset(); 
                  } else {
                      alert('Ошибка: ' + data.message); 
                  }
              } catch (jsonError) {
                  // Подстраховка под лояльный ответ PHP
                  if (text.includes('успешно') || text.includes('оформлен')) {
                      alert('Заказ успешно оформлен! Наш менеджер свяжется с вами.');
                      form.reset();
                  } else {
                      alert('Заказ отправлен, но сервер вернул нестандартный ответ.');
                  }
              }
          })
          .catch(function(error) {
              console.error('Ошибка сети:', error);
              alert('Произошла сетевая ошибка при отправке заказа.');
          });
        });
      });
    });
  }

}); // Конец блока DOMContentLoaded


// --- 7. ИНИЦИАЛИЗАЦИЯ КАРТЫ ЯНДЕКС (Вне DOMContentLoaded, так как у ymaps своя готовность) ---
// Проверяем, подключен ли скрипт Яндекса на странице и есть ли блок для карты
if (typeof ymaps !== 'undefined' && document.getElementById('map')) {
  ymaps.ready(function() {
    var myMap = new ymaps.Map("map", {
      center: [53.90838, 25.25214], 
      zoom: 16,
      // Включаем управление поведением карты
      behaviors: ['default', 'route'] 
    }, {
      // КРИТИЧЕСКИ ВАЖНО ДЛЯ СМАРТФОНОВ:
      // Заставляет карту адаптироваться под размеры блока, даже если они рассчитались не сразу
      autoFitToViewport: 'always' 
    });

    var myPlacemark = new ymaps.Placemark([53.908443, 25.252129], {
      hintContent: 'Водомат "ПЕРВАЯ ВОДА"',
      balloonContent: '"Первая вода"<br>+375(29)7018606'
    }, {
        preset: 'islands#greenDotIcon'
    });

    myMap.geoObjects.add(myPlacemark);

    // Дополнительная защита: если экран маленький, отключаем зум колесиком/скроллом, 
    // чтобы пользователь мог спокойно листать страницу пальцем поверх карты
    if (window.innerWidth <= 768) {
      myMap.behaviors.disable('scrollZoom');
    }
  });
}


document.getElementById('reset-cookies-btn').addEventListener('click', function(e) {
    e.preventDefault();
    // Удаляем выбор пользователя из памяти браузера
    localStorage.removeItem('cookieConsentChoice');
    // Перезагружаем страницу, чтобы снова вывелся баннер и заблокировалась аналитика
    window.location.reload();
});