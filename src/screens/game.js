import React, {useState} from 'react';
import './game.css'
import words_data from './word_data.json';
import Anstextbox from '../comps/anstextbox';
import LetterButton from '../comps/button';
import Playercard from '../comps/playercard';
import Hint from '../comps/hint';
import ModalForm from '../comps/modal';

function Game() {
    const lettermap = "qwertyuiopasdfghjklzxcvbnm".toUpperCase().split("");
    const [clicks, setClicks] = useState(5);
    const [wordnum, setWordNum] = useState(Math.floor(Math.random() * 1000))
    const word = words_data.word[wordnum].toUpperCase().split("");
    const [ansShow, setAnsShow] = useState(word.map((item)=>{return "_ "}));
    const [displayDesc, setDisplayDesc] = useState("");
    const [displaySent, setDisplaySent] = useState("");
    const [showModal, setShowModal] = useState(true);
    const [playerName, setPlayerName] = useState("PLAYER1");
  //
  console.log(ansShow);

  const onLetterPressed = (e, letter) => {
    console.log(letter);
    checkIfCorrect(letter);
    e.preventDefault();
  }

  function checkIfCorrect(letter) {
      const temp = [...ansShow];
      console.log("temp",temp);
      if (!word.includes(letter)) { setClicks((a) => (a-1)); }
      if (clicks<=1) { console.log("Guesses exceeded") }
      word.map(
          (item, index) => {
          temp[index] = (item===letter?`${letter} `:temp[index]);
          return null;
        })
      setAnsShow(temp);
  }
  
  const onDescPressed = (e) => {
    setDisplayDesc(words_data.description[wordnum]);
    console.log("pressed desc", displayDesc)
    e.preventDefault();
  }
  
  const onSentPressed = (e) => {
    setDisplaySent(words_data.sentence[wordnum]);
    e.preventDefault();
  }
  
  const modalCloseHandle = (e, name) => {
    e.preventDefault();
    setShowModal(false);
    setPlayerName(name);
    console.log(playerName,name);
  }

  console.log(ansShow);
  return (
    <>
    {!showModal?null:<ModalForm show={showModal} handleClose={modalCloseHandle}/>}
    <div>
      <Hint type="description" onPressed={onDescPressed} display={displayDesc}/>
      <Hint type="sentence" onPressed={onSentPressed} display={displaySent}/>
    </div>
    <div>
    <div className="player-card-bottom">
      <Playercard name={playerName} position="bottom" desc={clicks}/>
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
    </>
  );
}

export default Game;
