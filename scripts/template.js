function getSidebarHTML(pageName) {
  return `
    <img class="logo" src="../assets/img/logo-white.png" alt="logo" />
      <div class="navigation">
        <a  href="../pages/summary.html" class="${pageName === 'summary' ? 'active' : ''}">
          <span>
            <img src="../assets/icon/summary.png" alt="summary icon" />
            <p>Summary</p>
          </span>
        </a>
        <a href="../pages/add_task.html" class="${pageName === 'add_task' ? 'active' : ''}">
          <span>
            <img src="../assets/icon/addTask.png" alt="add task icon" />
            <p>Add Task</p>
          </span>
        </a>
        <a href="../pages/board.html" class="${pageName === 'board' ? 'active' : ''}">
          <span>
            <img src="../assets/icon/board.png" alt="board icon" />
            <p>Board</p>
          </span>
        </a>
        <a href="../pages/contacts.html" class="${pageName === 'contacts' ? 'active' : ''}">
          <span>
            <img src="../assets/icon/contacts.png" alt="contacts icon" />
            <p>Contacts</p>
          </span>
        </a>
      </div>
      <div class="privacy-container">
        <a href="#">Privacy Policy</a>
        <a href="#">Legal notice</a>
      </div>
  `;
}
