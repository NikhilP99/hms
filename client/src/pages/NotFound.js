import React,{Component} from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

class NotFound extends Component {
    render(){
        return(
                <Container>
                    <Row className="heading-row">
                        <Col sm={3}></Col>
                        <Col sm={6} className="center"><h2>Error: 404 Not Found</h2></Col>
                        <Col sm={3}></Col>
                    </Row>
                    <Row className="heading-row">
                        <Col sm={2}></Col>
                        <Col sm={8} className="center">
                            <p style={{textAlign:'center'}}>The page you are looking for doesn't exist.</p>
                        </Col>
                        <Col sm={2}></Col>
                    </Row>
                </Container>
        )
    }
}


export default NotFound