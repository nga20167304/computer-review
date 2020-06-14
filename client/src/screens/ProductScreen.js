import React, { Component } from 'react';
// import data from '../data';
import { Link } from 'react-router-dom'
import axios from 'axios'
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class ProductScreen extends Component {
  constructor(props){
    super(props)
    this.state ={
      name:'',
      rating:'',
      price:'',
      description:''
    }
  }

  componentDidMount(){
    const productId = this.props.match.params.id;
    axios.get(`http://localhost:5000/products/${productId}`, null)
      .then(res => {
        this.setState({
          name: res.data[0].name,
          rating: res.data[0].rating,
          price: res.data[0].price,
          description: res.data[0].description
        })
      })
      .catch(err => console.log(err))
  }

  render(){
    console.log("params: ");
    console.log(this.props.match.params.id)
    console.log(this.state)
    return (<div> 
      <div className = "back">
        <Link to = "/" > Back </Link>
      </div>
  
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
        </div>
      </div>
    </div>)
  }
  
}

export default ProductScreen;
