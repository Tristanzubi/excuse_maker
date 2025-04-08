
import './Card.css'

interface Props {
    emoji: string;
    getExcuse: (index: number) => void;
    index: number;
    

    
}


function Card({ emoji, getExcuse, index }: Props) {
    return (

        <button type="button" onClick={() => getExcuse(index)} key={emoji}>
            <p>{emoji}</p>
        </button>
    )
}

export default Card;

