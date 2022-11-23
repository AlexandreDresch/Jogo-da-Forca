import "./styles.css";

//Chute (input e botão de chute)

export function Chute() {
  return (
    <div className="try-container">
      <form>
        <label>
          Já sei a palavra!
          <input type="text" />
        </label>
        <button>Chutar</button>
      </form>
    </div>
  );
}
