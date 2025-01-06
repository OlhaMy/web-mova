// Знаходимо елементи
const langButton = document.querySelector('.lang-button');
const dropdownToggle = document.querySelector('.dropdown-toggle');
const dropdownMenu = document.querySelector('.dropdown-menu');

// Додаємо подію для відкриття/закриття меню
dropdownToggle.addEventListener('click', () => {
  langButton.classList.toggle('active');
});

// Закриваємо меню при кліку поза ним
document.addEventListener('click', event => {
  if (!langButton.contains(event.target)) {
    langButton.classList.remove('active');
  }
});

// Додаємо подію для зміни активної мови
const menuButtons = document.querySelectorAll('.dropdown-menu button');
menuButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Змінюємо текст основної кнопки
    dropdownToggle.innerHTML = `${button.textContent} <span class="arrow">&#9662;</span>`;

    // Позначаємо активну мову
    menuButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');

    // Закриваємо меню
    langButton.classList.remove('active');
  });
});
