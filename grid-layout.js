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

/* Grid view options (gallery)
******************************/
const columns = document.getElementsByClassName("image-column");
const gridBtns = document.getElementsByClassName("grid-btn");

let i;

function oneColumn() {
  for (i = 0; i < columns.length; i++) {
    columns[i].style.flex = "100%";
  }
};

function twoColumns() {
  for (i = 0; i < columns.length; i++) {
    columns[i].style.flex = "50%";
  }
};

function fourColumns() {
  for (i = 0; i < columns.length; i++) {
    columns[i].style.flex = "25%";
  }
};

gridBtns[0].addEventListener("click", oneColumn);
gridBtns[1].addEventListener("click", twoColumns);
gridBtns[2].addEventListener("click", fourColumns);

for (let i = 0; i < gridBtns.length; i++) {
  gridBtns[i].addEventListener('click', function () {
    const current = document.querySelector(".active");

    if (current) {
      current.classList.remove("active");
    }

    this.classList.add("active");
  });
}