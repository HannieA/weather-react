import React, { useState, useEffect } from "react";
import axios from "axios";

import "./Forecast.css";
import DailyWeather from "./DailyWeather";

export default function Forecast(props) {
  const [ready, setReady] = useState(false);
  const [showWeather, setShowWeather] = useState("");

  useEffect(() => {
    setReady(false);
  }, [props.coordinates]);

  function handleResponse(response) {
    setShowWeather(response.data.daily);
    setReady(true);
  }

  if (ready) {
    return (
      <section className="forecast">
        <div className="row">
          {showWeather.map(function (dailyForecast, index) {
            if (index < 5) {
              return (
                <div className="col" key={index}>
                  <DailyWeather dailyWeather={dailyForecast} />
                </div>
              );
            }
          })}
        </div>
      </section>
    );
  } else {
    let lon = props.coordinates.lon;
    let lat = props.coordinates.lat;
    let apiId = "acf4d75c757427f610fc2a61d3b68446";
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiId}&units=metric`;

    axios.get(apiUrl).then(handleResponse);
  }
}
