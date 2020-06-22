
import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom'
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

import { Admin, Resource } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import { UserList, UserEdit } from './users'
import { PostList, PostCreate, PostEdit } from './posts';
// import myDataProvider from './myDataProvider'

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');

function App() {

  const closeMenu = () => {
    document.querySelector(".sidebar").classList.remove("open")
  }
  return (
      <Router>

        <div className="grid-container">
{/* <<<<<<< HEAD
          <header className="header">
            <div className="brand">
              <button onClick={openMenu}>
                &#9776;
              </button>
              <Link to = "/" >Menu</Link>
            </div>
            <div className="header-links">
              <Link to ="/login">Login</Link>
              <Link to ="/register">Register</Link>
              <Link to="/create">Add Post</Link>
            </div>
          </header>
======= */}
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

          {/* <Admin dataProvider={dataProvider}>
            <Resource name="posts" list={PostList} edit={PostEdit} create ={PostCreate} />
            <Resource name="users" list={ UserList} edit={ UserEdit }/>
          </Admin> */}

          <footer className="footer">
            Team 4 ITSS Japanese
          </footer>
        </div>
      </Router>
    )
  }

export default App;
