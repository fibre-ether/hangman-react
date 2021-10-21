import React from 'react';
import { Card } from 'react-bootstrap';
import './anstextbox.css'
function Anstextbox(props) {
    return (
        <div className="ans-text-box">
            <Card className="text-center border-5">
                <Card.Header>Complete it</Card.Header>
                <Card.Body className="ans-text-body">
                    <Card.Title className="ans-text">{props.ans.map((letter)=>{
                        return <div className="ans-letters">{letter}</div>
                    })}</Card.Title>
                </Card.Body>
            </Card>
        </div>
    );
}

export default Anstextbox;