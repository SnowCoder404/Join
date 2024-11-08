function loadSummary() {
    loadSidebar();
    loadHeader();
    showWhichSiteIsAktiv();
}

function showWhichSiteIsAktiv() {
    addClassToElement("summary", "active");
    addClassToElement("task", "no-active");
    addClassToElement("board", "no-active");
    addClassToElement("contacts", "no-active");
}