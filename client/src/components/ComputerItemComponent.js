import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Button, Card } from "react-bootstrap";


class ComputerItemComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      description: "",
      rateScore: "",
      imageUrl: "",
    };
  }
  render() {
    var {
      id,
      name,
      description,
      rateScore,
      imageUrl,
    } = this.props;
    return (
      <Router>
            <Card style={{ width: '20rem', paddingBottom: '0.5rem', marginLeft: '3rem', marginBottom: '2rem' }}>
              <Card.Img variant="top" src={imageUrl}></Card.Img>
              <Card.Body>
                <Card.Title><h3 className="name">{name}</h3></Card.Title>
                <Card.Text>
                  <h6 className="description">{description}</h6>
                </Card.Text>
              </Card.Body>
              <div class="d-flex justify-content-center">
                <Button variant="dark" style={{width: '50%'}}><a href={"/Computer/" + this.props.id}>Continue reading...</a></Button>
              </div>
            </Card>
      </Router>
    );
  }
}

export default ComputerItemComponent;
