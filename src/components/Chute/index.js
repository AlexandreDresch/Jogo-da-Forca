import "./styles.css";

export function Chute({disabled, inputValue, setInputValue, checkInputWin}) {

  function sendInputData(){
    checkInputWin()
  }

  return (
    <div className="try-container">
      <form onSubmit={() => {}}>
        <label>
          Já sei a palavra!
          <input 
            type="text"
            value={inputValue}
            disabled={disabled}
            onChange={(e) => setInputValue(e.target.value)}
            data-test='guess-input'
          />
        </label>
        <button 
          type="submit" 
          disabled={disabled} 
          onClick={sendInputData}
          data-test='guess-button'
        >
          Chutar
        </button>
      </form>
    </div>
  );
}
