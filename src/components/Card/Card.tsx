
interface Props {
    emoji: string
}

function Card({ emoji }: Props) {
  return (
    <button type="button">{emoji}</button>
  )
}

export default Card;
