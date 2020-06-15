import React, { Component } from "react";

class BoxCommentComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comment: "",
    };
  }
  handleSubmit = (event) => {
    this.props.onAddToDo(this.state);
    this.setState({ comment: "" });
  };
  handleChangeComment = (event) => {
    this.setState({ comment: event.target.value });
  };

  render() {
    return (
      <div className="row mt-5" style={{marginLeft : '10rem'}}>
        <div class="col-md-8 col-md-offset-3">
          <div class="panel panel-info">
            <div class="panel-body">
              <textarea
                placeholder="Write anything..."
                className="form-control"
                value={this.state.comment}
                onChange={this.handleChangeComment}
              ></textarea>
              <form class="form-inline mt-3">
                <button
                  class="btn btn-primary pull-right button comment-button"
                  type="button"
                  onClick={this.handleSubmit}
                >
                  Comment
                </button>
              </form>
              <p className="comments">Comment:</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BoxCommentComponent;
