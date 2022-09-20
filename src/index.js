import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./styles.css";

import Header from "./Header";
import Footer from "./Footer";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Header city="Sunnyvale" />
    <Footer />
  </StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
