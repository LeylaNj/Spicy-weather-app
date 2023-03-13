function updateDate(timestamp) {
  let date = new Date(timestamp);
  let hours = date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[date.getDay()];
  let today = date.getDate();
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let month = months[date.getMonth()];

  return `${day}  ${today} ${month} ${hours}:${minutes}`;
}

function displayTemp(response) {
  console.log(response.data);
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = Math.round(response.data.temperature.current);
  let descriptionElement = document.querySelector("#description");
  descriptionElement.innerHTML = response.data.condition.description;
  let windElement = document.querySelector("#wind");
  windElement.innerHTML = `${Math.round(response.data.wind.speed)} km/h`;
  let humidityElement = document.querySelector("#humidity");
  humidityElement.innerHTML = `${response.data.temperature.humidity} %`;
  let pressureElement = document.querySelector("#pressure");
  pressureElement.innerHTML = `${response.data.temperature.pressure} hPa`;
  let dateElement = document.querySelector("#date-time");
  dateElement.innerHTML = updateDate(response.data.time * 1000);
}

let apiKey = "0tade3eeb77402aa34ff8a204c86adoc";
let apiUrl = `https://api.shecodes.io/weather/v1/current?query=genoa&key=${apiKey}&units=metric`;
axios.get(apiUrl).then(displayTemp);
