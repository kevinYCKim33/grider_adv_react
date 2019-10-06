import React from "react";
import { shallow } from "enzyme";
// import ReactDOM from "react-dom";
// did absolute paths vs relative with jsconfig.json
import App from "components/App";
import CommentBox from "components/CommentBox";
import CommentList from "components/CommentList";

// App.js would also work as it is under __tests__ but App.test.js just is more transparent...

// it is same as test
// grider likes 'it'
// it is the component we're testing

// jest runs from the terminal!
// react always expects that it's running inside a browser
// only functions correctly inside a browser

// CRA installed a dependency called JSDOM
// JSDOM: js implementation of how browser works...

// put common setup logic here...
// cool scoping trick...
let wrapped;
// beforeEach will only run before each of these it blocks
beforeEach(() => {
  wrapped = shallow(<App />);
});

it("shows a comment box", () => {
  // const wrapped = shallow(<App />);
  // wrapped version of our App component;
  // it has add'l functions loaded onto the top...
  // sort of like connect()() in redux
  // grider: i like component for var name...but oh well..
  // https://airbnb.io/enzyme/docs/api/ShallowWrapper/find.html
  expect(wrapped.find(CommentBox).length).toEqual(1);

  // RUDIMENTARY VERSION PRE ENZYME
  // ===================
  // const div = document.createElement("div"); // JSDOM library fake div...
  // document comes from JSDOM not browser...
  // fake div that lies solely inside memory
  // makes react think that it's inside a browser
  // ReactDOM.render(<App />, div);
  // Look inside the div
  // and checks to see if the CommentBox is in there
  // console.log(div.innerHTML);
  // expect(div.innerHTML).toContain("Comment Box"); // pretty terrible at this point...
  // ^^ why this sux...
  // it tests for internal workings of a component outside of the component it is testing...
  // it just needs to be aware that another component EXISTS
  // expect(div).toHaveAnInstanceOf(CommentBox); // code that I wish I had...
  // npm install --save enzyme enzyme-adapter-react-16 or whatever version you have (16, 17, etc...)
  // ReactDOM.unmountComponentAtNode(div);
  // basically an undo...
  // formal term: cleanup
});

// grider exercise
it("shows a comment list", () => {
  // const wrapped = shallow(<App />);
  expect(wrapped.find(CommentList).length).toEqual(1);
});
