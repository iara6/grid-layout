/* Copyright date 
******************/
const date = document.getElementById("copyright-date");
date.innerHTML = new Date().getFullYear();

/* Dark mode button 
********************/
const switchBtn = document.querySelector('.switch-button');

switchBtn.addEventListener('click', () => {
  const darkModeOn = switchBtn.classList.toggle('slide');
  document.documentElement.classList.toggle('dark-mode', darkModeOn); /* toggle('class', condition);documentElement returns <html> */
});

/* Dropdown menu (three bars button) 
*************************************/
const threeBarsBtn = document.querySelector('.three-bars-btn-div');
const dropdownMenu = document.querySelector('.dropdown-menu'); 
/* height:  233.353px */
threeBarsBtn.addEventListener('click', () => {
  dropdownMenu.classList.toggle('show');
});

/* clicking outside the dropdown menu */

window.addEventListener('click', (event) => {
  if (!dropdownMenu.contains(event.target) && !threeBarsBtn.contains(event.target)) {
    dropdownMenu.classList.remove('show');
  }
});

/* FAQ section
***************/
const questionCollapsibleBtns = document.querySelectorAll('.question-chevron-container');

questionCollapsibleBtns.forEach((btn) => {
  const collapsibleContainer = btn.parentElement;
  const answerContent = collapsibleContainer.querySelector('.faq-answer'); 

  btn.addEventListener("click", () => {
    collapsibleContainer.classList.toggle('show-hide-content');

    if (collapsibleContainer.classList.contains('show-hide-content')) {
      let fullHeight = answerContent.scrollHeight + 'px';
      answerContent.style.maxHeight = fullHeight;
    } else {
      answerContent.style.maxHeight = '0px';
    }
  });
});
