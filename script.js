const apiKey = "efa84c85d72faa3c291c6229fd596b1f";

document.getElementById("getWeather").addEventListener("click", async () => {
  const city = document.getElementById("city").value;
  if (city) {
    const weatherData = await getWeather(city);
    displayWeather(weatherData);
  } else {
    alert("Please enter a valid city");
  }
});

async function getWeather(city) {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

function displayWeather(data) {
  if (data.cod === 200) {
    document.getElementById("cityName").innerText = data.name;
    document.getElementById(
      "temperature"
    ).innerText = `Temperature: ${data.main.temp} °C`;
    document.getElementById("description").innerText =
      data.weather[0].description;
    document.getElementById(
      "humidity"
    ).innerText = `Humidity: ${data.main.humidity} %`;
  } else {
    alert("Your desired City couldnot be  found");
  }
  console.log(data);
}
