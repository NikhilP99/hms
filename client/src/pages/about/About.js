import React,{Component} from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Layout from '../../components/Layout'

class About extends Component {
    render(){
        return(
            <Layout>
                <Container>
                    <Row className="heading-row">
                        <Col sm={3}></Col>
                        <Col sm={6} className="center"><h2>About the team</h2></Col>
                        <Col sm={3}></Col>
                    </Row>
                    <Row className="heading-row">
                        <Col sm={2}></Col>
                        <Col sm={8} className="center">
                            <p style={{textAlign:'center'}}>This is an open source project. Feel free to contribute {' '}
                            <a href="https://github.com/NikhilP99/hms" target="blank">here</a></p>
                        </Col>
                        <Col sm={2}></Col>
                    </Row>
                </Container>
            </Layout>
        )
    }
}


export default About