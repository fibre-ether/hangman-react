import React, {useState} from 'react';
import './hint.css';
import { Card, Button } from 'react-bootstrap';
function Hint(props) {
    const [showToggle, setShowToggle] = useState(false);
    return (
        <div className={props.type}>
            <Card className="hint-div">
                <Card.Header className="hint-title">{props.type.slice(0,1).toUpperCase()}{props.type.slice(1)}</Card.Header>
                <Card.Body>
                    <Card.Title className="hint-head">{props.display===""?"Hidden":""}</Card.Title>
                    <Card.Text className="hint-text">
                    {props.display}
                    </Card.Text>
                    <div className="ans-button-div">
                    <Button variant="primary" 
                        onClick={(e) => {setShowToggle(!showToggle);
                            props.onPressed(e, props.type)
                            //console.log(showToggle)
                                        }
                                } 
                        disabled={showToggle}
                    >Reveal {props.type}</Button>
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
}

export default Hint;