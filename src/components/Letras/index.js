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

//Letras (conjunto de botões com as letras)

export function Letras({disabled, checkLetter}) {
  return (
    <div className="main-letters-container">
      <div className="letters-container">
        {alfabeto.map((item, index) => (
          <Letra 
            key={index}
            letter={item}  
            disabled={disabled} 
            getLetter={() => checkLetter(item)}
          />
        ))}
      </div>
    </div>
  );
}
