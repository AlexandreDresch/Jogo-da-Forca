import { Jogo } from "./components/Jogo";
import { Letras } from "./components/Letras";
import { Chute } from "./components/Chute";

import palavras from "./palavras";

import "./reset.css";
import { useEffect, useState } from "react";

export default function App() {
  const [arrayWord, setArrayWord] = useState([]);
  const [hiddenWord, setHiddenWord] = useState([]);
  const [isDisabled, setIsDisabled] = useState(true);
  const [errors, setErrors] = useState(0);
  const [selectedLettersArr, setSelectedLettersArr] = useState([]);

  let arr = []

  function handleStartGame() {
    setIsDisabled(false);    
    handleChooseWord();
  }

  function handleChooseWord() {
    let index = Math.floor(Math.random() * palavras.length);

    let arrayWord = [...palavras[index]];
    setArrayWord(arrayWord);

    let hiddenArr = arrayWord.map(() => "_");
    setHiddenWord(hiddenArr);
  }

  function checkLetter(letter) {
    let arr = [...selectedLettersArr, letter];
    setSelectedLettersArr(arr);

    if(arrayWord.includes(letter)){
      let indexes = arrayWord.map((e, i) => e === letter ? i : '').filter(String)
      let changedArr = [...hiddenWord];

      for(let i = 0; i < indexes.length; i++) {
        changedArr[indexes[i]] = letter.toUpperCase();
      }
      setHiddenWord(changedArr);
    } else {      
      checkErrors();
    }
  }

  function checkErrors() {
    if (errors < 5) {
      setErrors(errors+1)
      console.log(errors)
    }   
    else {
      setErrors(errors+1)
      
      gameOver()
    }
  }

  function gameOver() {
    setIsDisabled(true)
    console.log('game over')
  }

  return (
    <div className="App">
      <Jogo
        start={handleStartGame}
        photo={errors}
        hiddenWord={hiddenWord}
      />
      <Letras 
        disabled={isDisabled}

        checkLetter={checkLetter}
      />
      <Chute 
        disabled={isDisabled}
      />
    </div>
  );
}
