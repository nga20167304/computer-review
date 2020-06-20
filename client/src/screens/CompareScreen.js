import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import axios from 'axios'
import {Image} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faStar} from "@fortawesome/free-solid-svg-icons";
import {Button} from "react-bootstrap";

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
        return term!==null & (x?.toLowerCase().includes(term.toLowerCase()));
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
        console.log(this.state);
        return (
            <div>
                <div style={{display: "flex", justifyContent: "center", width: '40rem', marginTop : '0.5rem', marginLeft: '45rem'}}>
                    <div className="input-group">
                        <input
                            name="keyword"
                            type="text"
                            className="form-control mb-2 searchbar"
                            placeholder="Product's name or brand..."
                            onChange={this.searchHandler}
                        />
                    </div>
                </div>
                <div  className="products justify-content-start">
                    {
                        this.state.listProduct
                            .filter((x) => this.searchingFor(x.name,this.state.term)||this.searchingFor(x.brand.name,this.state.term))
                            .map((product) => {
                                return (
                                    <div key={product.id} className="product shadow">
                                        <div style={{textAlign: 'center'}}>
                                            <Link to={'/product/' + product.id}>
                                                <Image style={{width:'320px',height:'200px'}} className="product-image" src={product.image} alt="product"/>
                                            </Link>
                                        </div>
                                        <div style={{paddingTop : "2rem"}} className="product-name">
                                            <Link to={'/product/' + product.id}>{product.name}</Link>
                                        </div>
                                        <div className="product-brand">{product.brand.name}</div>
                                        <div className="product-price">${product.price}</div>
                                        <div className="product-description">{product.description}</div>
                                        <div className="product-rating">{product.rating}
                                            <FontAwesomeIcon icon={faStar} size="1x" color="orange"/>
                                        </div>
                                        <div style={{display: "flex", justifyContent: "flex-end", fontSize: "2em", alignItems: "center"}}>
                                            <Button style={{marginTop : '-3.5rem' , backgroundColor : "#000000" }}>
                                                <Link to={'/compares/' + this.props.match.params.id + '/' + product.id }>So sánh</Link>
                                            </Button>
                                        </div>
                                    </div>)
                            })}
                </div>
            </div>
        );
    }
}


export default HomeScreen;


