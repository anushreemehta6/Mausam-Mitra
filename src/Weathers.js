import { useState } from 'react';
import './Weathers.css';
import axios from 'axios';

function Weathers() {
  let [city, setCity] = useState("");
  let [weather, setWeather] = useState(null);

  async function getWeather() {
    try {
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=12641a5700a994d89580b67295167a0a`);
      setWeather(response.data)
    } catch (error) {
      alert('City not found. Please try again');
    }
  }

  return (
    <div className="container">
      <h1>Weather-Watch</h1>
      <input type="text" placeholder="Enter city name" onChange={(e) => setCity(e.target.value)} value={city} defaultValue="" />
      <button onClick={getWeather}>Get Weather</button>
      {weather && (
        <div className="weather-info">
          <h2>Weather in {weather.name}</h2>
          <p>Temperature: {Math.round(weather.main.temp - 273.15)}°C</p>
          <p>Weather: {weather.weather[0].description}</p>
          <p>Humidity: {weather.main.humidity}%</p>
          <p>Wind Speed: {weather.wind.speed} m/s</p>
        </div>
      )}
    </div>
  );
}

export default Weathers;