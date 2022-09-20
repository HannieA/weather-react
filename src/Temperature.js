import React, { useState } from "react";

export default function Temperature(props) {
  const [unit, setUnit] = useState("celsius");

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  if (unit === "celsius") {
    return (
      <li className="temp">
        <span id="temperature">{props.celsius}</span>{" "}
        <span className="celsius" onClick={showFahrenheit}>
          {" "}
          ℃ <span className="line">| </span>
          <a href="/">℉</a>
        </span>
      </li>
    );
  } else {
    let fahren = (props.celsius * 9) / 5 + 32;
    return (
      <li className="temp">
        <span id="temperature">{Math.round(fahren)}</span>{" "}
        <span className="celsius">
          {" "}
          <a href="/" onClick={showCelsius}>
            ℃
          </a>{" "}
          <span className="line"> | </span>℉
        </span>
      </li>
    );
  }
}
