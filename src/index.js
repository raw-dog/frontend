// import libs/other
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

// import app
import App from "./App";

// bootstrap css
import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);
