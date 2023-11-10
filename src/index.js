import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <App />
    <script src="/dist/flowbite.js"></script>
  </BrowserRouter>,
  document.getElementById("root")
);
