import React,{Component} from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

import {logout} from '../../store/auth/actions'


class NavBar extends Component {

  logout = async () => {
    await this.props.logout()
  }

  renderAuthedNav = () => {
    return (
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand >Welcome {this.props.auth.name}</Navbar.Brand>
        <Navbar.Collapse className="justify-content-end">
          <Nav.Link as={Link} to="/home">Book</Nav.Link>
          <Nav.Link as={Link} to="/about">Upcoming</Nav.Link>
          <Nav.Link onClick={this.logout} >Logout</Nav.Link>
        </Navbar.Collapse>
      </Navbar>
    )
  }

  renderDefaultNav = () => {
    return(
      <Navbar bg="dark" variant="dark">
      <Navbar.Brand as={Link} to='/home'>HMS</Navbar.Brand>
      <Navbar.Collapse className="justify-content-end">
        <Nav.Link as={Link} to="/home">Home</Nav.Link>
        <Nav.Link as={Link} to="/about">About</Nav.Link>
        <Nav.Link as={Link} to="/register">Register</Nav.Link>
        <Nav.Link as={Link} to="/login">Login</Nav.Link>
      </Navbar.Collapse>
    </Navbar>
  )
  }


  render(){
    return (
      <div>
        {this.props.auth.loggedIn ? this.renderAuthedNav() : this.renderDefaultNav()}
      </div>
    )
  }
}

const mapStateToProps = ({auth}) => {
  return {
      auth: auth
  }
}

const mapDispatchToProps = {
  logout: logout
}


export default connect(mapStateToProps,mapDispatchToProps)(NavBar)