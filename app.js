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
}

let apiKey = "0tade3eeb77402aa34ff8a204c86adoc";
let apiUrl = `https://api.shecodes.io/weather/v1/current?query=genoa&key=${apiKey}&units=metric`;
axios.get(apiUrl).then(displayTemp);
