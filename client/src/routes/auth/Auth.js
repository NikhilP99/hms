import React,{Component} from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import Login from '../../components/Login/Login'
import Register from '../../components/Register/Register'

import './auth.css'

class Auth extends Component {
    render(){
        return(
            <Container>
                <Row className="upper">
                    <Col sm={6} className="center">
                        <Login />
                    </Col>
                    <Col sm={6} className="center">
                        <Register />
                    </Col>
                </Row>
            </Container>
        )
    }
}


export default Auth