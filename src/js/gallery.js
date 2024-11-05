import Swiper from 'swiper';
import { Navigation, Pagination, EffectCoverflow } from 'swiper/modules';

import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import 'swiper/scss/effect-coverflow';

document.addEventListener('DOMContentLoaded', () => {
  const swiper = new Swiper('.swiper-container', {
    modules: [Navigation, Pagination, EffectCoverflow],
    effect: 'coverflow',
    grabCursor: 'true',
    centeredSlides: true,
    initialSlide: 2,
    preventClicks: true,
    slidesPerView: 'auto',
    lazy: true,

    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 250,
      modifier: 1,
      slideShadows: false,
    },
    on: {
      click(event) {
        swiper.slideTo(swiper.clickedIndex);
      },
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    breakpoints: {
      1200: {
        slidesPerView: 3,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      },
    },
  });
});
