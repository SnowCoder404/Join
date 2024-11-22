let currentContact = null;

async function loadContact() {
  loadSidebar();
  loadHeader();
  showWhichSiteIsAktiv();
  renderContacts();
}

function showWhichSiteIsAktiv() {
  addClassToElement('summary', 'no-active');
  addClassToElement('task', 'no-active');
  addClassToElement('board', 'no-active');
  addClassToElement('contacts', 'active');
}

function renderMoreInformationContent(numberOfContact) {
  // Den Kontakt anhand der numberOfContact-ID suchen
  const contactNameElement = document.getElementById('contact-name-' + numberOfContact);
  const contactEmailElement = document.getElementById('contact-email-' + numberOfContact);
  const jobTitle = checkJobAndColor(numberOfContact);

  renderInfoContainer(numberOfContact);
  renderInfoContent(contactNameElement, contactEmailElement, jobTitle, numberOfContact);
}

function moreInfomationOfContact(numberOfContact, isCreateOrUpdate) {
  // Durchlaufe alle Kontakte und überprüfe, ob einer die Klasse 'selected-contact' hat
  const selectedContactElement = document.querySelector('[data-contact].selected-contact');

  // Wenn kein Kontakt mit der Klasse 'selected-contact' gefunden wurde, setze 'more-information' zurück
  if (!selectedContactElement && !isCreateOrUpdate) {
    alert();
    document.getElementById('more-information').innerHTML = '';
    return;
  }
  renderMoreInformationContent(numberOfContact);
}

function renderInfoContainer(numberOfContact) {
  // Setze die 'more-information'-Sektion auf die Template-Daten des Kontakts
  const infoDiv = document.getElementById('more-information');
  infoDiv.innerHTML = getMoreInfomationTemplate(numberOfContact);
}

function renderInfoContent(...elements) {
  const [contactNameElement, contactEmailElement, jobTitle, numberOfContact] = elements;

  // Extrahiere die ersten Buchstaben des Kontaktnamens und zeige sie an
  document.getElementById(`first-big-letter-${numberOfContact}`).innerHTML = extractTheFirstLetter(
    contactNameElement.innerText.split(' '),
  );
  addClassToElement(`first-big-letter-${numberOfContact}`, jobTitle); // Fügt den Jobtitle hinzu
  contactNameElement.innerHTML = contacts[numberOfContact].name; // Name aktualisieren
  contactEmailElement.innerHTML = contacts[numberOfContact].email; // E-Mail aktualisieren
  currentContact = numberOfContact; // Setze den aktuellen Kontakt auf die gegebene Nummer
}

function getHiddenMoreInformation() {
  document.getElementById('big-content').style = '';
  addClassToElement('more-button-div', 'd_none');
}

function showContactsData() {
  const contactsList = document.querySelector('.contacts-list');

  contactsList.innerHTML = '';

  for (let index = 0; index < contacts.length; index += 1) {
    contactsList.innerHTML += getContactsTemplate(index);
    checkJobAndColor(index);
  }
}

async function saveAndCreate(event, content, numberOfContact) {
  event.preventDefault();

  if (content === 'Add') {
    addNewContact(defineNewContact());
    organizeContacts();
  } else {
    await updateContact(numberOfContact);
  }

  renderContacts(true);
}

async function updateContact(numberOfContact) {
  const contact = contacts[numberOfContact];
  const { id } = contact;
  saveContact(numberOfContact);
  sortContacts();
  showContactsData();
  moreInfomationOfContact(numberOfContact, true);
  organizeContacts();
  await updateDataAtBackend(id, 'contacts', { ...contact, id: undefined });
}

function defineNewContact() {
  let userData = {
    name: document.getElementById('name').value.trim(),
    email: document.getElementById('email').value.trim(),
    phone: document.getElementById('phone').value.trim(),
    role: 'Tester',
  };
  return userData;
}

async function addNewContact(userData) {
  contacts.push(userData);

  sortContacts();
  showContactsData();
  moreInfomationOfContact(contacts.indexOf(userData), true);
  hideAddContactMenu();

  const { name } = await postDataAtBackend(userData, 'contacts');

  contacts.slice(-1);
  contacts.push({ ...userData, id: name });
  sortContacts();
}

function saveContact(numberOfContact) {
  if (numberOfContact != null) {
    contacts[numberOfContact].name = document.getElementById('name').value;
    contacts[numberOfContact].email = document.getElementById('email').value;
    contacts[numberOfContact].phone = document.getElementById('phone').value;
    hideAddContactMenu();
  }
}

function hideAddContactMenu() {
  document.getElementById('add-contact-menu-dialog').classList.remove('show-modal');
}

function deleteAndCancel(content) {
  if (content === 'Add') {
    hideAddContactMenu();
  } else {
    hideAddContactMenu();
  }
}

function organizeContacts() {
  const listContactsElement = document.querySelector('.contacts-list');
  const listOfContacts = Array.from(listContactsElement.children);

  listContactsElement.innerHTML = ''; // Alle Kontakte löschen
  listOfContacts.forEach((contactEl) => {
    const firstLetter = contactEl.dataset.firstletter;
    let divGroup = document.querySelector(`[data-firstletter="${firstLetter}"]`);

    if (!divGroup) {
      divGroup = document.createElement('div');
      divGroup.setAttribute('data-firstletter', firstLetter);
      divGroup.innerHTML = `<h3>${firstLetter}</h3>`; // H3 direkt hier hinzufügen
      listContactsElement.appendChild(divGroup);
    }
    divGroup.appendChild(contactEl);
  });
}

function sortContacts() {
  contacts.sort((a, b) => {
    const nameA = a.name.charAt(0).toLowerCase();
    const nameB = b.name.charAt(0).toLowerCase();

    if (nameA < nameB) return -1;
    if (nameA > nameB) return 1;
    return 0;
  });
}

function toggleContactSelect(event, index) {
  const contactElement = event.target.closest('[data-contact]');
  const contactsList = Array.from(document.querySelectorAll('[data-contact]'));

  contactsList.forEach((contact) => {
    const isSelectedContact = contactElement === contact;

    if (isSelectedContact) {
      contact.classList.toggle('selected-contact');
    } else {
      contact.classList.remove('selected-contact');
    }
  });
  moreInfomationOfContact(index); // Kontaktinfo anzeigen
}

function closeContactModal(event) {
  const isTaskMenu = event.target.closest('.add-contact-overlay');
  const modal = event.currentTarget;

  if (!isTaskMenu) modal.classList.remove('show-modal');
}
