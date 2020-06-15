import React, { Component } from 'react';
// import data from '../data';
import { Link } from 'react-router-dom'
import axios from 'axios'
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import BoxCommentComponent from "../components/BoxCommentComponent";
import ListCommentComponent from "../components/ListCommentComponent";
import { Button} from "react-bootstrap";
import browserHistory from '../helpers/history';

class ProductScreen extends Component {
  constructor(props){
    super(props)
    this.state ={
      id: '',
      name:'',
      rating:'',
      price:'',
      description:'',
      listComments: []
    };
    this.handleDeleteToDo = this.handleDeleteToDo.bind(this);
    this.id = props.match.params.id;
  }

  componentDidMount(){
    const productId = this.props.match.params.id;
    axios.get(`http://localhost:5000/products/${productId}`, null)
      .then(res => {
        this.setState({
          id: res.data[0].id,
          name: res.data[0].name,
          rating: res.data[0].rating,
          price: res.data[0].price,
          description: res.data[0].description
        })
      })
      .catch(err => console.log(err))
  }
  handleAddToDo = (item) => {
    this.state.listComments.push(item);
    this.setState({ listComments: this.state.listComments });
  };
  handleDeleteToDo = (index) => {
    this.state.listComments.splice(index, 1);
    this.setState({ listComments: this.state.listComments });
  };
  render(){
    console.log("params: ");
    console.log(this.props.match.params.id)
    console.log(this.state)
    return (<div>
      <Button>
        <Link to = "/" >Back</Link>
      </Button>

      <div className = "details">
        <div className = "details-image">
          <img src = '/images/mac.jpg' alt = "product"></img>
        </div>
        <div className="details-info">
          <ul>
            <li>
              <h2>{this.state.name}</h2>
            </li>
            <li className="star">
              {this.state.rating}  <FontAwesomeIcon icon={faStar} size="1x" color="orange"  />
            </li>
            <li>
              Price: <b>${this.state.price}</b>
            </li>
            <li>
              Description:
              <div className="product-description">
                {this.state.description}
              </div>
            </li>
          </ul>
          <Button variant="dark" style={{width: '50%'}}>
            <Link to={'/compare/' + this.state.id}> So sánh...</Link>
          </Button>
        </div>
      </div>
      <BoxCommentComponent onAddToDo={this.handleAddToDo} />
      <div>
        {this.state.listComments.map((item, index) => {
          return (
              <ListCommentComponent
                  key={index}
                  comment={item.comment}
                  onToDoDelete={() => this.handleDeleteToDo(index)}/>

          );
        })}
      </div>
    </div>)
  }

}

export default ProductScreen;
