
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
            </div>`;
}

function getSidebarHTML(pageName) {
  return `
    <img class="logo" src="../assets/img/logo-white.png" alt="logo" />
      <div class="navigation">
        <a  href="../pages/summary.html" class="${pageName === 'summary' ? 'active' : ''}">
          <span>
            <img src="../assets/icon/summary.png" alt="summary icon" />
            <span>Summary</span>
          </span>
        </a>
        <a href="../pages/add_task.html" class="${pageName === 'add_task' ? 'active' : ''}">
          <span>
            <img src="../assets/icon/addTask.png" alt="add task icon" />
            <span>Add Task</span>
          </span>
        </a>
        <a href="../pages/board.html" class="${pageName === 'board' ? 'active' : ''}">
          <span>
            <img src="../assets/icon/board.png" alt="board icon" />
            <span>Board</span>
          </span>
        </a>
        <a href="../pages/contacts.html" class="${pageName === 'contacts' ? 'active' : ''}">
          <span>
            <img src="../assets/icon/contacts.png" alt="contacts icon" />
            <span>Contacts</span>
          </span>
        </a>
      </div>
      <div class="privacy-container">
        <a href="privacy_policy.html">Privacy Policy</a>
        <a href="legal_notice.html">Legal notice</a>
      </div>
  `;
}
