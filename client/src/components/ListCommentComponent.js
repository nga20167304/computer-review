import React, { Component } from "react";
import "./ListCommentComponent.css";

class ListCommentComponent extends Component {
  handleDeleteItem = () => {
    this.props.onToDoDelete();
  };
  render() {
    var item = this.props;
    return (
      <div className="ToDoListItem col-md-8" onClick={this.handleDeleteItem}>
        <div className="ToDoListItem-comment col-md-8"><b>{item.comment.user.name}</b></div>
        <div className="ToDoListItem-comment col-md-8">{item.comment.content}</div>
      </div>
    );
  }
}

export default ListCommentComponent;
