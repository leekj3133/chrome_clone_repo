const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting")

const HIDDEN_CLSSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLSSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY,username)
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLSSNAME);
}



loginForm.addEventListener("submit",onLoginSubmit);

const savedUsername = localStorage.getItem(USERNAME_KEY)

if(savedUsername === null){    

} else{

}

console.log(savedUsername)