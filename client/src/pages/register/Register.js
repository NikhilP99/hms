import React,{Component} from 'react'
import {connect} from 'react-redux'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import {register} from '../../store/auth/actions'
import Layout from '../../components/Layout'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";

class Register extends Component {

    state = {
        email: "",
        password: "",
        name: "",
        dob: "",
        height: "",
        weight: "",
        roll_number: "",
        gender:"Male"
    }

    passChange = (e) => {
        this.setState({password: e.target.value})
    }
    emailChange = (e) => {
        this.setState({email: e.target.value})
    }
    genderChange = (e) => {
        this.setState({gender: e.target.value})
    }
    nameChange = (e) => {
        this.setState({name: e.target.value})
    }
    dobChange = (date) => {
        this.setState({dob: date})
    }
    heightChange = (e) => {
        this.setState({height: e.target.value})
    }
    weightChange = (e) => {
        this.setState({weight: e.target.value})
    }
    rollChange = (e) => {
        this.setState({roll_number: e.target.value})
    }
    onSubmit = () => {
        let {email, password, name, dob, height, weight, roll_number, gender} = this.state

        if(email.trim()!=="" && password.trim()!=="" && gender.trim()!=="" && name.trim()!=="" && dob!=="" && roll_number.trim()!==""){
            let user = {
                email,
                name,
                password,
                dob,
                height,
                weight,
                gender,
                roll_number
            }

            console.log(user)
            this.props.register(user)
        }
    }

    render(){
        return(
            <Layout>
                <Container>
                    <Row className="center" ><h2 className="heading">Register (for students only)</h2></Row>
                    <Row>
                        <Col sm={2} ></Col>
                        <Col sm={8} >
                            <Form>

                            <Form.Group as={Row} controlId="exampleForm.ControlInput1">
                                <Form.Label column sm={2} >Roll number </Form.Label>
                                <Col sm={10} >
                                <Form.Control type="text" placeholder="Eg. 16AG10034" value={this.state.roll_number} onChange={(e)=>{this.rollChange(e)}} required/>
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} controlId="exampleForm.ControlInput1">
                                <Form.Label column sm={2} >Email </Form.Label>
                                <Col sm={10} >
                                <Form.Control type="email" placeholder="name@example.com" value={this.state.email} onChange={(e)=>{this.emailChange(e)}} required/>
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} controlId="exampleForm.ControlInput1">
                                <Form.Label column sm={2} >Name </Form.Label>
                                <Col sm={10} >
                                <Form.Control type="name" placeholder="As mentioned in ERP" value={this.state.name} onChange={(e)=>{this.nameChange(e)}} required/>
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} controlId="exampleForm.SelectCustom">
                                <Form.Label column sm={2} >Gender </Form.Label>
                                <Col sm={10}>
                                <Form.Control as="select" value={this.state.gender} onChange={(e)=>{this.genderChange(e)}} required custom>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Other">Other</option>
                                </Form.Control>
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} controlId="exampleForm.ControlInput1">
                                <Form.Label column sm={2} >Height </Form.Label>
                                <Col sm={10} >
                                <Form.Control type="number" placeholder="in Kgs" value={this.state.height} onChange={(e)=>{this.heightChange(e)}}/>
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} controlId="exampleForm.ControlInput1">
                                <Form.Label column sm={2} >Weight </Form.Label>
                                <Col sm={10} >
                                <Form.Control type="number" placeholder="in inches" value={this.state.weight} onChange={(e)=>{this.weightChange(e)}}/>
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} controlId="exampleForm.ControlInput1">
                                <Form.Label column sm={2} >DoB </Form.Label>
                                <Col sm={10} >
                                <DatePicker
                                    selected={this.state.dob}
                                    onChange={date => this.dobChange(date)}
                                    showMonthDropdown
                                    showYearDropdown
                                    dropdownMode="select"
                                    />
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} controlId="exampleForm.ControlInput1">
                                <Form.Label column sm={2} >Password</Form.Label>
                                <Col sm={10} >
                                <Form.Control type="password" placeholder="password" value={this.state.password} onChange={(e)=>{this.passChange(e)}} required/>
                                </Col>
                            </Form.Group>

                            </Form>
                        </Col>
                        <Col sm={2} ></Col>
                    </Row>
                    <Row className="center"><Button className="submit-button" variant="outline-success" onClick={this.onSubmit}>Register</Button></Row>
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
    register: register
}

export default connect(mapStateToProps,mapDispatchToProps)(Register)