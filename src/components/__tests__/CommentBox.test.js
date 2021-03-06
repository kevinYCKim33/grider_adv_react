import React from "react";
import { mount } from "enzyme";
import CommentBox from "components/CommentBox";
import Root from "Root"; // The Provider and connect and redux and all that middleware good stuff that render props

// doesn't scale that well...i.e. what if we add middleware to redux??
// import { createStore } from "redux";
// import { Provider } from "react-redux";
// import reducers from "reducers";

let wrapped;

// not very scaleable
// beforeEach(() => {
//   wrapped = mount(
//     <Provider store={createStore(reducers, {})}>
//       <CommentBox />
//     </Provider>
//   );
// });

// full render
beforeEach(() => {
  wrapped = mount(
    <Root>
      <CommentBox />
    </Root>
  );
});

// unmount for cleanup purposes!! since doing full DOM
afterEach(() => {
  wrapped.unmount();
});

// grider: doing full dom rendering even though he thinks shallow would make more sense...just for variety
it("has a text area and two buttons", () => {
  //beforeEach cb to mount
  expect(wrapped.find("textarea").length).toEqual(1);
  expect(wrapped.find("button").length).toEqual(2); // changed to have fetchButtons
  //afterEach cb to unmount
});

// describe creates a scoping block basically...
describe("the text area", () => {
  beforeEach(() => {
    wrapped.find("textarea").simulate("change", {
      target: { value: "new comment" }
    });
    wrapped.update(); // force update...react setState is async...
  });

  it("has a text area that users can type in", () => {
    // SIMULATING EVENTS
    // https://airbnb.io/enzyme/docs/api/ReactWrapper/simulate.html
    // 1. find the textarea element
    // 2. simulate a 'change' event
    // 3. provide a fake event object
    // 4. force the component to update
    // 5. assert that the textareas value has changed

    // wrapped.find("textarea").simulate("change", {
    //   target: { value: "new comment" }
    // });

    // setState does not cause instant re-render...it's asynchronous...
    // we have to wait for the re-render to kick in...
    // enzyme lets us to force an update via update();
    // https://airbnb.io/enzyme/docs/api/ReactWrapper/update.html
    // wrapped.update();

    // https://airbnb.io/enzyme/docs/api/ReactWrapper/prop.html
    // example

    // const wrapper = mount(<MyComponent foo={10} />);
    // expect(wrapper.prop('foo')).to.equal(10);
    // <textarea onChange={this.handleChange} value="new comment" />
    expect(wrapped.find("textarea").prop("value")).toEqual("new comment"); //toBe also works
  });

  it("when form is submitted, text area gets emptied", () => {
    // wrapped.find("textarea").simulate("change", {
    //   target: { value: "new comment" }
    // });
    // wrapped.update();
    // expect(wrapped.find("textarea").prop("value")).toEqual("new comment");
    // not that necessary since the above already covers it...but not the worst thing to do
    wrapped.find("form").simulate("submit");
    wrapped.update();
    expect(wrapped.find("textarea").prop("value")).toEqual("");
  });
});
