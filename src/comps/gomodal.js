import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './gomodal.css'
function GoModal(props) {
    return (
        <div>
            <Modal
            show={props.show}
            onHide={props.handleClose}
            backdrop="static"
            keyboard={false}
            
            >
            <Modal.Header>
                <Modal.Title className="modal-head">Game Ended</Modal.Title>
            </Modal.Header>
            <Modal.Body className="modal-text">
                <h1>{props.display.reason}</h1>
                <h4>Word was {props.display.word}</h4>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="primary" href="/play" >Play again</Button>
                <Button variant="secondary" as={Link} to="/" >Go home</Button>
            </Modal.Footer>
            </Modal>
        </div>
    );
}

export default GoModal;
