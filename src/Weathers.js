import { useState } from "react";
import "./Weathers.css";
import axios from "axios";
import "./Weathers.css"

function Weathers() {
  let [city, setCity] = useState("");
  let [weather, setWeather] = useState(null);

  async function getWeather() {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=12641a5700a994d89580b67295167a0a`
      );
      setWeather(response.data);
    } catch (error) {
      alert("City not found. Please try again");
    }
  }

  return (
    <div classname="container">
      <p className="heading">Mausam-Mitra</p>
      <input
        type="text"
        placeholder="Enter city name"
        onChange={(e) => setCity(e.target.value)}
        value={city}
        defaultValue=""
      />
      <button onClick={getWeather}>Get Weather</button>
      {weather && (
        <div className="weather-info">
          <h2>Weather in {weather.name}</h2>
          <div className="std">
          <div className="tempr">
            <p>Temperature: {Math.round(weather.main.temp - 273.15)}°C</p>
            <svg
              width={60}
              height={60}
              data-name="Layer 1"
              id="Layer_1"
              viewBox="0 0 64 64"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
            >
              <defs>
                <style
                  dangerouslySetInnerHTML={{
                    __html:
                      ".cls-1{fill:#0baeff;}.cls-2,.cls-3,.cls-4{fill:none;stroke-linecap:round;}.cls-2{stroke:#0baeff;stroke-linejoin:round;stroke-width:12px;}.cls-3{stroke:#1441af;}.cls-3,.cls-4{stroke-miterlimit:10;stroke-width:6px;}.cls-4{stroke:#f7563c;}.cls-5{fill:url(#linear-gradient);}",
                  }}
                />
                <linearGradient
                  gradientTransform="translate(78 14) rotate(90)"
                  gradientUnits="userSpaceOnUse"
                  id="linear-gradient"
                  x1="27.34"
                  x2="38.68"
                  y1="40.25"
                  y2="54.24"
                >
                  <stop offset="0.02" stopColor="#f7563c" />
                  <stop offset={1} stopColor="#d43217" />
                </linearGradient>
              </defs>
              <title />
              <circle className="cls-1" cx={32} cy={46} r={12} />
              <line className="cls-2" x1={32} x2={32} y1={13} y2={46} />
              <line className="cls-3" x1={32} x2={32} y1={13} y2={37} />
              <line className="cls-4" x1={32} x2={32} y1={35} y2={46} />
              <circle
                className="cls-5"
                cx={32}
                cy={46}
                r={9}
                transform="translate(-22.49 59.06) rotate(-68.66)"
              />
            </svg>
          </div>
          <div className="weath">
            <p>Weather: {weather.weather[0].description}</p>
            <svg
              width={60}
              height={60}
              data-name="Layer 1"
              id="Layer_1"
              viewBox="0 0 64 64"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
            >
              <defs>
                <style
                  dangerouslySetInnerHTML={{
                    __html:
                      ".cls-1{fill:#efcc00;}.cls-2,.cls-5{fill:none;stroke-linecap:round;stroke-miterlimit:10;stroke-width:3px;}.cls-2{stroke:#efcc00;}.cls-3{fill:url(#linear-gradient);}.cls-4{fill:url(#linear-gradient-2);}.cls-5{stroke:#0baeff;}",
                  }}
                />
                <linearGradient
                  gradientTransform="matrix(-1, 0, 0, 1, -674.2, 0)"
                  gradientUnits="userSpaceOnUse"
                  id="linear-gradient"
                  x1="-693.28"
                  x2="-714.37"
                  y1="52.39"
                  y2="25.08"
                >
                  <stop offset={0} stopColor="#f2f2f2" />
                  <stop offset={1} stopColor="#cfcfcf" />
                </linearGradient>
                <linearGradient
                  gradientTransform="matrix(0, -1, -1, 0, 0.99, -691.22)"
                  gradientUnits="userSpaceOnUse"
                  id="linear-gradient-2"
                  x1="-732.41"
                  x2="-720.79"
                  y1="-51.12"
                  y2="-33.47"
                >
                  <stop offset="0.02" stopColor="#fff" />
                  <stop offset={1} stopColor="#fff" stopOpacity={0} />
                </linearGradient>
              </defs>
              <title />
              <circle className="cls-1" cx="39.8" cy={22} r="12.59" />
              <line className="cls-2" x1="39.8" x2="39.8" y1={2} y2="6.44" />
              <line className="cls-2" x1="39.8" x2="39.8" y1="37.56" y2={42} />
              <line className="cls-2" x1="19.8" x2="24.25" y1={22} y2={22} />
              <line className="cls-2" x1="55.36" x2="59.8" y1={22} y2={22} />
              <line className="cls-2" x1="25.66" x2="28.8" y1="7.86" y2={11} />
              <line className="cls-2" x1="50.8" x2="53.94" y1={33} y2="36.14" />
              <line className="cls-2" x1="25.66" x2="28.8" y1="36.14" y2={33} />
              <line className="cls-2" x1="50.8" x2="53.94" y1={11} y2="7.86" />
              <path
                className="cls-3"
                d="M23.5,15.9A17.49,17.49,0,0,1,39,25.22a13.75,13.75,0,1,1,6.92,25.62L23.5,50.9a17.5,17.5,0,0,1,0-35Z"
              />
              <circle
                className="cls-4"
                cx="45.89"
                cy="37.09"
                r="13.75"
                transform="translate(-2.18 71.3) rotate(-74.39)"
              />
              <line className="cls-5" x1="32.5" x2="32.5" y1="55.5" y2="62.5" />
              <line className="cls-5" x1="26.5" x2="26.5" y1="53.5" y2="60.5" />
              <line className="cls-5" x1="38.5" x2="38.5" y1="53.5" y2="60.5" />
            </svg>
          </div>
          <div className="winds">
            <p>Wind Speed:{weather.wind.speed} m/s</p>
            <svg
              width={60}
              height={60}
              data-name="Layer 1"
              id="Layer_1"
              viewBox="0 0 64 64"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <style
                  dangerouslySetInnerHTML={{
                    __html:
                      ".cls-1,.cls-2{fill:none;stroke-linecap:round;stroke-miterlimit:10;stroke-width:3px;}.cls-1{stroke:#a5a9aa;}.cls-2{stroke:#b9c1c6;}",
                  }}
                />
              </defs>
              <title />
              <path
                className="cls-1"
                d="M9.5,40.5H36.17a5.5,5.5,0,0,1,5.5,5.5h0a5.5,5.5,0,0,1-5.5,5.5"
              />
              <path
                className="cls-1"
                d="M41.5,16.5A3.5,3.5,0,0,1,45,20h0a3.5,3.5,0,0,1-3.5,3.5H9.5"
              />
              <path
                className="cls-2"
                d="M40.5,32.5H53a2.67,2.67,0,0,1,2.67,2.67h0A2.67,2.67,0,0,1,53,37.83"
              />
              <line className="cls-1" x1="26.5" x2="34.5" y1="32.5" y2="32.5" />
              <line className="cls-2" x1="9.5" x2="20.5" y1="32.5" y2="32.5" />
            </svg>
          </div>
          <div className="humid">
            <p>Humidity: {weather.main.humidity}%</p>
            <svg
              width={60}
              height={60}
              data-name="Layer 1"
              id="Layer_1"
              viewBox="0 0 64 64"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <style
                  dangerouslySetInnerHTML={{
                    __html:
                      ".cls-1{fill:#0baeff;}.cls-2{fill:#e0e0e0;}.cls-3{fill:none;stroke:#e0e0e0;stroke-linecap:round;stroke-linejoin:round;stroke-width:2px;}",
                  }}
                />
              </defs>
              <title />
              <path
                className="cls-1"
                d="M50,38.36a18.5,18.5,0,0,1-37,0C13,22.17,28,7.14,31.5,7.14S50,22.17,50,38.36Z"
              />
              <path
                className="cls-2"
                d="M29.3,34.07c0,3.32-2.1,5.05-4.4,5.05s-4.32-1.81-4.32-4.79,1.73-5,4.44-5S29.3,31.36,29.3,34.07Zm-6,.17c0,1.66.56,2.86,1.64,2.86s1.56-1.07,1.56-2.86c0-1.61-.44-2.86-1.59-2.86S23.34,32.66,23.34,34.24ZM43,40.67c0,3.32-2.1,5.05-4.4,5.05s-4.3-1.81-4.32-4.79,1.73-5,4.44-5S43,38,43,40.67Zm-5.93.17c0,1.66.54,2.86,1.61,2.86s1.56-1.07,1.56-2.86c0-1.61-.42-2.86-1.56-2.86S37.11,39.25,37.11,40.84Z"
              />
              <line
                className="cls-3"
                x1="36.7"
                x2="27.45"
                y1="29.69"
                y2="44.72"
              />
            </svg>
          </div>
        </div>
        </div>
      )}
    </div>
  );
}

export default Weathers;
