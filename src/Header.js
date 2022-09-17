import React, { useState } from "react";
import axios from "axios";

import "./Header.css";

import CurrentWeather from "./CurrentWeather";
import Forecast from "./Forecast";

export default function Header(props) {
  const [ready, setReady] = useState(false);
  const [weatherData, setWeatherData] = useState("");
  const [changedCity, setChangedCity] = useState(props.city);

  function handleForecast(response) {
    setWeatherData({
      city: response.data.name,
      coordinates: response.data.coord,
      temp: response.data.main.temp,
      wind: response.data.wind.speed,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      date: new Date(response.data.dt * 1000),
      icon: response.data.weather[0].icon,
    });
    setReady(true);
  }

  function searchResult() {
    let appid = "acf4d75c757427f610fc2a61d3b68446";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${changedCity}&appid=${appid}&units=metric`;
    axios.get(apiUrl).then(handleForecast);
  }
  function handleSubmit(event) {
    event.preventDefault();
    searchResult();
  }

  function handleCity(event) {
    setChangedCity(event.target.value);
  }

  if (ready) {
    return (
      <div className="header">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="type a city"
            id="searchForm"
            autoComplete="off"
            onChange={handleCity}
          />
          <input type="submit" value="search" id="searchButton" />
        </form>
        <CurrentWeather data={weatherData} />
        <Forecast coordinates={weatherData.coordinates} />
      </div>
    );
  } else {
    searchResult();
    return <div>Loading...</div>;
  }
}
