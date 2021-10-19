import React from 'react';
import { Card } from 'react-bootstrap';
import './anstextbox.css'
function Anstextbox(props) {
    console.log(props.ans);
    return (
        <div className="ans-text-box">
            <Card className="text-center">
                <Card.Header>Player2</Card.Header>
                <Card.Body className="ans-text-body">
                    <Card.Title className="ans-text">{props.ans.map((letter)=>{
                        return <div className="ans-letters">{letter}</div>
                    })}</Card.Title>
                </Card.Body>
                <Card.Footer className="text-muted">Player1</Card.Footer>
            </Card>
        </div>
    );
}

export default Anstextbox;