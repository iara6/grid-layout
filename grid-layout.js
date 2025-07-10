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
const navToggleBtn = document.querySelector('.nav-toggle');
/* height:  233.353px */
threeBarsBtn.addEventListener('click', () => {
  dropdownMenu.classList.toggle('show');
  navToggleBtn.classList.toggle('change');
});

/* clicking outside the dropdown menu */
window.addEventListener('click', (event) => {
  if (!dropdownMenu.contains(event.target) && !threeBarsBtn.contains(event.target)) {
    dropdownMenu.classList.remove('show');
    navToggleBtn.classList.remove('change');
  }
});

/* FAQ section (sidebar)
************************/
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


/* Divs' entrance animation
****************************/
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('class-animation');
    }
  });
});

const viewbox = document.querySelectorAll('.animate');
  viewbox.forEach(block => {
    observer.observe(block);
});

/* const viewbox = document.querySelectorAll('.animate');
console.log(viewbox.length, 'animate elements found'); // Add this
viewbox.forEach(block => {
  observer.observe(block);
}); */
/* news contect generate - 19dark-mode */