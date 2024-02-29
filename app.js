let cityElement = document.querySelector(".city");
let gradusElement = document.querySelector(".gradus");
let btnElement = document.querySelector(".btn");
let mainElement = document.querySelector(".main");
let descriptionElement = document.querySelector(".description");

let API = "ca4a2c6f649b1676424e3416da2fe05a";


btnElement.addEventListener("click", () => {
  let city = cityElement.value;
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API}`;
  getWeather(url);
});


async function getWeather(url) {
  try {
    let response = await fetch(url);
    let data = await response.json();
    let temperatureInCelsius = data.main.temp - 273.15;
    let main = data.weather[0].main; 
    let description = data.weather[0].description;
    mainElement.innerHTML = `${main}`;
    descriptionElement.innerHTML = `${description}`;
    gradusElement.innerHTML = `${temperatureInCelsius.toFixed()}°`;
  } catch (error) {
    console.error("Error fetching weather data:", error);
  }
}
