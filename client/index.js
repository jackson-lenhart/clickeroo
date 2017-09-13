import { h, render } from "preact";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "preact-redux";
import thunk from "redux-thunk";

import reducer from "./reducer"
import App from "./app";

import "./style.css";

const store = createStore(
  reducer,
  applyMiddleware(thunk)
);

render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById("app")
);
