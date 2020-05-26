import React,{Component} from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import './dashboard.css'

class DoctorDashboard extends Component {
    render(){
        return(
            <Container>
                <Row className="heading-row">
                    <Col sm={3}></Col>
                    <Col sm={6} className="center"><h2>Doctor Dashboard</h2></Col>
                    <Col sm={3}></Col>
                </Row>
                <Row className="heading-row">
                    <Col sm={2}></Col>
                    <Col sm={8} className="center">
                        <p style={{textAlign:'center'}}>This is the doctor dashboard.
                         Here, doctor will see their pending queue.
                         It is a protected route. Only a doctor can access it.</p>
                    </Col>
                    <Col sm={2}></Col>
                </Row>
            </Container>
        )
    }
}


export default DoctorDashboard