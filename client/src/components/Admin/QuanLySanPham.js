import React, {Component} from 'react';
import axios from 'axios'
import {Button, Table} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faStar} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";




class QuanLySanPham extends Component {

    constructor(props) {
        super(props)
        this.state = {
            listProduct: [],
            term: "",
        }
        this.searchHandler = this.searchHandler.bind(this);
        this.deleteProduct = this.deleteProduct.bind(this)
    }

    deleteProduct = (id) => {
        axios.delete(`http://localhost:5000/products/${id}`, null)
            .then(
                this.setState(pre => {
                    const newList = pre.listProduct.filter(v => v.id !== id)
                    return {
                        ...pre,
                        listProduct: newList
                    }
                })
            )
    }

    searchingFor = (x, term) => {
        return term !== null & (x?.toLowerCase().includes(term.toLowerCase()));
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
                <div style={{
                    display: "flex",
                    justifyContent: "center",
                    width: '40rem',
                    marginTop: '0.5rem',
                    marginLeft: '45rem'
                }}>
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
                <div className="products justify-content-start" style={{paddingBottom: '0rem'}}>
                    <Table striped bordered hover>
                        <thead>
                        <tr>
                            <td style={{width: '10rem', textAlign: 'center'}}>ID</td>
                            <td style={{width: '25rem', textAlign: 'center'}}>Name</td>
                            <td style={{width: '25rem', textAlign: 'center'}}>Brand Name</td>
                            <td style={{width: '10rem', textAlign: 'center'}}>Rating
                            </td>
                            <td style={{textAlign: 'center'}}>
                                Action
                            </td>

                        </tr>
                        </thead>
                    </Table>
                </div>
                <div className="products justify-content-start" style={{paddingTop: '0.5rem'}}>
                    {
                        this.state.listProduct
                            .filter((x) => this.searchingFor(x.name, this.state.term) || this.searchingFor(x.brand.name, this.state.term))
                            .map((product) => {
                                return (
                                    <Table striped bordered hover>
                                        <tbody>
                                            <tr>
                                                <td style={{width: '10rem', textAlign: 'center'}}>{product.id}</td>
                                                <td style={{width: '25rem', textAlign: 'center'}}>{product.name}</td>
                                                <td style={{width: '25rem', textAlign: 'center'}}>{product.brand.name}</td>
                                                <td style={{width: '10rem', textAlign: 'center'}}>{product.rating}
                                                    <FontAwesomeIcon icon={faStar} size="1x" color="orange"/></td>
                                                <td style={{textAlign: 'center'}}>
                                                    <Button style={{width: '4rem', marginRight: '10rem'}}>
                                                        <Link to={'/update/' + product.id}>
                                                            Edit
                                                        </Link>
                                                    </Button>
                                                    <Button style={{width: '6rem' }} onClick={()=>this.deleteProduct(product.id)}>
                                                            Delete
                                                    </Button>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                )

                            })}
                </div>
            </div>
        );
    }
}


export default QuanLySanPham;


