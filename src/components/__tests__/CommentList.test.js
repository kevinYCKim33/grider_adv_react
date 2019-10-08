import React from "react";
import { mount } from "enzyme";

import CommentList from "components/CommentList";
import Root from "Root";

let wrapped;

// crazy redux initialization...quite beautiful to be frank...
// Root.js got modified a bit
beforeEach(() => {
  const initialState = {
    comments: ["Comment 1", "Comment 2"]
  };
  wrapped = mount(
    <Root initialState={initialState}>
      <CommentList />
    </Root>
  );
});

it("creates one LI per comment", () => {
  expect(wrapped.find("li").length).toEqual(2); //hmmm the fact it's li seems a bit bad...too rigid...
});

// https://airbnb.io/enzyme/docs/api/ReactWrapper/text.html
// not really recommened via enzyme...but grider not really sure why...

// https://airbnb.io/enzyme/docs/api/ReactWrapper/render.html
// enzyme recommends
// CheerioWrapper: library very similar to jQuery...
// https://github.com/cheeriojs/cheerio
it("shows the text for each comment", () => {
  // "Comment 1Comment2"
  expect(wrapped.render().text()).toContain("Comment 1");
  expect(wrapped.render().text()).toContain("Comment 2");
});
