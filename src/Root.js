import React from "react";
import { Provider } from "react-redux"; //
import { createStore } from "redux";
import reducers from "reducers"; // when importing directory, by default it imports index.js

export default props => {
  return (
    <Provider store={createStore(reducers, {})}>{props.children}</Provider>
  );
};

// anytime we create an instance
// props.children...react construct...
// take component and put children...
// this isn't that hard...

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
