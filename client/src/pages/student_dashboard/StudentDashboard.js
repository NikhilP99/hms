import React,{Component} from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Layout from '../../components/Layout'
import './dashboard.css'

class StudentDashooard extends Component {
    render(){
        return(
            <Layout>
                <Container>
                    <Row className="heading-row">
                        <Col sm={3}></Col>
                        <Col sm={6} className="center"><h2>Student Dashooard</h2></Col>
                        <Col sm={3}></Col>
                    </Row>
                    <Row className="heading-row">
                        <Col sm={2}></Col>
                        <Col sm={8} className="center">
                            <p style={{textAlign:'center'}}>This is the student dashboard. It is a protected route. Only a student can access it.</p>
                        </Col>
                        <Col sm={2}></Col>
                    </Row>
                </Container>
            </Layout>
        )
    }
}


export default StudentDashooard