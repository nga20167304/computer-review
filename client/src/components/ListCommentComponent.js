import React, { Component } from "react";
import "./ListCommentComponent.css";
import {Button} from "react-bootstrap";

class ListCommentComponent extends Component {
    handleDeleteItem = () => {
        this.props.onToDoDelete();
    };
    render() {
        var item = this.props;
        return (
            <div className="ToDoListItem col-md-8" style={{textAlign:'right', marginLeft:'15rem'}}>
                <div className="ToDoListItem-comment col-md-8" style={{textAlign:'left'}}><b>{item.comment.user.name}</b></div>
                <div className="ToDoListItem-comment col-md-8" style={{textAlign:'left'}}>{item.comment.content}</div>
                <Button onClick={this.handleDeleteItem}>Delete</Button>
            </div>
        );
    }
}

export default ListCommentComponent;
