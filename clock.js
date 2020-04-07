const clockContainer = document.querySelector(".js-clock");
const clockTitle = clockContainer.querySelector("h1");

function clockFormatter(time){
  time = String(time);
  return time.padStart(2,"0");
}

function getTime(){
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const sec = date.getSeconds();

  clockTitle.innerText = `${clockFormatter(hours)}:${clockFormatter(minutes)}:${clockFormatter(sec)}`;
}

function init(){
  getTime();
  setInterval(getTime,100);
}

init();