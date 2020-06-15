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
  const openMenu = () => {
    document.querySelector(".sidebar").classList.add("open")
  }
    return (
      <Router>

        <div className="grid-container">
          <header className="header">
            <div className="brand">
              <button onClick={openMenu}>
                &#9776;
              </button>
              <Link to = "/" >Menu</Link>
            </div>
            <div className="header-links">
              <Link to="/login">Login</Link>
              <Link to="/register">Register</Link>
              <Link to="/create">Add product</Link>
            </div>
          </header>

          <aside className="sidebar">
            <h3>Home</h3>
            <button className="sidebar-close-button" onClick={closeMenu}>x</button>
            <ul>
              <li>
                <Link to ="/brand">Brand</Link>
              </li>

              <li>
                <Link to ="/price">Brand</Link>
              </li>

            </ul>
          </aside>
          <main className="main">
            <div className="content">
              <Route path = "/product/:id" component = { ProductScreen } />
              <Route exact path = "/" exact = {true} component = { HomeScreen }/>
              <Route  path="/profile" component={Profile} />
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
