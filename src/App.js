import { Jogo } from "./components/Jogo";
import { Letras } from "./components/Letras";
import { Chute } from "./components/Chute";

import palavras from "./palavras";

import "./reset.css";
import { useState, useEffect } from "react";

export default function App() {
  const [arrayWord, setArrayWord] = useState([]);
  const [hiddenWord, setHiddenWord] = useState([]);
  const [isDisabled, setIsDisabled] = useState(true);
  const [errors, setErrors] = useState(0);

  function handleStartGame() {
    setIsDisabled(false);    
    handleChooseWord();
  }

  function handleChooseWord() {
    let index = Math.floor(Math.random() * palavras.length);

    let arrayWord = [...palavras[index]];
    setArrayWord(arrayWord);

    let hiddenArr = arrayWord.map((v) => "_");
    setHiddenWord(hiddenArr);
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
      />
      <Chute 
        disabled={isDisabled}
      />
    </div>
  );
}
