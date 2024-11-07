function registerNewUser() {
    let name = document.getElementById("name").value
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let passwordConfirm = document.getElementById("passwordConfirm").value;
    let checkBox = document.getElementById("checkBox").checked;
    if (checkBox && password === passwordConfirm) {    
        createNewUser(name, email, password)
    }
}

function createNewUser(name, email, password) {
    let newUser = {
        "name": name,
        "email": email,
        "password": password
    }
    console.log(newUser);
}