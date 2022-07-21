import './index.css'

const GameCard = props => {
  const {eachChoice, onClickChoice} = props

  const {id, imageUrl} = eachChoice

  const onClickButton = () => {
    onClickChoice(id, imageUrl)
  }

  return (
    <li className="list-rps">
      <button type="button" className="rps-button" onClick={onClickButton}>
        <img
          src={imageUrl}
          alt={id}
          className="choice-img"
          data-testid={`${id.toLowerCase()}Button `}
        />
      </button>
    </li>
  )
}

export default GameCard
