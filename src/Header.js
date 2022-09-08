import React, { useState } from "react";
import "./Header.css";
import "./CurrentWeather.css";
import axios from "axios";

export default function Header() {
  const [ready, setReady] = useState(false);

  const [weatherData, setWeatherData] = useState("");

  function handleForecast(response) {
    setWeatherData({
      city: response.data.name,
      temp: response.data.main.temp,
      wind: response.data.wind.speed,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
    });
    setReady(true);
  }

  if (ready) {
    return (
      <div className="header">
        <form>
          <input
            type="text"
            placeholder="type a city"
            id="searchForm"
            autoComplete="off"
          />
          <input type="submit" value="search" id="searchButton" />
        </form>
        <section className="currentWheather">
          <div className="container">
            <div className="row">
              <div className="col">
                <div className="currentDay">
                  <ul className="currentTemp">
                    <li>
                      <h1 id="city">{weatherData.city}</h1>
                      <i className="fa-regular fa-sun icon"></i>
                    </li>
                    <li className="currentDate"></li>
                    <li className="temp">
                      <span id="temperature">
                        {Math.round(weatherData.temp)}
                      </span>{" "}
                      <span className="celsius"> ℃</span>
                    </li>
                    <div className="description">
                      <li id="conditions">{weatherData.description}</li>
                      <li>
                        Wind:{" "}
                        <span id="wind"> {Math.round(weatherData.wind)}</span>{" "}
                        km/h, Humidity:
                        <span id="humidity">
                          {" "}
                          {Math.round(weatherData.humidity)}{" "}
                        </span>
                        %
                      </li>
                    </div>
                  </ul>
                </div>
              </div>
              <div className="col">
                <img src="images/sun.svg" alt="cloud" id="background-image" />
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  } else {
    let city = "Sunnyvale";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=b742faf6701ac8c3f14958c33ae33625&units=metric`;
    axios.get(apiUrl).then(handleForecast);
  }
}
