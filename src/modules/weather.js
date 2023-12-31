const weather = (() => {
    function processData(data) {
      const {current: {feelslike_c: feelsLike, temp_c:temperature, wind_mph: windSpeed, humidity: humidity}, 
      location: {name: cityName}} = data;
      return {cityName, temperature, feelsLike, windSpeed, humidity};
    }
  
    async function fetchData(city) {
      const endpoint = 'https://api.weatherapi.com/v1/current.json?key=1bf8f4b95ad14cf186b162118230606&q='+ city +'&aqi=no'
      try {
        const response = await fetch(endpoint, { mode: "cors" });
        if (!response.ok) throw new Error(`City ${city} not found`);
        const data = processData(await response.json());
        return data;
      } catch (error) {
        alert(error)
        return null;
      }
    }
    return { fetchData };
  })();

export default weather;

