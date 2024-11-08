/**
 * 
 *  The function load all templates if the page load. 
 * 
 */

function loadTask() {
  loadSidebar();
  showWhichSiteIsAktiv();
  loadHeader();
  document.getElementById("add-task").innerHTML = getAddTaskTemplate();
  mediumPrio();
  
}

/**
* 
*  The function is for the sidebar and show which page is current.
*  
*/

function showWhichSiteIsAktiv() {
  addClassToElement("summary", "no-active");
  addClassToElement("task", "active");
  addClassToElement("board", "no-active");
  addClassToElement("contacts", "no-active");
}

/**
* The function is for the change the color from a element.
* 
* @param {string} item - The element that add the background color.
* @param {string} color - The background color that add to element.  
*/

function changeTheColor(item, color) {
  document.getElementById(item).style = `background-color: ${color}`;
}

/**
* 
*  The function clear all input fields and set the prio of medium. 
*/

function clear() {
  document.getElementById("title").value = "";
  document.getElementById("description").value = "";
  document.getElementById("date").value = "";
  mediumPrio()
}

/**
* 
*  The function check if all data input create a new task. 
* 
*/

function createNewTask() {
  if (checkAllData() < 1) {
      allDataAreCorrect();
      clear();
  };

}

/**
* 
*  The function check whether all data is correct.
*  
*/

function allDataAreCorrect() {
  let title = document.getElementById("title").value;
  let date = document.getElementById("date").value;
  let prio = document.getElementsByClassName("active-prio")[0].id;
  let taskObj = {
          "title": title,
          "date": date,
          "prio": prio,
          "category": category
  }
  console.log(taskObj);
}

/**
* 
*  The function counts the missing fields.
*  
*/

function checkAllData() {
  let fail = 0;
  let inputFieldsData = document.getElementsByClassName("must-input");
  for (let index = 0; index < inputFieldsData.length; index++) {
      if (isDataNullOrEmpty(inputFieldsData[index].value)) {
          document.getElementById(`${inputFieldsData[index].id}FailNote`).classList.remove("d_none");
          fail++;
      };
  }
  return fail;
}

/**
* 
* The function check whether data is null, undefined or empty.
* 
* @param {string} data - A string because you want to check.  
* @returns - When data null the function return true. 
*/

function isDataNullOrEmpty(data) {
  if (data == null || data == undefined || data == "" || data == "Select task category") {
      return true;
  } else {
      return false;
  }
}

/*
function showUserList() {
  for (let index = 0; index < userlist.length; index++) {
      let userName = userlist[index];
      document.getElementById("userlist").innerHTML += getUserListTemplate(index, userName);
  }
}
*/