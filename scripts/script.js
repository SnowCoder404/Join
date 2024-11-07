function renderTemplates(pageName) {
  const sidebarElement = document.querySelector('.sidebar');
  const headerElement = document.querySelector('.header');

  const sidebar = getSidebarHTML(pageName);
  const header = getHeaderHTML();

  headerElement.innerHTML = header;
  sidebarElement.innerHTML = sidebar;
}

function toggleHeaderMenu() {
  const menu = document.querySelector('.header-menu');
  menu.classList.toggle('show-element');
}
