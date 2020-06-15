import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom'
// import axios from 'axios';
import './App.css'
import HomeScreen from './screens/HomeScreen'
import ProductScreen from './screens/ProductScreen'
import Login from './components/Login'
import Register from './components/Register'
import Profile from './components/Profile'
import createProduct from './components/products/createProduct';
import CompareScreen from './screens/CompareScreen'
import CompareScreen2 from './screens/CompareScreen2'

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
        {/* <Navbar /> */}
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
              <Route path="/compares/:id1?/:id2" component={ CompareScreen2 }/>
              <Route path="/compare/:id" component={ CompareScreen }/>
              <Route path = "/product/:id" component = { ProductScreen } />
              <Route exact path = "/" exact = {true} component = { HomeScreen }/>
              <Route path = "/create" component = { createProduct } />
              <Route  path="/register" component={Register} />
              <Route  path="/login" component={Login} />
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
