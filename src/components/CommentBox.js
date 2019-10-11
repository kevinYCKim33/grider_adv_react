import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "actions"; // grabs from actions/index.js

class CommentBox extends Component {
  state = { comment: "" };

  handleChange = e => {
    this.setState({
      comment: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    // TODO call an action creator
    // and save the comment
    this.props.saveComment(this.state.comment);
    this.setState({ comment: "" });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h4>Add a comment</h4>
          <textarea onChange={this.handleChange} value={this.state.comment} />
          <div>
            <button>Submit Comment</button>
          </div>
        </form>
        <button className="fetch-comments" onClick={this.props.fetchComments}>
          Fetch Comments
        </button>
      </div>
    );
  }
}

// connect(mapStateToProps, mapDispatchToProps)(CommentBox)
export default connect(
  null,
  actions // both saveComment() and fetchComments() get added here
)(CommentBox);
