function loadContact() {
    loadSidebar();
    loadHeader();
    showWhichSiteIsAktiv();
    renderContacts();
}

function renderContacts() {
    for (let index = 0; index < contacts.length; index++) {
        document.getElementById("list-of-contacts").innerHTML += getContactsTemplate(index);
    }
}

function showWhichSiteIsAktiv() {
    addClassToElement("summary", "no-active");
    addClassToElement("task", "no-active");
    addClassToElement("board", "no-active");
    addClassToElement("contacts", "active");
}