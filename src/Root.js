import React from "react";
import { Provider } from "react-redux"; //
import { createStore, applyMiddleware } from "redux";
import reduxPromise from "redux-promise";
import reducers from "reducers"; // when importing directory, by default it imports index.js
// npm install --save axios redux-promise moxios

// initialState, before was just createStore(reducers, {})
// but...for testing purposes added initialState as a prop to Root
export default ({ children, initialState = {} }) => {
  const store = createStore(
    reducers,
    initialState,
    applyMiddleware(reduxPromise)
  );
  return <Provider store={store}>{children}</Provider>;
};

// taught redux to handle asynchronous action creators...

// props.initialState used for CommentList.test.js...feels a bit off changing main app just for testing purposes

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
