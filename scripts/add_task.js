function loadTask() {
    loadSidebar();
    mediumPrio();
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

function changeTheColor(item, color) {
    document.getElementById(item).style = `background-color: ${color}`;
}