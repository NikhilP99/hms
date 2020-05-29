import React,{Component} from 'react'
import {connect} from 'react-redux'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

import {register} from '../../store/auth/actions'


class Register extends Component {

    state = {
        email: "",
        userType: "Student",
        password: "",
        name: ""
    }

    passChange = (e) => {
        this.setState({password: e.target.value})
    }

    emailChange = (e) => {
        this.setState({email: e.target.value})
    }

    nameChange = (e) => {
        this.setState({name: e.target.value})
    }

    onUserChange = (e) => {
        this.setState({userType: e.target.value})
    }

    onSubmit = async () => {
        let {email,name,password,userType} = this.state

        if(email.trim()!=="" && name.trim()!=="" && password.trim()!==""){
            let user = {
                email,
                userType,
                name,
                password
            }

            await this.props.register(user)
            console.log(this.props.auth)
        }
    }

    render(){
        return(
            <div>
                <h3 style={{marginBottom:"25px"}}>Register</h3>
                
                <Form>
                <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="name@example.com" value={this.state.email} onChange={(e)=>{this.emailChange(e)}}/>
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Your name" value={this.state.name} onChange={(e)=>{this.nameChange(e)}} />
                </Form.Group>
                <Form.Group controlId="exampleForm.SelectCustom">
                    <Form.Label>User type</Form.Label>
                    <Form.Control as="select" value={this.state.userType} onChange={(e)=>{this.onUserChange(e)}} custom>
                    <option value="Student">Student</option>
                    <option value="Admin">Admin</option>
                    <option value="Hospital Official">Hospital Official</option>
                    <option value="Doctor">Doctor</option>
                    </Form.Control>
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="password" value={this.state.password} onChange={(e)=>{this.passChange(e)}} />
                </Form.Group>
                </Form>

                <Button variant="outline-success" onClick={this.onSubmit}>Submit</Button>
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
    register: register
}

export default connect(mapStateToProps,mapDispatchToProps)(Register)