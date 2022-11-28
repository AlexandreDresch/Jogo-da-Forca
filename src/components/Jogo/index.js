import "./styles.css";

export function Jogo({ start, photo, hiddenWord, arrayWord, resultColor }) {
  return (
    <div className="game-container">
      <div className="image-container">
        <img
          src={require(`../../assets/forca${photo}.png`)}
          className="game-image"
          alt="game visual status"
          data-test="game-image"
        />
      </div>

      <div className="button-word-container">
        <div className="button-container">
          <button
            className="start-button"
            onClick={start}
            data-test="choose-word"
          >
            Escolher Palavra
          </button>
        </div>
        {hiddenWord !== undefined && (
          <div
            className="hidden-word-container"
            data-test="word"
            data-answer={arrayWord.join("")}
          >
            {hiddenWord.map((letter, index) => (
              <span key={index} style={{ color: resultColor }}>
                {letter}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
