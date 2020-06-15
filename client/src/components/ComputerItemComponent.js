import React, { Component } from "react";
import {BrowserRouter as Router, Link} from "react-router-dom";
import { Button, Card } from "react-bootstrap";
import {faStar} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


class ComputerItemComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      description: "",
      rateting: "",
      brand: "",
    };
  }

  render() {
    const listProduct = this.state.listProduct.map(product =>
        <li key={product.id}>
          <div className="product shadow">
            <Link to={'/product/' + product.id}>
              <img className="product-image" src='/images/mac.jpg' alt="product"/>
            </Link>
            <div className="product-name">
              <Link to={'/product/' + product.id}>{product.name}</Link>
            </div>
            <div className="product-brand">{product.brand}</div>
            <div className="product-price">${product.price}</div>
            <div className="product-description">{product.description}</div>
            <div className="product-rating">{product.rating}
              <FontAwesomeIcon icon={faStar} size="1x" color="orange"/>
            </div>
          </div>
        </li>)
    return (<ul className="products">
      {listProduct}
    </ul>)
  }
}


export default ComputerItemComponent;
