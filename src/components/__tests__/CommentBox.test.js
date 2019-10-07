import React from "react";
import { mount } from "enzyme";
import CommentBox from "components/CommentBox";

let wrapped;

beforeEach(() => {
  wrapped = mount(<CommentBox />);
});

// unmount for cleanup purposes!! since doing full DOM
afterEach(() => {
  wrapped.unmount();
});

// grider: doing full dom rendering even though he thinks shallow would make more sense...just for variety
it("has a text area and a button", () => {
  //beforeEach cb to mount
  expect(wrapped.find("textarea").length).toEqual(1);
  expect(wrapped.find("button").length).toEqual(1);
  //afterEach cb to unmount
});

/*
Getting an Empty ReactWrapper in your console.log?
Due to a change in Jest / Enzyme, 
when adding the console.log to the CommentBox.test.js file 
in the next lecture you will likely be getting an 
empty ReactWrapper {} in your terminal. 

Instead, we can run this command to print out the length:

console.log(wrapped.find("textarea").length);
*/
