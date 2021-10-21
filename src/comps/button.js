import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import './button.css';

function LetterButton(props) {
    const [showToggle, setShowToggle] = useState(false);

    return (
        <>
            <Button 
            className="letter-buttons" 
            onClick={(e) => {setShowToggle(!showToggle);
                            props.onPressed(e, props.display)
                            //console.log(showToggle)
                            }
                    } 
            disabled={showToggle}
            >
                {props.display}
            </Button>{' '}
        </>
    );
}

export default LetterButton;