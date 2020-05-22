import React,{Component} from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import './home.css'

class Home extends Component {
    render(){
        return(
            <Container>
                <Row className="heading-row">
                    <Col sm={3}></Col>
                    <Col sm={6} className="center"><h2>Hospital Management System</h2></Col>
                    <Col sm={3}></Col>
                </Row>
                <Row className="heading-row">
                    <Col sm={2}></Col>
                    <Col sm={8} className="center">
                        <p style={{textAlign:'center'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </Col>
                    <Col sm={2}></Col>
                </Row>
            </Container>
        )
    }
}


export default Home