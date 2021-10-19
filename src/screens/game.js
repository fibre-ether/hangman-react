import React, {useState} from 'react';
import './game.css'
import words_data from './word_data.json';
import Anstextbox from '../comps/anstextbox';
import LetterButton from '../comps/button';
import Playercard from '../comps/playercard';

function Game() {
    const lettermap = "qwertyuiopasdfghjklzxcvbnm".toUpperCase().split("");
    const [clicks, setClicks] = useState(0);
    const [wordnum, setWordNum] = useState(Math.floor(Math.random() * 1000))
    const word = words_data.word[wordnum].toUpperCase().split("");
    const [ansShow, setAnsShow] = useState(word.map((item)=>{return "_ "}));

  //
  console.log(word);

  const onLetterPressed = (e, letter) => {
    console.log(letter);
    checkIfCorrect(letter);
    setClicks((a) => (a+1));
    e.preventDefault();
  }

  function checkIfCorrect(letter) {
      const temp = [...ansShow];
      console.log("temp",temp);
      word.map(
          (item, index) => {
          temp[index] = (item===letter?`${letter} `:temp[index]);
          return null;
        })
      setAnsShow(temp);
  }
  
  return (
    <>
    <div>
    </div>
    <div>
    <div className="player-card-top">
      <Playercard name="Player2" position="top" desc="should be on top"/>
    </div><div className="player-card-bottom">
      <Playercard name="Player1" position="bottom" desc={clicks}/>
    </div>
    <div className="letter-buttons-div">
      
      <Anstextbox 
      ans={ansShow}
      />

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
    </>
  );
}

export default Game;
