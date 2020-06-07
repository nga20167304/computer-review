import React, { Component } from "react";
import BoxCommentComponent from "./BoxCommentComponent";
import ListCommentComponent from "./ListCommentComponent";

class ComputerDetailComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listComputer: [
        {
          name: "Laptop Acer Nitro series AN515 43 R84R NH.Q5XSV.001",
          description:
            "Ryzen5-3550H/8Gb/256Gb SSD/15.6'FHD/RX 560X-4Gb/Win10",
          rateScore: 4,
          imageUrl:
            "https://phucanhcdn.com/media/product/36363_nh_q5xsv_001_h1.jpg",
          isLiked: false,
        },
        {
          name: "Laptop Acer Nitro series AN515 43 R84R NH.Q5XSV.001",
          description:
            "Ryzen5-3550H/8Gb/256Gb SSD/15.6'FHD/RX 560X-4Gb/Win10",
          rateScore: 4,
          imageUrl:
            "https://phucanhcdn.com/media/product/36363_nh_q5xsv_001_h1.jpg",
          isLiked: false,
        },
        {
          name: "Laptop Acer Nitro series AN515 43 R84R NH.Q5XSV.001",
          description:
            "Ryzen5-3550H/8Gb/256Gb SSD/15.6'FHD/RX 560X-4Gb/Win10",
          rateScore: 4,
          imageUrl:
            "https://phucanhcdn.com/media/product/36363_nh_q5xsv_001_h1.jpg",
          isLiked: false,
        },
        {
          name: "Laptop Acer Nitro series AN515 43 R84R NH.Q5XSV.001",
          description:
            "Ryzen5-3550H/8Gb/256Gb SSD/15.6'FHD/RX 560X-4Gb/Win10",
          rateScore: 4,
          imageUrl:
            "https://phucanhcdn.com/media/product/36363_nh_q5xsv_001_h1.jpg",
          isLiked: false,
        },
        {
          name: "Laptop Acer Nitro series AN515 43 R84R NH.Q5XSV.001",
          description:
            "Ryzen5-3550H/8Gb/256Gb SSD/15.6'FHD/RX 560X-4Gb/Win10",
          rateScore: 4,
          imageUrl:
            "https://phucanhcdn.com/media/product/36363_nh_q5xsv_001_h1.jpg",
          isLiked: false,
        },
      ],
      listComments: [],
    };
    this.handleDeleteToDo = this.handleDeleteToDo.bind(this);
  }
  handleAddToDo = (item) => {
    this.state.listComments.push(item);
    this.setState({ listComments: this.state.listComments });
  };
  handleDeleteToDo = (index) => {
    this.state.listComments.splice(index, 1);
    this.setState({ listComments: this.state.listComments });
  };
  render() {
    return (
      <div className="container">
        {this.state.listComputer.map((computer, index) => {
          if (index == this.props.match.params.id)
            return (
              <div className="row">
                <div class="col-md-8">
                  <img class="img-fluid" src={computer.imageUrl} alt="" />
                </div>
                <div class="col-md-4">
                  <h3 class="my-3">{computer.name}</h3>
                  <p>{computer.description}</p>
                  <h3 class="my-3">Stars</h3>
                  <strong>Rate: {computer.rateScore}</strong>
                </div>
              </div>
            );
        })}
        <BoxCommentComponent onAddToDo={this.handleAddToDo} />
        <div>
          {this.state.listComments.map((item, index) => {
            return (
              <ListCommentComponent
                key={index}
                comment={item.comment}
                onToDoDelete={() => this.handleDeleteToDo(index)}
              />
            );
          })}
        </div>
      </div>
    );
  }
}
export default ComputerDetailComponent;
