function loadTask() {
    loadSidebar();
    showWhichSiteIsAktiv();
    mediumPrio();
}

function showWhichSiteIsAktiv() {
    addClassToElement("summary", "no-active");
    addClassToElement("task", "active");
    addClassToElement("board", "no-active");
    addClassToElement("contacts", "no-active");
}

/**
 * The function add a class to the element.
 * 
 * @param {string} element - The element that is added to the class. 
 * @param {string} aktiveClass - The class that is added to the element.
 */

function addClassToElement(element, aktiveClass) {
    document.getElementById(element).classList.add(aktiveClass);
}

function checkThePrioOfTask(num) {
    if (num == 1) {
        urgentPrio();
    } else if (num == 2) {
        mediumPrio();
    } else if (num == 3) {
        lowPrio();
    }
}

function urgentPrio() {
    document.getElementById("urgent").classList.add("active-prio");
    document.getElementById("medium").classList.remove("active-prio");
    document.getElementById("low").classList.remove("active-prio");
    changeTheColor("urgent", "red");
    changeTheColor("medium", "white");
    changeTheColor("low", "white");
}

function mediumPrio() {
    document.getElementById("urgent").classList.remove("active-prio");
    document.getElementById("medium").classList.add("active-prio");
    document.getElementById("low").classList.remove("active-prio");
    changeTheColor("urgent", "white");
    changeTheColor("medium", "orange");
    changeTheColor("low", "white");
}

function lowPrio() {
    document.getElementById("urgent").classList.remove("active-prio");
    document.getElementById("medium").classList.remove("active-prio");
    document.getElementById("low").classList.add("active-prio");
    changeTheColor("urgent", "white");
    changeTheColor("medium", "white");
    changeTheColor("low", "green");
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

function createNewTask() {
    let title = document.getElementById("title").value;
    let date = document.getElementById("date").value;
    let prio = document.getElementsByClassName("active-prio")[0].id;
    let taskObj = {
            "title": title,
            "date": date,
            "prio": prio
    }
    console.log(taskObj);
    clear();
}