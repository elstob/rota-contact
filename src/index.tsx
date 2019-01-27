import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { createStore } from "redux";
import { Provider } from "react-redux";

import { rootReducer } from "./reducers";

import "normalize.css/normalize.css";
import "@blueprintjs/core/lib/css/blueprint.css";

let persistedState: object = {};
if (window.localStorage && window.localStorage.getItem("state")) {
  persistedState = JSON.parse(window.localStorage.getItem("state")!);
}
const store = createStore(rootReducer, persistedState);

store.subscribe(() => {
  if (window.localStorage) {
    window.localStorage.setItem("state", JSON.stringify(store.getState()));
  }
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
