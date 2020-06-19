import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom'
// import axios from 'axios';
import './App.css'
import HomeScreen from './screens/HomeScreen'
import ProductScreen from './screens/ProductScreen'
import CompareScreen2 from './screens/CompareScreen2'
import CompareScreen from './screens/CompareScreen'


import Navbar from './components/Navbar'
import Login from './components/Login'
import Register from './components/Register'
import Profile from './components/Profile'
import createProduct from './components/products/createProduct';

function App() {

  const closeMenu = () => {
    document.querySelector(".sidebar").classList.remove("open")
  }
  return (
      <Router>

        <div className="grid-container">
        <Navbar />

          <aside className='sidebar'>
            <h3>Home</h3>
            <button className='sidebar-close-button' onClick={closeMenu}>X</button>
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
              <Route path="/compares/:id1?/:id2" component={ CompareScreen2 }/>
              <Route path="/compare/:id" component={ CompareScreen }/>
              <Route path = "/product/:id" component = { ProductScreen } />
              <Route path = "/" exact = {true} component = { HomeScreen }/>
              <Route path = "/create" component = { createProduct } />
              <Route path="/register" component={Register} />
              <Route path="/login" component={Login} />
              <Route path="/profile" component={Profile} />
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
