import React,{Component} from 'react'
import {connect} from 'react-redux'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import {login} from '../../store/auth/actions'
import Layout from '../../components/Layout'

class Login extends Component {

    state = {
        email: "",
        password: "",
        userType: "Student",
    }

    onSubmit = () => {
        let {email, password, userType} = this.state

        if(email.trim()!=="" && password.trim()!=="" && userType.trim()!==""){
            let user = {
                email,
                password,
                userType
            }

            console.log(user)
            this.props.login( user)
        }
    }

    onUserChange = (e) => {
        this.setState({userType: e.target.value})
    }

    passChange = (e) => {
        this.setState({password: e.target.value})
    }

    emailChange = (e) => {
        this.setState({email: e.target.value})
    }


    render(){
        return(
            <Layout>
                <Container>
                    <Row className="center" ><h2 className="heading">Login</h2></Row>
                    <Row>
                        <Col sm={2} ></Col>
                        <Col sm={8} >
                            <Form>

                            <Form.Group as={Row} controlId="exampleForm.SelectCustom">
                                <Form.Label column sm={2} >User type </Form.Label>
                                <Col sm={10}>
                                <Form.Control as="select" value={this.state.userType} onChange={(e)=>{this.onUserChange(e)}} custom>
                                <option value="Student">Student</option>
                                <option value="Admin">Admin</option>
                                <option value="Staff">Hospital Official</option>
                                <option value="Doctor">Doctor</option>
                                </Form.Control>
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} controlId="exampleForm.ControlInput1">
                                <Form.Label column sm={2} >Email </Form.Label>
                                <Col sm={10} >
                                <Form.Control type="email" placeholder="name@example.com" value={this.state.email} onChange={(e)=>{this.emailChange(e)}}/>
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} controlId="exampleForm.ControlInput1">
                                <Form.Label column sm={2} >Password</Form.Label>
                                <Col sm={10} >
                                <Form.Control type="password" placeholder="password" value={this.state.password} onChange={(e)=>{this.passChange(e)}} />
                                </Col>
                            </Form.Group>

                            </Form>
                        </Col>
                        <Col sm={2} ></Col>
                    </Row>
                    <Row className="center"><Button className="submit-button" variant="outline-success" onClick={this.onSubmit}>Login</Button></Row>
                </Container>
            </Layout>
        )
    }
}

const mapStateToProps = ({auth}) => {
    return {
        auth: auth
    }
}

const mapDispatchToProps = {
    login: login
}

export default connect(mapStateToProps,mapDispatchToProps)(Login)