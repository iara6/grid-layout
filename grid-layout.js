/* Copyright date */
const date = document.getElementById("copyright-date");
date.innerHTML = new Date().getFullYear();

/* Dark mode button */
const switchBtn = document.querySelector('.switch-button');

switchBtn.addEventListener('click', () => {
  const darkModeOn = switchBtn.classList.toggle('slide');
  document.documentElement.classList.toggle('dark-mode', darkModeOn); /* toggle('class', condition);documentElement returns <html> */
});

/* Dropdown menu (three bars button) */
const threeBarsBtn = document.querySelector('.three-bars-btn-div');
const dropdownMenu = document.querySelector('.dropdown-menu'); 
/* height:  233.353px */
threeBarsBtn.addEventListener('click', () => {
  dropdownMenu.classList.toggle('show');
});