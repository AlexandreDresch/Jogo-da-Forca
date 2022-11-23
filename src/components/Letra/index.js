import './styles.css';

export function Letra ({letter}) {
    return (
        <div className='letter-container'>
            <p>{letter}</p>
        </div>
    )
}