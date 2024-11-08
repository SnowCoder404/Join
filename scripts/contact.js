function loadContact() {
    loadSidebar();
    showWhichSiteIsAktiv();
}

function showWhichSiteIsAktiv() {
    addClassToElement("summary", "no-active");
    addClassToElement("task", "no-active");
    addClassToElement("board", "o-active");
    addClassToElement("contacts", "active");
}