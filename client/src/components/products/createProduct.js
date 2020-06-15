import React, { Component } from 'react'
import axios from 'axios'

class createProduct extends Component {
  constructor() {
    super()
    this.state = {
      name: '',
      brand: '',
      description: '',
      price: '',
      rating: 0,
      alert:'',
      status: 0
    }
    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }
  onSubmit(e) {
    e.preventDefault()
    const newProduct = {
      name: this.state.name,
      brand: this.state.brand,
      description: this.state.description,
      price: this.state.price,
      rating: this.state.rating
    }
    if(this.state.name==='' || this.state.brand==='' || this.state.description===''
    || this.state.price===''||this.state.rating===0){
      this.setState({alert:"There is an empty attribute!"})
      return false;
    }
    axios.post(`http://localhost:5000/products`, newProduct )
      .then(res => {
        console.log("new product: " + newProduct);
        console.log("res = " +res);
        console.log(res.data);
        this.setState({alert: "Success!!!", status:1})
      })
      .catch(err => {
          console.log(err);
          this.setState({alert: err})
          return false;
      })

    this.setState({
        name: '',
        brand: '',
        description: '',
        price: '',
        rating: '',
        status:0
    })
}

  
  render() {
    let alerts =this.state.alert===''?<div></div> : this.state.status===1?
            (<div className="alert alert-success alert-dismissible fade show" role="alert"> 
                {this.state.alert} 
            <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
            </div>):
            (<div className="alert alert-danger alert-dismissible fade show" role="alert"> 
                {this.state.alert} 
            <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
            </div>)
            ;

    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6 mt-5 mx-auto">
            {alerts}
            <form noValidate onSubmit={this.onSubmit} className="create-product form-input">
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
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="brand">Brand</label>
                <input
                  type="text"
                  className="form-control"
                  name="brand"
                  placeholder="brand"
                  value={this.state.brand}
                  onChange={this.onChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="description">Description</label>
                <input
                  type="text"
                  className="form-control"
                  name="description"
                  placeholder="Description"
                  value={this.state.description}
                  onChange={this.onChange}
                  required
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
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="rating">Rating</label>
                <input
                  type="number"
                  className="form-control"
                  name="rating"
                  placeholder="rating"
                  value={this.state.rating}
                  onChange={this.onChange}
                  required
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
