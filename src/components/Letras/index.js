import { Letra } from "./Letra";

import "./styles.css";

const alfabeto = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

export function Letras({ disabled, checkLetter, checkUsed }) {
  return (
    <div className="main-letters-container">
      <div className="letters-container">
        {alfabeto.map((item, index) => (
          <Letra
            key={index}
            letter={item}
            disabled={disabled}
            checkUsed={checkUsed}
            getLetter={() => checkLetter(item)}
          />
        ))}
      </div>
    </div>
  );
}
