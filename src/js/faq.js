document.querySelectorAll('.faq-question').forEach(button => {
  button.addEventListener('click', () => {
    const faqItem = button.closest('.faq-item');
    const description = faqItem.querySelector('.faq-description-box');

    document.querySelectorAll('.faq-item').forEach(item => {
      const desc = item.querySelector('.faq-description-box');
      if (item !== faqItem) {
        item.classList.remove('active');
        desc.style.maxHeight = '0';
      }
    });

    faqItem.classList.toggle('active');

    if (faqItem.classList.contains('active')) {
      description.style.maxHeight = '300px';
    } else {
      description.style.maxHeight = '0';
    }
  });
});
