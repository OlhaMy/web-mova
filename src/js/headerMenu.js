const refs = {
  btnBurger: document.querySelector('.header-burger'),
  btnClose: document.querySelector('.header-icon-button'),
  backdrop: document.querySelector('.backdrop'),
  headerNav: document.querySelector('.header-nav'),
};

export function openMobileMenu() {
  document.documentElement.classList.add('body-prevent-scroll');
  refs.backdrop.classList.add('backdrop-open');
  refs.headerNav.classList.add('header-nav-open');
}

export function closeMobileMenu() {
  document.documentElement.classList.remove('body-prevent-scroll');
  refs.backdrop.classList.remove('backdrop-open');
  refs.headerNav.classList.remove('header-nav-open');
}

refs.btnBurger.addEventListener('click', openMobileMenu);
refs.btnClose.addEventListener('click', closeMobileMenu);

window.addEventListener('click', e => {
  if (e.target === refs.backdrop) {
    closeMobileMenu();
  }
});

window.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    closeMobileMenu();
  }
});

document.querySelectorAll('.header-nav-link').forEach(link => {
  link.addEventListener('click', () => {
    closeMobileMenu();
  });
});
