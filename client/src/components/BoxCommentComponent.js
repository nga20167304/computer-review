import React, { Component } from "react";

class BoxCommentComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comment: "",
      id: "",
      name: "",
    };
  }

  handleSubmit = (event) => {
    const token = localStorage.usertoken
    if (token) {
      this.props.onAddToDo(this.state);
      this.setState({comment: ""});
    } else {
      this.props.history.push(`/login`);
    }
  };

  handleChangeComment = (event) => {
    this.setState({ comment: event.target.value });
  };

  render() {
    return (
      <div className="row mt-5">
        <div class="col-md-8 col-md-offset-3">
          <div class="panel panel-info">
            <div class="panel-body">
              <textarea
                placeholder="コメントする..."
                className="form-control"
                value={this.state.comment}
                onChange={this.handleChangeComment}
              ></textarea>
              <form class="form-inline mt-3">
                <button
                  class="btn btn-primary pull-right"
                  type="button"
                  onClick={this.handleSubmit}
                >
                  Comment
                </button>
              </form>
              <h5>Comment:</h5>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BoxCommentComponent;
