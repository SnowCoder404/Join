function loadContact() {
    loadSidebar();
    loadHeader();
    showWhichSiteIsAktiv();
}

function showWhichSiteIsAktiv() {
    addClassToElement("summary", "no-active");
    addClassToElement("task", "no-active");
    addClassToElement("board", "no-active");
    addClassToElement("contacts", "active");
}