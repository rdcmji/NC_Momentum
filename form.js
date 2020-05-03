const form = document.querySelector(".js-form"),
  input = form.querySelector("input"),
  greeting = document.querySelector(".js-greeting");
const question = form.querySelector("span");

const USER_LS = "currentUser";
const SHOWING_CN = "showing";

function saveName(text){
  localStorage.setItem(USER_LS, text);
}

function askForName(){
  form.classList.add(SHOWING_CN);
  form.addEventListener("submit", function(event){
    event.preventDefault();
    const currentValue = input.value;
    paintGreeting(currentValue);
    saveName(currentValue);
  });
}

function paintGreeting(text){
  form.classList.remove(SHOWING_CN);
  greeting.classList.add(SHOWING_CN);
  greeting.innerText = `Hello, ${text}`;
}

function loadName(){
  const currentUser = localStorage.getItem(USER_LS)
  if(currentUser === null){
    askForName();
  }else{
    paintGreeting(currentUser);
  }
}

function init(){
  loadName()
}

init();