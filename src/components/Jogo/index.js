import "./styles.css";

// Jogo (imagem da forca, botão de iniciar, palavra do jogo)

export function Jogo({ start, photo, hiddenWord, resultColor }) {

  return (
    <div className="game-container">
      <div className="image-container">
        <img
          src={require(`../../assets/forca${photo}.png`)}
          className="game-image"
          alt="game visual status"
        />
      </div>

      <div className="button-word-container">
        <div className="button-container">
          <button className="start-button" onClick={start}>
            Escolher Palavra
          </button>
        </div>
        {hiddenWord !== undefined && (
          <div className="hidden-word-container">
            {hiddenWord.map((letter, index) => (
              <span key={index} style={{color: resultColor}}>{letter.toUpperCase()}</span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
