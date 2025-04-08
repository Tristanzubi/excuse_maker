
import './Card.css'

interface Props {
    emoji: string;
    getRandomItem: () => string;
    index: number;
    

    
}


function Card({ emoji, getRandomItem, index }: Props) {
    return (
        <button type="button" onClick={getRandomItem} key={emoji}><p>{emoji}</p></button>
    )
}

export default Card

