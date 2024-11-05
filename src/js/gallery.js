import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import 'swiper/scss/effect-coverflow';

const swiper = new Swiper('.swiper-container', {
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  initialSlide: 2,
  preventClicks: true,
  slidesPerView: 1.4,
  spaceBetween: 8,
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
      slidesPerView: 2.1,
      spaceBetween: 10,
      coverflowEffect: {
        depth: 400,
      },
      navigation: {
        prevEl: '.gallery-button-prev',
        nextEl: '.gallery-button-next',
      },
    },
  },
});
