import React from "react";
import CommentBox from "components/CommentBox";
import CommentList from "components/CommentList";
// npm install --save axios redux-promise moxios

export default () => {
  return (
    <div>
      <CommentBox />
      <CommentList />
    </div>
  );
};
