import React from "react";

import "./CurrentWeather.css";
import FormatedDate from "./FormatedDate";
import Temperature from "./Temperature";
import WeatherIcon from "./WeatherIcon";

export default function CurrentWeather(props) {
  return (
    <section className="currentWheather">
      <div className="container">
        <div className="row">
          <div className="col-6">
            <div className="currentDay">
              <ul className="currentTemp">
                <li>
                  <h1 id="city">{props.data.city}</h1>
                </li>
                <li className="currentDate">
                  <FormatedDate date={props.data.date} />
                </li>
                <Temperature celsius={Math.round(props.data.temp)} />
                <div className="description">
                  <li id="conditions">{props.data.description}</li>
                  <li>
                    Wind: <span id="wind"> {Math.round(props.data.wind)}</span>{" "}
                    km/h, Humidity:
                    <span id="humidity">
                      {" "}
                      {Math.round(props.data.humidity)}{" "}
                    </span>
                    %
                  </li>
                </div>
              </ul>
            </div>
          </div>
          <div className="col-5">
            <WeatherIcon icon={props.data.icon} size={350} color="#E64398" />
          </div>
        </div>
      </div>
    </section>
  );
}
