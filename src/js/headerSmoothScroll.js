import { setIsAutoScrolling } from './headerScrollEffects.js';

const underline = document.querySelector('.underline');
const navLinks = document.querySelectorAll('.header-nav-link');

export function setUnderline(element) {
  const rect = element.getBoundingClientRect();
  const underlineWidth = rect.width * 0.8;
  const underlineLeftOffset =
    element.offsetLeft + (rect.width - underlineWidth) / 2;

  underline.style.width = `${underlineWidth}px`;
  underline.style.left = `${underlineLeftOffset}px`;
}

export function activateLink(targetId) {
  const navLinks = document.querySelectorAll('.header-nav-link');

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${targetId}`) {
      link.classList.add('active');
      requestAnimationFrame(() => setUnderline(link));
    }
  });
}

navLinks.forEach(link => {
  link.addEventListener('click', function () {
    setUnderline(link);
  });
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const targetElement = document.querySelector(this.getAttribute('href'));
    if (targetElement) {
      const targetPosition =
        targetElement.getBoundingClientRect().top + window.pageYOffset;
      const startPosition = window.pageYOffset;
      const distance = targetPosition - startPosition;
      const duration = 500;
      let startTime = null;

      setIsAutoScrolling(true);

      function animation(currentTime) {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const run = ease(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) {
          requestAnimationFrame(animation);
        } else {
          setIsAutoScrolling(false);
        }
      }

      function ease(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return (c / 2) * t * t + b;
        t--;
        return (-c / 2) * (t * (t - 2) - 1) + b;
      }

      requestAnimationFrame(animation);
    }
  });
});

window.addEventListener('hashchange', () => {
  const activeLink = document.querySelector(
    `a[href="${window.location.hash}"]`
  );
  if (activeLink) {
    setUnderline(activeLink);
  }
});
