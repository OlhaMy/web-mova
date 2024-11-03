document.addEventListener('DOMContentLoaded', () => {
  const footerYearElement = document.querySelector('.footer-year');
  if (footerYearElement) {
    footerYearElement.textContent = new Date().getFullYear();
  }
});
