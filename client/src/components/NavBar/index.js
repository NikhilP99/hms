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



// a function which builds an SQL query to update some information
const buildUpdateQuery = (table,lastUpdated,email,phone) => {
  let query = `UPDATE ${table} SET lastUpdated="${lastUpdated}", phone="${phone}" WHERE email=${email};`
  return query
}

// Traditional usage

const updateJohn = buildUpdateQuery("Users",new Date(),"john@mail.com","123456789")
const updateDexter = buildUpdateQuery("Users",new Date(),"dexter@mail.com","987654321")
const updateMia = buildUpdateQuery("Users",new Date(),"mia@mail.com","654321987")