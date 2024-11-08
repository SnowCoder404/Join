// function renderTemplates(pageName) {
//   const sidebarElement = document.querySelector('.sidebar');
//   const headerElement = document.querySelector('.header');

//   const sidebar = getSidebarHTML(pageName);
//   const header = getHeaderHTML();

//   headerElement.innerHTML = header;
//   sidebarElement.innerHTML = sidebar;
// }


function loadSidebar() {
  document.getElementById("sidebar").innerHTML = sidebarShow();
}

/**
 * 
 * The function add a class to the element.
 * 
 * @param {string} element - The element that is added to the class. 
 * @param {string} aktiveClass - The class that is added to the element.
 */

function addClassToElement(element, aktiveClass) {
  document.getElementById(element).classList.add(aktiveClass);
}

function loadHeader() {
  document.querySelector('.header').innerHTML = getHeaderHTML();


}


function toggleHeaderMenu() {
  const menu = document.querySelector('.header-menu');
  menu.classList.toggle('show-element');
}
