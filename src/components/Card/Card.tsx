
import './Card.css'

interface Props {
    emoji: string;
    getRandomItem: () => string;
    index: number;
    getExcuse: (index: number) => void;
    

    
}


function Card({ emoji, getRandomItem, index }: Props) {
    return (
        <button type="button" onClick={getRandomItem} key={index}><p>{emoji}</p></button>
    )
}

export default Card

