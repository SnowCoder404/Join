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
    changeTheColor("urgent", "red");
    changeTheColor("medium", "white");
    changeTheColor("low", "white");
}

function mediumPrio() {
    changeTheColor("urgent", "white");
    changeTheColor("medium", "orange");
    changeTheColor("low", "white");
}

function lowPrio() {
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
    mediumPrio()
}