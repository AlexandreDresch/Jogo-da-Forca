import './styles.css';

export function Letra ({letter, disabled}) {
    return (
        <button className={disabled ? 'letter-container-disabled' : 'letter-container-enabled'} disabled={disabled}>
            {letter}
        </button>
    )
}