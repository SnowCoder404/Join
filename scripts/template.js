function getSidebarHTML(pageName) {
  return `
    <img class="logo" src="../assets/img/logo-white.png" alt="logo" />
      <div class="navigation">
        <div class="${pageName === 'summary' ? 'active' : ''}">
          <span>
            <img src="../assets/icon/summary.png" alt="summary icon" />
            <a href="../pages/summary.html">Summary</a>
          </span>
        </div>
        <div class="${pageName === 'add_task' ? 'active' : ''}">
          <span>
            <img src="../assets/icon/addTask.png" alt="add task icon" />
            <a href="../pages/add_task.html">Add Task</a>
          </span>
        </div>
        <div class="${pageName === 'board' ? 'active' : ''}">
          <span>
            <img src="../assets/icon/board.png" alt="board icon" />
            <a href="../pages/board.html">Board</a>
          </span>
        </div>
        <div class="${pageName === 'contacts' ? 'active' : ''}">
          <span>
            <img src="../assets/icon/contacts.png" alt="contacts icon" />
            <a href="../pages/contacts.html">Contacts</a>
          </span>
        </div>
      </div>
      <div class="privacy-container">
        <a href="#">Privacy Policy</a>
        <a href="#">Legal notice</a>
      </div>
  `;
}
