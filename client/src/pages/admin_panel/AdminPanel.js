import React,{Component} from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import './dashboard.css'
import Layout from '../../components/Layout'
import SideNav from '../../components/SideNav'

class AdminPanel extends Component {
    render(){
        return(
            <Layout>
                <SideNav />
                <Container>
                    <Row className="heading-row">
                        <Col sm={3}></Col>
                        <Col sm={6} className="center"><h2>Admin Panel</h2></Col>
                        <Col sm={3}></Col>
                    </Row>
                    <Row className="heading-row">
                        <Col sm={2}></Col>
                        <Col sm={8} className="center">
                            <p style={{textAlign:'center'}}>This is the admin panel.
                            Here, admin can see all other officials.
                            It is a protected route. Only an admin can access it.</p>
                        </Col>
                        <Col sm={2}></Col>
                    </Row>
                </Container>
            </Layout>
        )
    }
}


export default AdminPanel
