import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
// import { Dropdown, ButtonGroup, Button, DropdownToggle, DropdownMenu, DropdownItem} from 'reactstrap';
import { Dropdown, Image} from 'react-bootstrap'
import jwt_decode from 'jwt-decode';

class Navbar extends Component {
    logOut(e) {
        e.preventDefault()
        localStorage.removeItem('usertoken')
        this.props.history.push('/')
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
                <li className="nav-item">
                    <Link to="/create" className="nav-link">Add product</Link>
                </li>
            </ul>
        )

        let userLink = loginRegLink;
        const token = localStorage.usertoken;
        if(token){
            const decoded = jwt_decode(token);
            userLink = (
                <ul className="navbar-nav">

                    <Dropdown>
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                            <Image width="25" height="25" src={decoded.image} alt="no img" roundedCircle/>
                            {' '}
                            {decoded.name}
                        </Dropdown.Toggle>

                        <Dropdown.Menu style = {{color : 'dark'}}>
                            <Dropdown.Item href="/profile">Profile</Dropdown.Item>
                            <Dropdown.Item href="/" onClick={this.logOut.bind(this)}>Logout</Dropdown.Item>
                            <Dropdown.Item href="/create">AddProduct</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>

                </ul>
            )
        }

        const openMenu = () => {
            document.querySelector(".sidebar").classList.add("open");
        }

        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark rounded">
                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbar1"
                    aria-controls="navbar1"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="brand">
                    <button onClick={openMenu}>
                        &#9776;
                    </button>
                    <Link to = "/" >Home</Link>
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
