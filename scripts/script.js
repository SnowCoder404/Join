function renderTemplates(pageName) {
  const sidebar = getSidebarHTML(pageName);
  const sidebarElement = document.querySelector('.sidebar');

  sidebarElement.innerHTML = sidebar;
}
