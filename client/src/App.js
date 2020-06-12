import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
// import axios from 'axios';
import './App.css'
import data from './data'

import Navbar from './components/Navbar'
import Landing from './components/Landing'
import Login from './components/Login'
import Register from './components/Register'
import Profile from './components/Profile'
import Sidebar from './components/Sidebar'

function App() {
  const openMenu = () => {
    document.querySelector(".sidebar").classList.add("open");
  }
  const closeMenu = () => {
    document.querySelector(".sidebar").classList.remove("open")
  }
    return (
      <Router>
        {/* <div classNameName="App">
          <Navbar />
          <Route exact path="/" component={Landing} />
          <div classNameName="container">
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/profile" component={Profile} />
          </div>
        </div> */}
        <div className="grid-container">
          <header className="header">
            <div className="brand">
              <button onClick={openMenu}>
                &#9776;
              </button>
              <a href="index.html">Menu</a>
            </div>
            <div className="header-links">
              <a href="cart.html">Login</a>
              <a href="signin.html">Register</a>
            </div>
          </header>
          <aside className="sidebar">
            <h3>Home</h3>
            <button className="sidebar-close-button" onClick={closeMenu}>x</button>
            <ul>
              <li>
                <a href="index.html">Brand</a>
              </li>

              <li>
                <a href="index.html">Price</a>
              </li>

            </ul>
          </aside>
          <main className="main">
            <div className="content">
              <ul className="products">
                {
                  data.products.map( product => 
                    <li>
                      <div className="product">
                        <img className="product-image" src={product.image} alt="product" />
                        <div className="product-name">
                          <a href="product.html">{product.name}</a>
                        </div>
                        <div className="product-brand">{product.brand}</div>
                        <div className="product-price">{product.price}</div>
                        <div className="product-rating">{product.rating} Stars ({product.numReviews})</div>
                      </div>
                    </li>
                    )
                }
              </ul>
            </div>

          </main>
          <footer className="footer">
            Team 4 ITSS Japanese
          </footer>
        </div>
      </Router>
    )
  }

export default App;
