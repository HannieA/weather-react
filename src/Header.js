import React from "react";
import "./Header.css";

export default function Header() {
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
    </div>
  );
}
