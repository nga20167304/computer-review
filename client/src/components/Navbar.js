import React, {Component} from 'react';
import {Link, withRouter} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Dropdown, Image} from 'react-bootstrap';
import jwt_decode from 'jwt-decode';
import axios from 'axios'

async function isExpiredToken(token) {
    try {
        const r = await axios.post('http://localhost:5000/users/login', {
            token: token
        })
        console.log(r.data)
        if (!r.data)
            localStorage.removeItem('usertoken')
        return await r.data
    } catch(e) {
        localStorage.removeItem('usertoken')
        console.error(e.message)
        return false
    }
}

class Navbar extends Component {
    logOut(e) {
        e.preventDefault()
        localStorage.removeItem('usertoken')
        this.props.history.push(`/`)
    }

    render() {
        const loginRegLink = (
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link to="/login" className="nav-link">
                        Login
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/register" className="nav-link">
                        Register
                    </Link>
                </li>
            </ul>
        )

        let userLink = loginRegLink;
        const token = localStorage.usertoken;
        // TODO: check token is not expired

        if (token !== undefined && isExpiredToken(token)) {
            const decoded = jwt_decode(token);
            console.log(token)
            if (decoded.role === 'Admin') {
                userLink = (
                    <ul className="navbar-nav">

                        <Dropdown>
                            <Dropdown.Toggle variant="success" id="dropdown-basic">
                                <Image width="25" height="25" src={decoded.image} alt="no img" roundedCircle/>
                                {' '}
                                {decoded.name}
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item href="/create">Add Product</Dropdown.Item>
                                <Dropdown.Item href="/manage2">Product Manage</Dropdown.Item>
                                <Dropdown.Item href="/manage1">User Manage</Dropdown.Item>
                                <Dropdown.Item href="/profile">Profile</Dropdown.Item>
                                <Dropdown.Item href="https://www.google.cm/?gws_rd=ssl"
                                               onClick={this.logOut.bind(this)}>Logout</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>

                    </ul>
                )
            } else {
                userLink = (
                    <ul className="navbar-nav">

                        <Dropdown>
                            <Dropdown.Toggle variant="success" id="dropdown-basic">
                                <Image width="25" height="25" src={decoded.image} alt="no img" roundedCircle/>
                                {' '}
                                {decoded.name}
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item href="/profile">Profile</Dropdown.Item>
                                <Dropdown.Item href="https://www.google.cm/?gws_rd=ssl"
                                               onClick={this.logOut.bind(this)}>Logout</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>

                    </ul>
                )
            }
        }

        const openMenu = () => {
            document.querySelector(".sidebar").classList.add("open");
        }

        return (
            <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark rounded" style={{height:'5rem'}}>
                    <div className="brand">
                        <button onClick={openMenu}>
                            &#9776;
                        </button>
                        <Link to="/">Home</Link>
                    </div>

                    <div
                        className="collapse navbar-collapse"
                        id="navbar1"
                        style={{display: "flex", justifyContent: "flex-end", fontSize: "1em", alignItems: "center"}}
                    >
                        <div>
                            {localStorage.usertoken ? userLink : loginRegLink}
                        </div>
                    </div>
            </nav>
        )
    }
}

export default withRouter(Navbar)
