function renderTemplates(pageName) {
  const sidebarElement = document.querySelector('.sidebar');
  const headerElement = document.querySelector('.header');

  const sidebar = getSidebarHTML(pageName);
  const header = getHeaderHTML();

  headerElement.innerHTML = header;
  sidebarElement.innerHTML = sidebar;
}
