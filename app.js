function formatDate(timestamp) {
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
  let year = date.getFullYear();

  return `${day},  ${today} ${month} ${year}, <strong> ${hours}:${minutes}</strong>`;
}

function displayTemp(response) {
  console.log(response.data);
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = Math.round(response.data.temperature.current);

  celsiusTemperature = response.data.temperature.current;

  let descriptionElement = document.querySelector("#description");
  descriptionElement.innerHTML = response.data.condition.description;
  let windElement = document.querySelector("#wind");
  windElement.innerHTML = `${Math.round(response.data.wind.speed)} km/h`;
  let humidityElement = document.querySelector("#humidity");
  humidityElement.innerHTML = `${response.data.temperature.humidity} %`;
  let pressureElement = document.querySelector("#pressure");
  pressureElement.innerHTML = `${response.data.temperature.pressure} hPa`;
  let dateElement = document.querySelector("#date-time");
  dateElement.innerHTML = formatDate(response.data.time * 1000);
  let iconElement = document.querySelector("#icon");
  iconElement.setAttribute(
    "src",
    `https://shecodes-assets.s3.amazonaws.com/api/weather/icons/${response.data.condition.icon}.png`
  );
  iconElement.setAttribute("alt", response.data.condition.description);

  let cityElement = document.querySelector("#city");
  cityElement.innerHTML = response.data.city;
}
function search(city) {
  let apiKey = "0tade3eeb77402aa34ff8a204c86adoc";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayTemp);
}

function getCity(event) {
  event.preventDefault();
  let cityInputElement = document.querySelector("#city-input");
  search(cityInputElement.value);
}

let formElement = document.querySelector("#form-input");
formElement.addEventListener("submit", getCity);
search("Genoa");

function dispalyFahrenheitTemp(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector("#temperature");
  let fahrenheitTemperature = (celsiusTemperature * 9) / 5 + 32;
  temperatureElement.innerHTML = Math.round(fahrenheitTemperature);
  celsius.classList.remove("active");
  fahrenheit.classList.add("active");
}

function dispalyCelsiusTemp(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = Math.round(celsiusTemperature);
  celsius.classList.add("active");
  fahrenheit.classList.remove("active");
}

let celsiusTemperature = null;

let fahrenheit = document.querySelector("#fahrenheit");
fahrenheit.addEventListener("click", dispalyFahrenheitTemp);

let celsius = document.querySelector("#celsius");
celsius.addEventListener("click", dispalyCelsiusTemp);
