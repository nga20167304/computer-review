import React, { Component } from 'react';
// import data from '../data';
import { Link } from 'react-router-dom'
import axios from 'axios'
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {SignalCellularNull} from "@material-ui/icons";
import '../template/style.css';
// import '../template/index.html';

function searchingFor(term) {
    return function (x) {
        return x.name.toLowerCase().includes(term.toLowerCase()) || x.brand.toLowerCase().includes(term.toLowerCase()) || !term;
    };
}

class HomeScreen extends Component {

  constructor(props){
    super(props)
    this.state ={
      listProduct: [],
        term: "",
    }
    this.searchHandler = this.searchHandler.bind(this);
  }
  handleClick = ()=> {
      console.log(this.props);
      this.props.history.push(this.props.id)
  }

  searchHandler(event) {
        this.setState({ term: event.target.value });
  }

  componentDidMount(){
    axios.get(`http://localhost:5000/products`, null)
      .then(res => {
        console.log("res = " +res);
        console.log(res.data);
        this.setState({
          listProduct: res.data
        })
      })
      .catch(err => console.log(err))
  }

  render(){
    const listProduct = this.state.listProduct.map(product =>
                          <li key = {product.id}>
                              <div className="product shadow">
                              <Link to={'/product/' + product.id} >
                                <img className="product-image" src='/images/mac.jpg' alt="product" />
                              </Link>
                                <div className="product-name">
                                  <Link to={'/product/' + product.id} >{product.name}</Link>
                                </div>
                                <div className="product-brand">{product.brand}</div>
                                <div className="product-price">${product.price}</div>
                                <div className="product-description">{product.description}</div>
                                <div className="product-rating">{product.rating}
                                        <FontAwesomeIcon icon={faStar} size="1x" color="orange"  />
                                        </div>
                              </div>
                          </li>)
      return (
          <div>
              <div style={{display: "flex", justifyContent: "center"}}>
                  <div className="input-group" style={{marginTop: "0.2em", width: "40vw"}}>
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
                  {
                      this.state.listProduct
                          .filter(searchingFor(this.state.term))
                          .map((Computer, index) => {
    return (<ul className="products">

        {listProduct}
    </ul>)})}
              </div>
          </div>
      );
  }
}


export default HomeScreen;
