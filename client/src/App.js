import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom'
// import axios from 'axios';
import './App.css'
import HomeScreen from './screens/HomeScreen'
import ProductScreen from './screens/ProductScreen'

import Navbar from './components/Navbar'
import Landing from './components/Landing'
import Login from './components/Login'
import Register from './components/Register'
import Profile from './components/Profile'
import Sidebar from './components/Sidebar'
import createProduct from './components/products/createProduct';

function App() {
  
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
        <Navbar />
            
        <div className="grid-container">
          <header className="header">
            <div className="brand">
              <button onClick={openMenu}>
                &#9776;
              </button>
              <Link to = "/" >Menu</Link>
            </div>
            <div className="header-links">
              <a href="cart.html">Login</a>
              <a href="signin.html">Register</a>
              <Link to="/create">Add product</Link>
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
              <Route path = "/product/:id" component = { ProductScreen } />
              <Route path = "/" exact = {true} component = { HomeScreen }/>
              <Route path = "/create" component = { createProduct } />
              <Route exact path="/register" component={Register} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/profile" component={Profile} />
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
