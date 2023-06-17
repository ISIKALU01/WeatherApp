const endpoint = 'http://api.weatherapi.com/v1/current.json?key=1bf8f4b95ad14cf186b162118230606 &q=london&aqi=no'
const response = await fetch(endpoint, { mode: "cors" });
const data = await response.json();
console.log(data)

