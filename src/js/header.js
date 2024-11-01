import './headerMenu.js';
import './headerScrollEffects.js';
import { setUnderline } from './headerSmoothScroll.js';

document.addEventListener('DOMContentLoaded', () => {
  const headerHeight = document.querySelector('.header').offsetHeight;
  document.querySelector('.header-nav').style.top = `${headerHeight}px`;
  const firstNavLink = document.querySelector('.header-nav-link');
  if (firstNavLink) {
    setUnderline(firstNavLink);
  }
});
