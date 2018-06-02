import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import registerServiceWorker from "./registerServiceWorker";
import CountryView from "./country/CountryView";

ReactDOM.render(<CountryView />, document.getElementById("root"));
registerServiceWorker();
