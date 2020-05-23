import React,{Component} from 'react'
import {connect} from 'react-redux'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

import {login} from '../../store/actions/auth'

class Login extends Component {

    state = {
        email: "",
        password: "",
    }

    onSubmit = async () => {
        let {email, password} = this.state

        if(email.trim()!=="" && password.trim()!==""){
            let user = {
                email,
                password
            }
            await this.props.login(user)
            console.log(this.props.auth)
        }
    }

    passChange = (e) => {
        this.setState({password: e.target.value})
    }

    emailChange = (e) => {
        this.setState({email: e.target.value})
    }


    render(){
        return(
            <div>
                <h3 style={{marginBottom:"25px"}}>Login</h3>
                
                <Form>
                <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="name@example.com" value={this.state.email} onChange={(e)=>{this.emailChange(e)}}/>
                </Form.Group>

                <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="password" value={this.state.password} onChange={(e)=>{this.passChange(e)}} />
                </Form.Group>
                </Form>

                <Button variant="outline-success" onClick={this.onSubmit}>Login</Button>
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
    login: login
}

export default connect(mapStateToProps,mapDispatchToProps)(Login)