import React from "react";
import { mount } from "enzyme";
import moxios from "moxios";
import Root from "Root";
import App from "components/App";

// install the mock and stub out request
beforeEach(() => {
  moxios.install();
  moxios.stubRequest("http://jsonplaceholder.typicode.com/comments", {
    status: 200, //trick axios into thinking it was successful
    response: [{ name: "Fetched #1" }, { name: "Fetched #2" }]
  }); // intercept request, fake response
});

// uninstall the mock
afterEach(() => {
  moxios.uninstall();
});

it("can fetch a list of comments and display them", done => {
  //done...test won't complete until user done()
  // Attempt to render the *entire* app
  const wrapped = mount(
    <Root>
      <App />
    </Root>
  );
  // find the 'fetchComments' button and simulate click
  wrapped.find(".fetch-comments").simulate("click");
  // introduce a TINY little pause
  // no sleep or pause in JS

  // moxios.wait: if there is some moxios call...wait for it to resolve...then fire the cb
  // similar to setTimeout(()=> {}, 1000) but much cleaner...
  moxios.wait(() => {
    wrapped.update(); // hmmm seems a bit redundant with setTimeout...
    expect(wrapped.find("li").length).toEqual(2);

    done(); // wow...jest twiddles its thumbs to wait for user to execute done(), it() takes in a (done) =>
    wrapped.unmount(); // why not in afterEach??
  }); // potential to get false positive...
  // it will fetch the data...then put it onto DOM
  // Expect to find a list of comments! 500 Li's
});

/*
unit test vs integration test...

unit test: very valid...


GRIDER:
integration test: has more value than unit tests...probably a better use of your time

sure enterprises may value unit tests..

personal project or small prof project...steer more towards integration test...

// secure more lines of code with fewer lines of code...

// integration tests test how all the big pieces fit together...
*/
