import React from 'react';
import { Card } from 'react-bootstrap';
function Anstextbox(props) {
    const word = "sigma".toUpperCase().split("");
    console.log(props.ans);
    return (
        <div className="ans-text-box">
            <Card className="text-center">
                <Card.Header>Player2</Card.Header>
                <Card.Body>
                    <Card.Title>{word.map((letter)=>{
                        return props.ans===letter?`${props.ans} `:"_ "
                    })}</Card.Title>
                </Card.Body>
                <Card.Footer className="text-muted">Player1</Card.Footer>
            </Card>
        </div>
    );
}

export default Anstextbox;