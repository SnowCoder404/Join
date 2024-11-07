
function loadSidebar() {
    document.getElementById("sidebar").innerHTML = sidebarShow();
}

function renderTemplates(pageName) {
  const sidebar = getSidebarHTML(pageName);
  const sidebarElement = document.querySelector('.sidebar');

  sidebarElement.innerHTML = sidebar;
}
