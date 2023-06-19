const view = (() => {
    function setWeatherResult(weatherData) {
      if (!weatherData) return;
  
      const weatherResult = document.getElementById("weatherResult");
      // weatherResult.classList.add("active");
  
      const cityName = document.getElementById("cityName");
      const temperature = document.getElementById("temperature");
      const feelsLike = document.getElementById("feelsLike");
      const humidity = document.getElementById("humidity");
      const wind = document.getElementById("wind");
  
      cityName.textContent = `${weatherData.cityName}`;
      temperature.textContent = `Temperature ${weatherData.temperature} °C`;
      feelsLike.textContent = `Feels like: ${weatherData.feelsLike} °C`;
      humidity.textContent = `Humidity: ${weatherData.humidity} %`;
      wind.textContent = `Wind: ${weatherData.windSpeed} m/h`;
    }
  
    return { setWeatherResult };
  })();
  
export default view;
