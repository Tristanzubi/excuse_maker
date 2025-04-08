import './Card.css'

interface Props {
    emoji: string;
}


function Card({ emoji }: Props) {
    return (
        <button type="button"><p>{emoji}</p></button>
    )
}

export default Card