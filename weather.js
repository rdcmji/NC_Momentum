const weather = document.querySelector(".js-weather");

const API_KEY = "f41c7f94ffac036a6206e4cf64e0b5a1";
const COORDS = 'coords';

function getWeather(lat, lng){
  fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`).then(function(response){
    return response.json();
  }).then(function(json){
    const temp = json.main.temp;
    const place = json.name;
    weather.innerText = `${temp}°C @ ${place}`;
  });
}

function saveCoords(coordsObj){
  localStorage.setItem(COORDS, coordsObj);
}

function handleGeoSucces(position){
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  const coordsObj = {
    latitude,
    longitude
  };
  saveCoords(coordsObj);
  getWeather(latitude, longitude);
}

function handleGeoError(){
  console.log("Can't access geo location");
}

function askForCoords(){
  navigator.geolocation.getCurrentPosition(handleGeoSucces, handleGeoError);
}

function loadCoords(){
  const loadedCoord = localStorage.getItem(COORDS);
  if(loadedCoord === null){
    askForCoords();
  }else{
    const parseCoords = JSON.parse(loadedCoord);
    getWeather(parseCoords.latitude, parseCoords.longitude);
  }
}
function init(){
  loadCoords();
}

init();