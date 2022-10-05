import React from "react";
import ReactDOM from "react-dom/client";
//Style imports
import "./styles/index.css";
import "../src/styles/animations.css";
import "../src/styles/header.css";
import "../src/styles/responsive.css";
import "../src/styles/lista-vijesti.css";
import "../src/styles/lista-takmicenja.css";
import "bootstrap/dist/css/bootstrap.min.css";
//Style imports
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
