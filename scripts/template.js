function sidebarShow() {
  return `<a href="../index.html"><img class="logo" src="../assets/img/logo-white.png" alt="logo"/></a>
          <div class="navigation">
              <div id="summary">
                  <a href="../pages/summary.html" class="d_flex_c g_12 w-100">     
                      <img src="../assets/icon/summary.png" alt="summary icon"/>    
                      <span>Summary</span>
                  </a>
               </div>   
              <div id="task">
                  <a href="../pages/add_task.html" class="d_flex_c g_12 w-100">     
                      <img src="../assets/icon/addTask.png" alt="task icon"/>    
                      <span>Add Task</span>
                  </a>
              </div> 
              <div id="board">
                  <a href="../pages/board.html" class="d_flex_c g_12 w-100">     
                      <img src="../assets/icon/board.png" alt="board icon"/>    
                      <span>Board</span>
                  </a>
              </div>   
              <div id="contacts">
                  <a href="../pages/contacts.html" class="d_flex_c g_12 w-100">     
                      <img src="../assets/icon/contacts.png" alt="contacts icon"/>    
                      <span>Contacts</span>
                  </a>
              </div> 
          </div>
          <div class="privacy-container">
        <a href="privacy_policy.html">Privacy Policy</a>
        <a href="legal_notice.html">Legal notice</a>
      </div>
          `;
}

function getHeaderHTML() {
  return `
        <img class="logo-black" src="../assets/img/logo-black.png"  alt="logo"/>
        <h1>Kanban Project Management Tool</h1>
        <div class="profile">
         <a href="./help.html">
          <img class="help-icon" src="../assets/icon/help.png" alt="help icon" />
         </a>
          <span onclick="toggleHeaderMenu();">MS</span>
        </div>

        <div class="header-menu">
          <a href="./legal_notice.html">Legal Notice</a>
          <a href="./privacy_policy.html">Privacy Policy</a>
          <a href="#">Logout</a>
        </div>
  `;
}

function getUserListTemplate(value, option) {
  return `<option value="${value}">${option}</option>`;
}

function getAddTaskTemplate() {
  return `<div class="d_flex_column">
                  <div class="d_flex_c main-div">
                      <div class="media-w-300">
                          <h1 style="margin-bottom: 12px;">Add Task</h1>
                          <div>
                              <div class="flex">
                                  <span>Title<span class="color-red">*</span></span>
                                  <input id="title" type="text" placeholder="Enter a title" class="input-task input-field must-input" required>
                                  <span id="titleFailNote" class="d_none fail-note">Fail not all fields write</span>
                              </div>
                              <div class="flex">
                                  <span>Description</span>
                                  <textarea id="description" rows="5" cols="50" placeholder="Enter a Description"></textarea>
                              </div>
                              <div class="flex">
                                  <span>Assigned to</span>
                                  <select id="userlist" class="h-34 input-field">
                                      <option>Select contacts to assign</option>
                                  </select>
                              </div>
                          </div>
                      </div>
                      <div class="separator separator-max"></div>
                      <div class="media-w-300" style="margin: 46px 10px;">
                          <div class="flex">
                              <span>Due date<span class="color-red">*</span></span>
                              <input id="date" type="date" class="input-task must-input" required>
                              <span id="dateFailNote" class="d_none fail-note">Fail not all fields write</span>
                          </div>
                          <div class="flex">
                              <span>Prio</span>
                              <div class="d_flex">
                                  <button id="urgent"  class="d_flex_c prio-button" onclick="checkThePrioOfTask(1);">Urgent
                                      <div class="d_flex_column">
                                          <img id="urgent0" src="../assets/img/urgent.svg" alt="urgent" class="prio-button-image">
                                          <img id="urgent1" src="../assets/img/urgent.svg" alt="urgent" class="prio-button-image">
                                      </div>
                                  </button>

                                  <button id="medium" class="d_flex_c prio-button" onclick="checkThePrioOfTask(2);">Medium
                                      <div class="d_flex_column">
                                          <img id="medium0" src="../assets/img/medium-white.svg" alt="medium" class="prio-button-image">
                                          <img id="medium1" src="../assets/img/medium-white.svg" alt="medium" class="prio-button-image">
                                      </div>
                                  </button>

                                  <button id="low" class="d_flex_c prio-button" onclick="checkThePrioOfTask(3);">Low
                                      <div class="d_flex_column">
                                          <img id="low0" src="../assets/img/low.svg" alt="low" class="prio-button-image">
                                          <img id="low1" src="../assets/img/low.svg" alt="low" class="prio-button-image">
                                      </div>
                                  </button>
                              </div>
                          </div>
                          <div class="flex">
                              <span>Category<span class="color-red">*</span></span>
                              <select id="category" class="h-34 input-field must-input">
                                  <option>Select task category</option>
                              </select>
                              <span id="categoryFailNote" class="d_none fail-note">Fail not all fields write</span>
                          </div>
                          <div class="flex">
                              <span>Subtasks</span>
                              <div class="d_flex">
                                  <input type="text" placeholder="Add new subtask" class="w-100 h-34 input-field">
                                  <img src="../assets/img/plus.svg" style="margin: -24px;">
                              </div>
                              <span id="required-field">
                                  <span class="color-red">*</span>This field is required
                              </span>
                            
                          </div>
                      </div>
                  </div>
              </div>`;
}

function getContactsTemplate(index) {
    return `<div onclick="moreInfomationOfContact(${index})" class="d_flex_c_c contacts-div first-letter-hover">
                <span id="first-letter-${index}" class="first-letter" style="background-color:${contacts[index].color};"></span>
                <div class="center-contacts">
                    <span id="contact-name-${index}">${contacts[index].name}</span>
                    <a><span class="email">${contacts[index].email}</span></a>
                </div>
            </div>
    
    `;
}

function getMoreInfomationTemplate(numberOfContact) {
    return `<div class="d_flex_c_c g_12">
                <div style="padding: 85px 25px;">
                    <span id="first-big-letter-${numberOfContact}" class="first-big-letter" style="background-color:${contacts[numberOfContact].color};"></span>
                </div>
                <div class="d_flex_column">
                    <span class="bold" style="font-size: 34px;">${contacts[numberOfContact].name}</span>
                    <div class="d_flex g_12">
                        <div class="d_flex_c_c delete-and-edit">
                            <img src="../assets/icon/edit.svg"></img>
                            <span>Edit</span>
                        </div>
                        <div class="d_flex_c_c delete-and-edit">
                            <img src="../assets/icon/delete.svg"></img>
                            <span>Delete</span>
                        </div>
                    </div>
                </div>
              </div>
              <div>
                  <span class="bold">Contact Information</span>
                  <div class="d_flex_column" style="padding-top: 40px;">
                      <span class="bold">Email</span>
                      <a href="mailto:${contacts[numberOfContact].email}" class="p_12"><span class="email">${contacts[numberOfContact].email}</span></a>
                  </div>
                  <div class="d_flex_column">
                      <span class="bold">Phone</span>
                      <a href="tel:${contacts[numberOfContact].phone}" class="p_12 color-black"><span>${contacts[numberOfContact].phone}</span></a>
                  </div>
                  <div class="d_flex_column">
                      <span class="bold">Role</span>
                      <span class="p_12">${contacts[numberOfContact].role}</span>
                  </div>
              </div>
              <div class="more-button-div">
                  <div class="more-button">
                      <img src="../assets/img/show_more.svg" style="width: 12px;">            
                  </div>
              </div>`;
}

function getAddContactsTemplate() {
    return `<div>
                <div>
                    <img>
                    <div>
                        <h1>Add contact</h1>
                        <h2>Tasks are better with a team!</h2>
                        <div></div>
                    </div>
                </div>
                <div>
                    <div>
                        <img>
                    </div>
                    <div>
                        <div>
                            <input>
                            <img>
                        </div>
                        <div>
                            <input>
                            <img>
                        </div>
                        <div>
                            <input>
                            <img>
                        </div>
                        <div>
                            <div>
                                <button></button><img>
                            </div>
                            <div>
                                <button></button><img>
                            </div>
                        </div>
                    </div>
                </div>
            </div>`;
}