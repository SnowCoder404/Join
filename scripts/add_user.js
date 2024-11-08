const BACKEND_URL = "https://jointest-6cc29-default-rtdb.europe-west1.firebasedatabase.app/";

/**
 * 
 * Define the data from user and check is the checkbox checked ?
 *
 */

function registerNewUser() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let passwordConfirm = document.getElementById("passwordConfirm").value;
    let checkBox = document.getElementById("checkBox").checked;
    if (checkBox && password === passwordConfirm) {    
        createNewUser(name, email, password)
    }
}

/**
 * 
 * This is a function for the post data at backend.
 *   
 * @param {object} userData - A Object with name, email and password from user.
 */

async function postDataAtBackend(userData) {
    let data = await fetch (BACKEND_URL + "user" + ".json", {
        method: "POST",
        headers: { "Content-Type": "application/json" }, 
        body: JSON.stringify(userData)
    });
    let dataResponse = data.json(); 
    return dataResponse;
}

/**
 * The function create a new user and run a function the post data at backend. 
 * 
 * @param {string} name - The name from the user.
 * @param {string} email - The email address from user.
 * @param {string} password - The password from user.
 */

function createNewUser(name, email, password) {
    let newUser = {
        "name": name,
        "email": email,
        "password": password
    }
    postDataAtBackend(newUser);
    // Simulate a mouse click:
    window.location.href = "./add_task.html";   
}

