
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
import QuanLyNguoiDung from "./components/Admin/QuanLyNguoiDung";
import QuanLySanPham from "./components/Admin/QuanLySanPham";
import {Dropdown, Button, ButtonGroup} from "react-bootstrap";
import Price1 from "./screens/Price1";
import Price2 from "./screens/Price2";
import Price3 from "./screens/Price3";
import updateProduct from "./components/products/updateProduct";
import {faStar} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Rating1 from "./screens/Rating1";
import Rating5 from "./screens/Rating5";
import Rating4 from "./screens/Rating4";
import Rating3 from "./screens/Rating3";
import Rating2 from "./screens/Rating2";

function App() {

  const closeMenu = () => {
    document.querySelector(".sidebar").classList.remove("open")
  }
  return (
      <Router>

        <div className="grid-container">
        <Navbar />

          <aside className='sidebar bg-dark' style={{textAlign:'right', marginTop:'5rem', marginBottom:'5rem'}}>
            <h1><Button variant="light" style={{marginRight:'0.5rem', borderRadius:'50%'}} onClick={closeMenu} >X</Button></h1>

            <div style={{textAlign:'center', marginLeft:'0.5rem', paddingTop:'1.5rem'}}>
              <Dropdown as={ButtonGroup} >
                <Dropdown.Toggle variant="light" style={{width:'15rem', size:'lg', height:'3rem'}}>Price</Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="/price1">Ít hơn 3000$</Dropdown.Item>
                  <Dropdown.Item href="/price2">3000$-5000$</Dropdown.Item>
                  <Dropdown.Item href="/price3">5000$++</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <Dropdown as={ButtonGroup} >
                <Dropdown.Toggle variant="light" style={{width:'15rem', size:'lg', height:'3rem'}}>Rating</Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="/rating1">1 <FontAwesomeIcon icon={faStar} size="1x" color="orange"/></Dropdown.Item>
                  <Dropdown.Item href="/rating2">2 <FontAwesomeIcon icon={faStar} size="1x" color="orange"/></Dropdown.Item>
                  <Dropdown.Item href="/rating3">3 <FontAwesomeIcon icon={faStar} size="1x" color="orange"/></Dropdown.Item>
                  <Dropdown.Item href="/rating4">4 <FontAwesomeIcon icon={faStar} size="1x" color="orange"/></Dropdown.Item>
                  <Dropdown.Item href="/rating5">5 <FontAwesomeIcon icon={faStar} size="1x" color="orange"/></Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>

            </div>
          </aside>
          <main className="main">
            <div className="content">
              <Route path="/rating1" component={Rating1}/>
              <Route path="/rating2" component={Rating2}/>
              <Route path="/rating3" component={Rating3}/>
              <Route path="/rating4" component={Rating4}/>
              <Route path="/rating5" component={Rating5}/>
              <Route path="/price1" component={Price1}/>
              <Route path="/price2" component={Price2}/>
              <Route path="/price3" component={Price3}/>
              <Route path="/compares/:id1?/:id2" component={ CompareScreen2 }/>
              <Route path="/manage2" component={QuanLySanPham}/>
              <Route path="/manage1" component={QuanLyNguoiDung}/>
              <Route path="/compare/:id" component={ CompareScreen }/>
              <Route path = "/product/:id" component = { ProductScreen } />
              <Route path = "/" exact = {true} component = { HomeScreen }/>
              <Route path = "/create" component = { createProduct } />
              <Route path="/register" component={Register} />
              <Route path="/login" component={Login} />
              <Route path="/profile" component={Profile} />
              <Route path="/update/:id" component={updateProduct} />
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
