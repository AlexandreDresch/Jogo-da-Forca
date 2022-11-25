import { useState } from "react";
import "./styles.css";

//Chute (input e botão de chute)

export function Chute({disabled}) {

  const [ tryW, setTryW ] = useState()

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <div className="try-container">
      <form onSubmit={() => {}}>
        <label>
          Já sei a palavra!
          <input 
            type="text"
            value={tryW}
            disabled={disabled}
            onChange={(e) => handleSubmit(e.target.value)}
          />
        </label>
        <button type="submit" disabled={disabled}>Chutar</button>
      </form>
    </div>
  );
}
