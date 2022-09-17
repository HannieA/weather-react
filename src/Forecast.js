import React, { useState } from "react";
import axios from "axios";
import "./Forecast.css";

export default function Forecast(props) {
  const [ready, setReady] = useState(false);
  const [showWeather, setShowWeather] = useState("");

  function handleResponse(response) {
    console.log(response.data);
    setShowWeather(response.data.daily);
    setReady(true);
  }
  console.log("my logs");
  console.log(props);
  if (ready) {
    return (
      <section classNameName="forecast">
        <div classNameName="row">
          <div className="col">
            <div className="card">
              <div className="card-body">
                <ul>
                  <li className="day-forecast">Tue</li>
                  <li>
                    <img className="icon-forecast" alt="/" />
                  </li>
                  <li>
                    {" "}
                    <span className="temperature-max">{}</span>° |{" "}
                    <span className="temperature-min">6</span>°{" "}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  } else {
    let lon = props.lon;
    let lat = props.lat;
    let apiId = "acf4d75c757427f610fc2a61d3b68446";
    let apiUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiId}`;

    axios.get(apiUrl).then(handleResponse);
  }
}
