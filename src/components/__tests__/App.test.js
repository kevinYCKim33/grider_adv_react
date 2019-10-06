import React from "react";
import ReactDOM from "react-dom";
import App from "../App";

// App.js would also work as it is under __tests__ but App.test.js just is more transparent...

// it is same as test
// grider likes 'it'
// it is the component we're testing

// jest runs from the terminal!
// react always expects that it's running inside a browser
// only functions correctly inside a browser

// CRA installed a dependency called JSDOM
// JSDOM: js implementation of how browser works...
it("shows a comment box", () => {
  const div = document.createElement("div"); // JSDOM library fake div...
  // document comes from JSDOM not browser...
  // fake div that lies solely inside memory
  // makes react think that it's inside a browser

  ReactDOM.render(<App />, div);

  // Look inside the div
  // and checks to see if the CommentBox is in there
  // console.log(div.innerHTML);
  expect(div.innerHTML).toContain("Comment Box");

  ReactDOM.unmountComponentAtNode(div);
  // basically an undo...
  // formal term: cleanup
});
