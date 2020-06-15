import React, { Component } from 'react';
// import data from '../data';
import axios from 'axios'
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {Link} from "react-router-dom";
import '../template/style.css';
import {Button} from "react-bootstrap";

function searchingFor(term) {
    return function (x) {
        return x.name.toLowerCase().includes(term.toLowerCase()) || x.brand.toLowerCase().includes(term.toLowerCase()) || !term;
    };
}

class CompareScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: '',
            name: '',
            rating: '',
            price: '',
            description: '',
            listProduct: [],
            term: "",
        };
        this.id = props.match.params.id;
        this.searchHandler = this.searchHandler.bind(this);
    }

    componentDidMount() {
        const productId = this.props.match.params.id;
        axios.get(`http://localhost:5000/compare/${productId}`, null)
            .then(res => {
                this.setState({
                    name: res.data[0].name,
                    rating: res.data[0].rating,
                    price: res.data[0].price,
                    description: res.data[0].description
                })
                console.log(this.state)
            })

            .catch(err => console.log(err))

        axios.get(`http://localhost:5000/products`, null)
            .then(res => {
                console.log("res = " + res);
                console.log(res.data);
                this.setState({
                    listProduct: res.data
                })
            })
            .catch(err => console.log(err))

    }

    searchHandler(event) {
        this.setState({term: event.target.value});
    }

    render() {
        console.log(this.state.id)
        console.log(this.state)
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
        return (
            <div>
                <div style={{display: "flex", justifyContent: "center"}}>
                    <div className="input-group" style={{marginTop: "0.2em", width: "40vw", height: "5rem"}}>
                        <input
                            name="keyword"
                            type="text"
                            className="form-control mb-2"
                            placeholder="Nhập từ khóa..."
                            onChange={this.searchHandler}
                        />
                    </div>
                </div>
                <div style={{
                    flexWrap: 'wrap',
                    display: "flex",
                    justifyContent: 'center'
                }}>
                    {
                        this.state.listProduct
                            .filter(searchingFor(this.state.term))
                            .map((product, index) => {
                                return (
                                    <div key={product.id} className="product shadow">
                                        <img className="product-image" src='/images/mac.jpg' alt="product"/>
                                        <div style={{paddingTop: "2rem"}} className="product-name">
                                            {product.name}
                                        </div>
                                        <div className="product-brand">{product.brand}</div>
                                        <div className="product-price">${product.price}</div>
                                        <div className="product-description">{product.description}</div>
                                        <div className="product-rating">{product.rating}
                                            <FontAwesomeIcon icon={faStar} size="1x" color="orange"/>
                                        </div>
                                        <Button>
                                            <Link to={'/compares/' + this.props.match.params.id + '/' + product.id }>So sánh</Link>
                                        </Button>
                                    </div>)
                            })}
                </div>
            </div>
        );
    }
}


export default CompareScreen;
