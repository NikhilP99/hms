import React,{Component} from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import {connect} from 'react-redux'

import Login from '../../components/Login/Login'
import Register from '../../components/Register/Register'

import './auth.css'

class Auth extends Component {

    componentDidMount(){
        if(this.props.auth.loggedIn){
            this.props.history.push('/home')
        }
    }

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

const mapStateToProps = ({auth}) => {
    return {
        auth: auth
    }
}

export default connect(mapStateToProps)(Auth)