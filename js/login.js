const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const hello = document.querySelector("#hello");
const nowTime = document.querySelector("#now");

const HIDDEN_CLASSNAME = "hidden";

function now() {
    const now = new Date();
    nowTime.innerText = now;
}

function onLoginSubmit(e) {
    e.preventDefault();
    const username = loginInput.value;
    loginForm.classList.add(HIDDEN_CLASSNAME);
    localStorage.setItem("username", username);

    hello.innerText = `${username}님 반가워요!`;
    hello.classList.remove(HIDDEN_CLASSNAME);
}

loginForm.addEventListener("submit", onLoginSubmit);

const savedUsername = localStorage.getItem("username");

if (savedUsername === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    hello.innerText = `${savedUsername}님 반가워요!`;
    hello.classList.remove(HIDDEN_CLASSNAME);
    loginForm.classList.add(HIDDEN_CLASSNAME);
}
