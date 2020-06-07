import React, { Component } from "react";
import ComputerItemComponent from "./ComputerItemComponent";

function searchingFor(term) {
  return function (x) {
    return x.name.toLowerCase().includes(term.toLowerCase()) || !term;
  };
}
class ComputerListComponent extends Component {
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
          name: "Laptoppppppppp Acer Nitro series AN515 43 R84R NH.Q5XSV.001",
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
          name: "Laptop Asus Nitro series AN515 43 R84R NH.Q5XSV.001",
          description:
            "Ryzen5-3550H/8Gb/256Gb SSD/15.6'FHD/RX 560X-4Gb/Win10",
          rateScore: 4,
          imageUrl:
            "https://phucanhcdn.com/media/product/36363_nh_q5xsv_001_h1.jpg",
          isLiked: false,
        },
      ],
      listComputerLiked: [],
      term: "",
    };
    this.searchHandler = this.searchHandler.bind(this);
  }
  searchHandler(event) {
    this.setState({ term: event.target.value });
  }

  onChangeStatus = (id) => {
    console.log("Computer id:" + id);
    this.state.listComputer.map((item, index) => {
      if (index === id) {
        item.isLiked = !item.isLiked;
        console.log("status: " + item.isLiked);
        let listComputer = this.state.listComputer;
        listComputer[id] = item;
        console.log(item);
        this.setState({
          listComputer
        }, () => {
          console.log("set")
          localStorage.setItem("list", JSON.stringify(this.state.listComputer));
        });

      }
    });
  };

  componentWillMount() {
    let list = this.state.listComputer;
    //if (localStorage.getItem("list") != null) {
      //list = JSON.parse(localStorage.getItem("list"));
      this.setState({
        listComputer: list,
      });
    //}
  }

  componentDidCatch() {
    let list = JSON.parse(localStorage.getItem("list"));
    this.setState({
      listComputer: list,
    });
  }

  render() {
    return (
      <div>
        <div style={{display: "flex", justifyContent: "center"}}>
          <div className="input-group" style={{marginTop: "1em", width: "50vw"}}>
            <input
              name="keyword"
              type="text"
              className="form-control mb-3"
              placeholder="Nhập từ khóa..."
              onChange={this.searchHandler}
            />
          </div>
        </div>
        <div className="row" style={{display: "flex", justifyContent: "center"}}>
          {this.props.statusLiked === true
            ? this.state.listComputer.map((Computer, index) => {
                if (Computer.isLiked)
                  return (
                    <ComputerItemComponent
                      key={index}
                      id={index}
                      name={Computer.name}
                      description={Computer.description}
                      rateScore={Computer.rateScore}
                      imageUrl={Computer.imageUrl}
                      isLiked={Computer.isLiked}
                      onUpdateStatus={this.onChangeStatus}
                      onChange={this.onChangeStatus}
                    />
                  );
              })
            : this.state.listComputer
                .filter(searchingFor(this.state.term))
                .map((Computer, index) => {
                  return (
                    <ComputerItemComponent
                      key={index}
                      id={index}
                      name={Computer.name}
                      description={Computer.description}
                      rateScore={Computer.rateScore}
                      imageUrl={Computer.imageUrl}
                      isLiked={Computer.isLiked}
                      onUpdateStatus={this.onChangeStatus}
                      onChange={this.onChangeStatus}
                    />
                  );
                })}
        </div>
      </div>
    );
  }
}

export default ComputerListComponent;
