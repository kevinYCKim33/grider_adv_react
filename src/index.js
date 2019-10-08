import React from "react";
import ReactDOM from "react-dom";
import Root from "Root";
import App from "./components/App";

// OLD SCHOOL REDUX? THE FORMAT I'M FAMILIAR WITH...
// REDUX STUFF!
// import { createStore, applyMiddleware, compose } from "redux";
// import { Provider } from "react-redux";
// import thunk from "redux-thunk";
// import combineReducers from "../reducers/index";

// window.store = createStore(
//   combineReducers,
//   compose(
//     applyMiddleware(thunk),
//     window.devToolsExtension ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
//   )
// );

ReactDOM.render(
  <Root>
    <App />
  </Root>,
  document.querySelector("#root")
);
