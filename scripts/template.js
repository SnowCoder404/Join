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
