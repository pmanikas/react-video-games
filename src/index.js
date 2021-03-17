import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import "./styles/style.scss";

import * as serviceWorkerRegistration from './serviceWorkerRegistration';

// REDUX SETUP
import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./store/reducers";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { BrowserRouter } from "react-router-dom";
const composeEnchancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  composeEnchancer(applyMiddleware(thunk))
);
// END OF REDUX SETUP

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorkerRegistration.register();