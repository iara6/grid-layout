/* Copyright date */

const date = document.getElementById("copyright-date");
date.innerHTML = new Date().getFullYear();

/* Dark mode button */

const switchBtn = document.querySelector('.switch-button');

switchBtn.addEventListener('click', () => {
  const darkModeOn = switchBtn.classList.toggle('slide');
  document.documentElement.classList.toggle('dark-mode', darkModeOn); /* toggle('class', condition);documentElement returns <html> */
});