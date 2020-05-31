import React, {Component} from 'react'
import Modal from 'react-bootstrap/Modal'
// import Button from 'react-bootstrap/Button'
import {connect} from 'react-redux'
import {close_modal} from '../../store/modal/actions'


class ModalComponent extends Component {

    handleClose = () => {
        this.props.close_modal()
    }

    render(){
        return(
            <>
            {this.props.open ? (
                <Modal show={this.props.open} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                    <Modal.Title>{this.props.title}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>{this.props.message}</Modal.Body>
                    {/* <Modal.Footer>
                    <Button variant="secondary" onClick={this.handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={this.handleClose}>
                        Save Changes
                    </Button>
                    </Modal.Footer> */}
                </Modal>
            ): ("")}
            </>
        )
    }
}

const mapStatetoProps = ({modal}) => {
    return {
        open: modal.open,
        title: modal.title,
        message: modal.message
    }
}

const mapDispatchToProps = {
    close_modal
}

export default connect(mapStatetoProps,mapDispatchToProps)(ModalComponent)
