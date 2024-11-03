import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';

document.addEventListener('DOMContentLoaded', () => {
  const swiper = new Swiper('.swiper-container', {
    modules: [Navigation, Pagination],
    lazy: true,
    slidesPerView: 1.2,
    spaceBetween: 8,
    centeredSlides: true,
    loop: true,
    zoom: {
      maxRatio: 2,
    },

    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },

    breakpoints: {
      1200: {
        slidesPerView: 3,
        spaceBetween: 16,
      },
    },
  });

  // // Додаємо умову для контролю видимості кнопок навігації
  // function updateNavigationVisibility() {
  //   const prevButton = document.querySelector('.swiper-button-prev');
  //   const nextButton = document.querySelector('.swiper-button-next');
  //   if (window.innerWidth >= 1200) {
  //     // Показуємо кнопки на десктопі
  //     prevButton.style.display = 'flex';
  //     nextButton.style.display = 'flex';
  //   } else {
  //     // Приховуємо кнопки на мобільних
  //     prevButton.style.display = 'none';
  //     nextButton.style.display = 'none';
  //   }
  // }

  // Виконуємо функцію при завантаженні сторінки та при зміні розміру вікна
  // updateNavigationVisibility();
  // window.addEventListener('resize', updateNavigationVisibility);
});
