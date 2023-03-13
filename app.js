let apiKey = "0tade3eeb77402aa34ff8a204c86adoc";
let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
axios.get(apiUrl).then(displayTemp);
