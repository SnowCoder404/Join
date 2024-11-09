function loadContact() {
    loadSidebar();
    loadHeader();
    showWhichSiteIsAktiv();
    renderContacts();
    extractTheWords();
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

function extractTheWords() {
    for (let index = 0; index < contacts.length; index++) {
        let contactName = document.getElementById("contact-name-" + index).innerText;
        let firstLetter = document.getElementById("first-letter-" + index);
        firstLetter.innerHTML = extractTheFirstLetter(contactName.split(" "));
    }
}

function extractTheFirstLetter(word) {
    let shortcut = "";
    for (let index = 0; index < word.length; index++) {
        shortcut += word[index][0]
    }
    return shortcut;
}

function moreInfomationOfContact(numberOfContact) {
    let contactName = document.getElementById("contact-name-" + numberOfContact).innerText;
    document.getElementById("big-content").classList.remove("d_none");
    document.getElementById("more-information").innerHTML = getMoreInfomationTemplate(numberOfContact);
    document.getElementById("first-big-letter-" + numberOfContact).innerHTML = extractTheFirstLetter(contactName.split(" "));
}

function disableMoreInformation() {
    document.getElementById("big-content").classList.add("d_none");
}