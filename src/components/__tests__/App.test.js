import React from "react";
import ReactDOM from "react-dom";
import App from "../App";

// App.js would also work as it is under __tests__ but App.test.js just is more transparent...

// it is same as test
// grider likes 'it'
// it is the component we're testing
it("shows a comment box", () => {
  const div = document.create("div");

  ReactDOM.render(<App />, div);
});
