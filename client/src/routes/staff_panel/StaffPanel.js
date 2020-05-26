import React,{Component} from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import './dashboard.css'

class StaffPanel extends Component {
    render(){
        return(
            <Container>
                <Row className="heading-row">
                    <Col sm={3}></Col>
                    <Col sm={6} className="center"><h2>Staff Panel</h2></Col>
                    <Col sm={3}></Col>
                </Row>
                <Row className="heading-row">
                    <Col sm={2}></Col>
                    <Col sm={8} className="center">
                        <p style={{textAlign:'center'}}>This is the Staff panel.
                         Here, Staff can see all appointment requests.
                         It is a protected route. Only a staff member can access it.</p>
                    </Col>
                    <Col sm={2}></Col>
                </Row>
            </Container>
        )
    }
}


export default StaffPanel