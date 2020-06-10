import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
// import { Dropdown, ButtonGroup, Button, DropdownToggle, DropdownMenu, DropdownItem} from 'reactstrap';
import { Dropdown } from 'react-bootstrap'

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

    const userLink = (
      <ul className="navbar-nav">
       {/* <Dropdown as={ButtonGroup}> 
        <Button variant="success">User</Button>

        <DropdownToggle split variant="success" id="dropdown-split-basic" />

        <DropdownMenu>
          <DropdownItem href="/profile">User</DropdownItem>
          <DropdownItem href=""><Link to="/profile" className="nav-link">
            User
          </Link></DropdownItem>
          <DropdownItem href="#/action-3">Something else</DropdownItem>
        </DropdownMenu>
      </Dropdown> */}
      <Dropdown>
  <Dropdown.Toggle variant="success" id="dropdown-basic">
    User
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item href="/profile">Profile</Dropdown.Item>
    <Dropdown.Item href="https://www.google.cm/?gws_rd=ssl" onClick={this.logOut.bind(this)}>Logout</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>
        {/* <li className="nav-item">
          <Link to="/profile" className="nav-link">
            User
          </Link>
        </li>
        <li className="nav-item">
          <a href="https://www.google.cm/?gws_rd=ssl" onClick={this.logOut.bind(this)} className="nav-link">
            Logout
          </a>
        </li> */}
      </ul>
    )

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

          <div
            className="collapse navbar-collapse"
            id="navbar1"
            style={{display: "flex", justifyContent: "space-between"}}
          >
            <div>
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  Home
              </Link>
              </li>
            </ul>
            </div>
            <div>
               {localStorage.usertoken ? userLink : loginRegLink}
            </div>
          </div>
      </nav>
    )
  }
}

export default withRouter(Navbar)