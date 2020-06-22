import React, { Component } from "react";

class BoxCommentComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comment: ""
    };
  }

  handleSubmit = (event) => {
    const token = localStorage.usertoken
    if (token) {
      this.props.onAddToDo(this.state.comment);
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
        <div style={{marginLeft:'15rem'}}>
          <div className="col-md-8 col-md-offset-3">
            <div className="panel panel-info">
              <div className="panel-body">
              <textarea
                  placeholder="Viết gì đó đi....."
                  className="form-control"
                  value={this.state.comment}
                  onChange={this.handleChangeComment}
              ></textarea>
              <form className="form-inline mt-3">
                <button
                  className="btn btn-primary pull-right"
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
