import React, { Component } from "react";
import { connect } from "react-redux";

class CommentList extends Component {
  renderComments() {
    return this.props.comments.map((comment, index) => {
      //Concatenate the comment + index, there's duplicate on the list
      //Wouldn't have done it in prod, it's just a toy project
      return <li key={comment + index}>{comment}</li>;
    });
  }

  render() {
    return (
      <div>
        <h4>Comment List</h4>
        <ul>{this.renderComments()}</ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { comments: state.comments };
}

export default connect(mapStateToProps)(CommentList);
