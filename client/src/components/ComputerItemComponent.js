import React, { Component } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

class ComputerItemComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      description: "",
      rateScore: 0,
      actors: [],
      releaseDate: "",
      imageUrl: "",
      isLiked: false,
    };
  }

  handleChangeLiked = (event) => {
    this.props.onUpdateStatus(this.props.id);
  };

  render() {
    var {
      id,
      name,
      description,
      rateScore,
      actors,
      releaseDate,
      imageUrl,
      isLiked,
    } = this.props;
    return (
      // <div className="row mb-2 mt-4"></div>
      <Router>
        <div className="col-md-6">
          <div className="row mb-2 mt-4">
            <div className="card flex-md-row mb-4 shadow-sm h-md-250" style={{width: "40em", height: "25em"}}>
              <div className="card-body d-flex flex-column align-items-start text-left">
                <h3 className="name">{name}</h3>
                <div className="mb-1 text-muted">{releaseDate}</div>
                <p className="card-text mb-auto">{description}</p>
                <div className="rating-start inline">
                  <strong>Rate Score:</strong>
                  <ul>
                    <li>
                      <i className="fa fa-star-o"></i>
                      <i className="fa fa-star-o"></i>
                      <i className="fa fa-star-o"></i>
                    </li>
                  </ul>
                </div>
                <a href={"/Computer/" + this.props.id}>Continue reading...</a>
                <div className="Computer-like">
                  <button
                    className={
                      this.props.isLiked === true
                        ? "btn btn-danger"
                        : "btn btn-link"
                    }
                    onClick={this.handleChangeLiked}
                  >
                    <i className="fa fa-heart-o"></i>
                  </button>
                </div>
              </div>
              <img
                className="card-img-right flex-auto d-none d-lg-block"
                src={imageUrl}
                alt="Card image"
                style={{objectFit: "cover", width: "25em"}}
              />
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default ComputerItemComponent;