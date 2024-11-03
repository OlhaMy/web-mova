import './headerMenu.js';
import './headerScrollEffects.js';
import { setUnderline } from './headerSmoothScroll.js';

document.addEventListener('DOMContentLoaded', () => {
  const headerHeight = document.querySelector('.header').offsetHeight;

  document.querySelector('.header-nav').style.top = `${headerHeight}px`;

  const activeLink =
    document.querySelector('.header-nav-link.active') ||
    document.querySelector('.header-nav-link');

  if (activeLink) {
    setUnderline(activeLink);
  }
});
