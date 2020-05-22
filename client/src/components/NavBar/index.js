import React,{Component} from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import {Link} from 'react-router-dom'

class NavBar extends Component {
  render(){
    return(
        <Navbar bg="dark" variant="dark">
        <Navbar.Brand as={Link} to='/home'>HMS</Navbar.Brand>
        <Navbar.Collapse className="justify-content-end">
          <Nav.Link as={Link} to="/home">Home</Nav.Link>
          <Nav.Link as={Link} to="/about">About</Nav.Link>
          <Nav.Link as={Link} to="/auth">Login/Register</Nav.Link>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

export default NavBar