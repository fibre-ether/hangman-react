import React from 'react';
import { Card } from 'react-bootstrap';
import './playercard.css';
function Playercard(props) {
    return (
        <div>
            <Card
            bg={props.position==="bottom"?"primary":"danger"}
            text="light"
            style={{ width: '18rem' }}
            className="mb-0"
            >
                {props.position==="bottom"?<Card.Header className="player-card-text" ><strong>{props.name}</strong></Card.Header>:null}
                <Card.Body>
                <Card.Text className="player-card-text">
                    Wrong guesses left: {props.desc}
                </Card.Text>
                </Card.Body>
                {props.position==="top"?<Card.Header className="player-card-text"><strong>{props.name}</strong></Card.Header>:null}
            </Card>
        </div>
    );
}

export default Playercard;