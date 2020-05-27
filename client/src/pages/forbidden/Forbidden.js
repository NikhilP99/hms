import React,{Component} from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

class Forbidden extends Component {
    render(){
        return(
                <Container>
                    <Row className="heading-row">
                        <Col sm={3}></Col>
                        <Col sm={6} className="center"><h2>403 - Forbidden</h2></Col>
                        <Col sm={3}></Col>
                    </Row>
                    <Row className="heading-row">
                        <Col sm={2}></Col>
                        <Col sm={8} className="center">
                            <p style={{textAlign:'center'}}>You do not have access to this page. Kindly go back.</p>
                        </Col>
                        <Col sm={2}></Col>
                    </Row>
                </Container>
        )
    }
}


export default Forbidden