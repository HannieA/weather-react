import React from "react";
import "./Forecast.css";

export default function Forecast() {
  return (
    <section classNameName="forecast">
      <div classNameName="row">
        <div className="col">
          <div className="card">
            <div className="card-body">
              <ul>
                <li className="day-forecast">Tue</li>
                <li>
                  <img className="icon-forecast" />
                </li>
                <li>
                  {" "}
                  <span className="temperature-max">10</span>° |{" "}
                  <span className="temperature-min">6</span>°{" "}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      ;
    </section>
  );
}
