import { h, render } from "preact";
import { createStore } from "redux";
import { Provider } from "preact-redux";

import App from "./app";

import "./style.css";

const reducer = (state = {
  currentClicks: 0,
  prevClicks: [],
  totalClicks: 0
}, action) => {
  switch (action.type) {
    case "CLICK":
      return {
        ...state,
        currentClicks: state.currentClicks + action.payload,
        prevClicks: state.prevClicks,
        totalClicks: state.totalClicks
      };
      break;
    case "FINISH":
      const id = state.prevClicks.length;
      return {
        ...state,
        currentClicks: 0,
        prevClicks: [
          ...state.prevClicks,
          {
            clickCount: state.currentClicks,
            clickID: id
          }
        ],
        totalClicks: state.totalClicks + state.currentClicks
      };
      break;
    case "DELETE":
      //remove element from prevClicks
      return {
        ...state,
        prevClicks: state.prevClicks.filter(click => {
          return click.clickID !== action.payload.id;
        }),
        totalClicks: state.totalClicks - action.payload.clickCount
      };
      break;
    case "DELETE_ALL":
      return {
        ...state,
        currentClicks: state.currentClicks,
        prevClicks: [],
        totalClicks: 0
      };
      break;
    default:
      return state;
  }
}

const store = createStore(reducer);

render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.body
);
