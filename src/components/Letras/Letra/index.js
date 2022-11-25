import { useState } from 'react';
import './styles.css';

export function Letra ({letter, disabled, getLetter}) {
    const [innerDisable, setInnerDisable] = useState(false)

    function buttonValues() {
        getLetter();
        setInnerDisable(true);
    }

    return (
        <button 
            className={(disabled || innerDisable) ? 'letter-container-disabled' : 'letter-container-enabled'} 
            disabled={(disabled || innerDisable)} 
            onClick={buttonValues}
        >
            {letter.toUpperCase()}
        </button>
    )
}