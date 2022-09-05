import React from "react";
import "./CurrentWeather.css";

export default function CurrentWeather() {
  return (
    <section className="currentWheather">
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="currentDay">
              <ul className="currentTemp">
                <li>
                  <h1 id="city">Kyiv </h1>
                  <i className="fa-regular fa-sun icon"></i>
                </li>
                <li className="currentDate"></li>
                <li className="temp">
                  <span id="temperature">25</span>{" "}
                  <span className="celsius"> ℃</span>
                </li>
                <div className="description">
                  <li id="conditions">Cloud</li>
                  <li>
                    Wind: <span id="wind"> 3</span> km/h, Humidity:
                    <span id="humidity"> 70</span>%
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
  );
}
