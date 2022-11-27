
import './styles.css';

export function Letra ({letter, disabled, getLetter, checkUsed}) {
    return (
        <button 
            className={(disabled || checkUsed.includes(letter)) ? 'letter-container-disabled' : 'letter-container-enabled'} 
            disabled={(disabled || checkUsed.includes(letter))} 
            onClick={getLetter}
            data-test='letter'
        >
            {letter.toUpperCase()}
        </button>
    )
}