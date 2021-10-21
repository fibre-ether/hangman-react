import React, {useState} from 'react';
import './game.css'
import {Button} from 'react-bootstrap';
import words_data from './word_data.json';
import Anstextbox from '../comps/anstextbox';
import LetterButton from '../comps/button';
import Playercard from '../comps/playercard';
import Hint from '../comps/hint';
import bgGif from '../imgs/bg_grad_gif.webp';
import GoModal from '../comps/gomodal';

function Game() {
    const lettermap = "qwertyuiopasdfghjklzxcvbnm".toUpperCase().split("");
    const [clicks, setClicks] = useState(5);
    // eslint-disable-next-line no-unused-vars
    const [wordnum, setWordNum] = useState(Math.floor(Math.random() * 1000))
    const word = words_data.word[wordnum].toUpperCase().split("");
    const [ansShow, setAnsShow] = useState(word.map((item)=>{return "_ "}));
    const [displayDesc, setDisplayDesc] = useState("");
    const [displaySent, setDisplaySent] = useState("");
    const [displayError, setDIsplayError] = useState(false);
    ///const [showModal, setShowModal] = useState(true);
    //const [showGoModal, setShowGoModal] = useState(true);
    //const [playerName, setPlayerName] = useState(false);
    //const [gameEndReason, setGameEndReason] = useState({reason:"", word:word})

  function toggleOffTimeout(){
    const timeout = setTimeout(() => {
      setDIsplayError(false);
    }, 3000);
    return () => clearTimeout(timeout);
  }
  
  const onLetterPressed = (e, letter) => {
    //console.log(letter);
    checkIfCorrect(letter);
    e.preventDefault();
  }

  function checkIfCorrect(letter) {
      const temp = [...ansShow];
      //console.log(clicks);
      if (!word.includes(letter)) { setClicks((a) => (a-1));
        setDIsplayError(true);
        toggleOffTimeout();
      }
      word.map(
          (item, index) => {
          temp[index] = (item===letter?`${letter} `:temp[index]);
          return null;
        })
      setAnsShow(temp);
  }
  
  const onDescPressed = (e) => {
    setDisplayDesc(words_data.description[wordnum]);
    e.preventDefault();
  }
  
  const onSentPressed = (e) => {
    setDisplaySent(words_data.sentence[wordnum]);
    e.preventDefault();
  }
  // eslint-disable-next-line no-unused-vars
  const modalCloseHandle = (e, name) => {
    e.preventDefault();
    //setShowModal(false);
    //setPlayerName(name);
    //console.log(playerName,name);
    
  }  

  const goModalChangeVisibility = (e) => {
    e.preventDefault();
    //setShowGoModal(!showGoModal);
  }

  //console.log(word);
  return (
    <div>
    <img src={bgGif} alt="background" className="bg"/>
    <div>
    {displayError?<Button className="wrong-guess-div wrong-guess-fade" disabled>Wrong guess</Button>:null}
    </div>
    {clicks===0?<GoModal display={{reason:"Out of tries :(", word:word}} show={true} handleClose={goModalChangeVisibility}/>:null}
    {!ansShow.includes("_ ")?<GoModal display={{reason:"Congratulations, you won the game", word:word}} show={true} handleClose={goModalChangeVisibility}/>:null}
    <div>
      <Hint type="description" onPressed={onDescPressed} display={displayDesc}/>
      <Hint type="sentence" onPressed={onSentPressed} display={displaySent}/>
    </div>
    <div>
    <div className="player-card-bottom">
      <Playercard name="Player 1" position="bottom" desc={clicks}/>
    </div>
    <div className="ans-buttons-div">
      
      <Anstextbox 
      ans={ansShow}
      />
    <div className="buttons-div">
      <p>
    {lettermap.slice(0,10).map((item,index)=>{
        return <LetterButton 
        display={item}
        onPressed={onLetterPressed} />
    })}
      </p>
      <p>
    {lettermap.slice(10,19).map((item,index)=>{
        return <LetterButton 
        display={item}
        onPressed={onLetterPressed} />
    })}
      </p>
      <p>
    {lettermap.slice(19).map((item,index)=>{
        return <LetterButton 
        display={item}
        onPressed={onLetterPressed} />
    })}
      </p>
    </div>
    </div>
    </div>
    </div>
  );
}

export default Game;
