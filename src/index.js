import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "./index.css";
import registerServiceWorker from "./registerServiceWorker";

import store from "./store";
import CountryView from "./country/CountryView";
import CountryViewRedux from "./country/CountryViewRedux";

ReactDOM.render(
  <Provider store={store}>
    <div>
      <CountryView />
      <hr />
      <CountryViewRedux />
    </div>
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
