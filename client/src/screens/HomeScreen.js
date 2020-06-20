import React, {Component} from 'react';
// import data from '../data';
import {Link} from 'react-router-dom'
import axios from 'axios'
import '../template/style.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faStar} from "@fortawesome/free-solid-svg-icons";

class HomeScreen extends Component {

    constructor(props) {
        super(props)
        this.state = {
            listProduct: [],
            term: "",
        }
        this.searchHandler = this.searchHandler.bind(this);
    }

    searchingFor = (x, term) => {
            return term!==null & (x.toLowerCase().includes(term.toLowerCase()));
    }

    handleClick = () => {
        console.log(this.props);
        this.props.history.push(this.props.id)
    }

    searchHandler(event) {
        this.setState({term: event.target.value});
    }

    componentDidMount() {
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

    render() {
        // const listProduct = this.state.listProduct.map(product =>
        //     <li key={product.id}>
        //         <div className="product shadow">
        //             <Link to={'/product/' + product.id}>
        //                 <img className="product-image" src='/images/mac.jpg' alt="product"/>
        //             </Link>
        //             <div className="product-name">
        //                 <Link to={'/product/' + product.id}>{product.name}</Link>
        //             </div>
        //             <div className="product-brand">{product.brand}</div>
        //             <div className="product-price">${product.price}</div>
        //             <div className="product-description">{product.description}</div>
        //             <div className="product-rating">{product.rating}
        //                 <FontAwesomeIcon icon={faStar} size="1x" color="orange"/>
        //             </div>
        //         </div>
        //     </li>)
        return (
            <div>
                <div style={{display: "flex", justifyContent: "center"}}>
                    <div className="input-group">
                        <input
                            name="keyword"
                            type="text"
                            className="form-control mb-2 searchbar"
                            placeholder="Product's name ..."
                            onChange={this.searchHandler}
                        />
                    </div>
                </div>
                <div  className="products justify-content-start">
                    {
                        this.state.listProduct
                            .filter((x) => this.searchingFor(x.name,this.state.term)||this.searchingFor(x.brand,this.state.term))
                            .map((product) => {
                                return (
                                        <div key={product.id} className="product shadow">
                                            <Link to={'/product/' + product.id}>
                                                <img className="product-image" src='/images/mac.jpg' alt="product"/>
                                            </Link>
                                            <div style={{paddingTop : "2rem"}} className="product-name">
                                                <Link to={'/product/' + product.id}>{product.name}</Link>
                                            </div>
                                            <div className="product-brand">{product.brand}</div>
                                            <div className="product-price">${product.price}</div>
                                            <div className="product-description">{product.description}</div>
                                            <div className="product-rating">{product.rating}
                                                <FontAwesomeIcon icon={faStar} size="1x" color="orange"/>
                                            </div>
                                        </div>)
                            })}
                </div>
            </div>
        );
    }
}


export default HomeScreen;
