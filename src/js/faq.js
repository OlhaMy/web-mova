document.querySelectorAll('.faq-btn').forEach(button => {
  button.addEventListener('click', () => {
    const faqItem = button.closest('.faq-item');
    const description = faqItem.querySelector('.faq-description');

    faqItem.classList.toggle('active');

    if (faqItem.classList.contains('active')) {
      description.style.display = 'block';
    } else {
      description.style.display = 'none';
    }
  });
});
