import React, {useState} from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

function ModalForm(props) {
  //console.log(Modal);
  const [playerName,setPlayerName] = useState("");

  const handleChange = (e) => {
    e.preventDefault();
      setPlayerName(e.target.value);
  }
    return (
      <>
        <Modal
          show={props.show}
          onHide={props.handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={(e) => {props.handleClose(e,playerName)}}>
                <Form.Group className="mb-3" controlId="formBasicText">
                    <Form.Label>Player Name</Form.Label>
                    <Form.Control 
                    type="text"
                    value={playerName}
                    onChange={handleChange}
                    placeholder="Enter player name" 
                    />
                </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" type="submit" onClick={(e) => {props.handleClose(e,playerName)}}>Understood</Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }

  export default ModalForm;