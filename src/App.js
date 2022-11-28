import { useEffect, useState } from "react";

import { Jogo } from "./components/Jogo";
import { Letras } from "./components/Letras";
import { Chute } from "./components/Chute";

import palavras from "./palavras";

import "./reset.css";

export default function App() {
  const [arrayWord, setArrayWord] = useState([]);
  const [hiddenWord, setHiddenWord] = useState([]);
  const [isDisabled, setIsDisabled] = useState(true);
  const [errors, setErrors] = useState(0);
  const [inputValue, setInputValue] = useState("");
  const [selectedLettersArr, setSelectedLettersArr] = useState([]);
  const [resultColor, setResultColor] = useState("#000000");
  const [endGame, setEndGame] = useState(false);

  function handleStartGame() {
    setIsDisabled(false);
    setArrayWord([]);
    setHiddenWord([]);
    setErrors(0);
    setSelectedLettersArr([]);
    setResultColor("#000000");
    setEndGame(false);
    setInputValue("");

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

    if (arrayWord.includes(letter)) {
      let indexes = arrayWord
        .map((e, i) => (e === letter ? i : ""))
        .filter(String);
      let changedArr = [...hiddenWord];

      for (let i = 0; i < indexes.length; i++) {
        changedArr[indexes[i]] = letter;
      }
      
      setHiddenWord(changedArr);
      checkWin();
    } else {
      checkErrors();
    }
  }

  function checkErrors() {
    checkWin();
    if (errors < 5) {
      setErrors(errors + 1);
      console.log(errors);
    } else {
      setErrors(errors + 1);
      gameOver();
    }
  }

  function checkWin() {
    if (arrayWord.length > 0) {
      if (hiddenWord.join("") === arrayWord.join("") && endGame === false) {
        setResultColor("#27AE60");
        setIsDisabled(true);
      }
    }
  }

  function checkInputWin() {
    if (inputValue.length > 0) {
      if (inputValue === arrayWord.join("")) {
        setHiddenWord(arrayWord);
        setResultColor("#27AE60");
        setIsDisabled(true);
      } else {
        gameOver();
      }
    }
  }

  function gameOver() {
    setEndGame(true);
    setErrors(6);
    setIsDisabled(true);
    setHiddenWord(arrayWord);
    setResultColor("#FF0000");
  }

  useEffect(() => {
    checkWin();
  });

  return (
    <div className="App">
      <Jogo
        start={handleStartGame}
        photo={errors}
        arrayWord={arrayWord}
        hiddenWord={hiddenWord}
        resultColor={resultColor}
      />
      <Letras
        disabled={isDisabled}
        checkUsed={selectedLettersArr}
        checkLetter={checkLetter}
      />
      <Chute
        disabled={isDisabled}
        inputValue={inputValue}
        setInputValue={setInputValue}
        checkInputWin={checkInputWin}
      />
    </div>
  );
}
