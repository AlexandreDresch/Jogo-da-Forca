import forca0 from '../../assets/forca0.png';
import forca1 from '../../assets/forca1.png';
import forca2 from '../../assets/forca2.png';
import forca3 from '../../assets/forca3.png';
import forca4 from '../../assets/forca4.png';
import forca5 from '../../assets/forca5.png';
import forca6 from '../../assets/forca6.png';

import './styles.css';

// Jogo (imagem da forca, botão de iniciar, palavra do jogo)

export function Jogo () {
    return (
        <div className='game-container'>
            <div className='image-container'>
                <img src={forca0} className='game-image' alt="game visual status" />
            </div>

            <div className='button-container'>
                <button className='start-button'>
                    Escolher Palavra
                </button>
            </div>
        </div>
    )
}