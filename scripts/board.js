function loadBoard() {
    loadSidebar();
    showWhichSiteIsAktiv();
}

function showWhichSiteIsAktiv() {
    addClassToElement("summary", "no-active");
    addClassToElement("task", "no-active");
    addClassToElement("board", "active");
    addClassToElement("contacts", "no-active");
}