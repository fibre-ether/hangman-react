import React, {useState} from 'react';
import Anstextbox from '../comps/anstextbox';
import LetterButton from '../comps/button';
import Playercard from '../comps/playercard';

function Game() {
  const lettermap = "qwertyuiopasdfghjklzxcvbnm".toUpperCase().split("");
  const [ansLetter, setAnsLetter] = useState("");
  const [word, setWord] = useState("sigma".toUpperCase().split(""));

  //
  console.log("appfunc", ansLetter)
  function onLetterPressed(letter) {
    console.log(letter);
    setAnsLetter(letter)
    //ansCheck(letter);
  }

  function ansCheck(letter) {
    //
    console.log(letter);
  }
  
  return (
    <>
    <div>
    </div>
    <div>
    <div className="player-card-top">
      <Playercard name="Player2" position="top" desc="should be on top"/>
    </div><div className="player-card-bottom">
      <Playercard name="Player1" position="bottom" desc="should be on bottom"/>
    </div>
    <div className="letter-buttons-div">
      
      <Anstextbox 
      ans={ansLetter}
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
