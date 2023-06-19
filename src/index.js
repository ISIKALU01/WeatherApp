import weather from "./modules/weather";
import view from "./modules/viewresult";


const searchForm = document.getElementById('searchForm')
const searchInput = document.querySelector('input[type="text"]');
const searchBtn = document.getElementById('searchBtn');

searchForm.addEventListener("submit", (e) => {
    e.preventDefault();
  });


searchBtn.addEventListener("click", async () => {
    if (searchInput.value === "") return;
    const weatherData = await weather.fetchData(searchInput.value);
    console.log(weatherData)
    console.log(searchInput.value)
    view.setWeatherResult(weatherData);
  });