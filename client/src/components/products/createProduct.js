import React, { Component } from 'react'
import axios from 'axios'

class createProduct extends Component {
  constructor() {
    super()
    this.state = {
      name: '',
      price: '',
      rating: 0,
      alert:''
    }
    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }
  onSubmit(e) {
    e.preventDefault()
    console.log("name = " +this.state.name);
    console.log("price = " +this.state.price);
    console.log("rating = " +this.state.rating);
    const newProduct = {
      name: this.state.name,
      price: this.state.price,
      rating: this.state.rating
    }
    axios.post(`http://localhost:5000/products`, newProduct )
      .then(res => {
        console.log("new product: " + newProduct);
        console.log("res = " +res);
        console.log(res.data);
        this.setState({alert: "Success!!!"})
      })
      .catch(err => console.log(err))

    this.setState({
        name: '',
        price: '',
        rating: ''
    })
}

  
  render() {
    let alerts =this.state.alert===''?<div></div> : <div className="alert alert-success alert-dismissible fade show" role="alert"> 
                                                        {this.state.alert} 
                                                        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                                            <span aria-hidden="true">&times;</span>
                                                        </button>
                                                        </div>;
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6 mt-5 mx-auto">
            {alerts}
            <form noValidate onSubmit={this.onSubmit}>
              <h1 >Create new product</h1>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  placeholder="Enter product's name"
                  value={this.state.name}
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="price">Price</label>
                <input
                  type="text"
                  className="form-control"
                  name="price"
                  placeholder="price"
                  value={this.state.price}
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="rating">rating</label>
                <input
                  type="number"
                  className="form-control"
                  name="rating"
                  placeholder="rating"
                  value={this.state.rating}
                  onChange={this.onChange}
                />
              </div>
              <button
                type="submit"
                className="btn btn-lg btn-primary btn-block"
              >
                create
              </button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default createProduct;