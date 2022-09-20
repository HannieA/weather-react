import React from "react";

import WeatherIcon from "./WeatherIcon";

export default function DailyWeather(props) {
  function day() {
    let date = new Date(props.dailyWeather.dt * 1000);
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    let day = date.getDay();
    return days[day];
  }

  return (
    <div className="card">
      <div className="card-body">
        <ul>
          <li className="day-forecast">{day()}</li>
          <li>
            <WeatherIcon
              icon={props.dailyWeather.weather[0].icon}
              size={30}
              color="white"
            />
          </li>
          <li>
            {" "}
            <span className="temperature-max">
              {Math.round(props.dailyWeather.temp.max)}
            </span>
            ° |{" "}
            <span className="temperature-min">
              {Math.round(props.dailyWeather.temp.min)}
            </span>
            °{" "}
          </li>
        </ul>
      </div>
    </div>
  );
}
