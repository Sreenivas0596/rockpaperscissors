import {Component} from 'react'

import GameRulesView from '../GameRulesView'
import GameCard from '../GameCard'
import './index.css'

class PlayingView extends Component {
  state = {
    choiceImageUrl: '',
    isGameRunning: false,
    randomImageUrl: '',
    count: 0,
  }

  onClickPlayAgain = () => {
    this.setState({
      isGameRunning: false,
      randomImageUrl: '',
      count: 0,
      choiceImageUrl: '',
    })
  }

  onClickChoice = (id, imageUrl) => {
    const {choicesList} = this.props
    const randomImage =
      choicesList[Math.floor(Math.random() * choicesList.length)]

    console.log(randomImage.imageUrl)

    let finalResult

    if (id === 'ROCK' && randomImage.id === 'ROCK') {
      finalResult = 'IT IS DRAW'
    } else if (id === 'ROCK' && randomImage.id === 'SCISSORS') {
      finalResult = 'YOU W0N'
    } else if (id === 'ROCK' && randomImage.id === 'PAPER') {
      finalResult = 'YOU LOSE'
    } else if (id === 'PAPER' && randomImage.id === 'PAPER') {
      finalResult = 'IT IS DRAW'
    } else if (id === 'PAPER' && randomImage.id === 'SCISSORS') {
      finalResult = 'YOU LOSE'
    } else if (id === 'PAPER' && randomImage.id === 'ROCK') {
      finalResult = 'YOU W0N'
    } else if (id === 'SCISSORS' && randomImage.id === 'SCISSORS') {
      finalResult = 'IT IS DRAW'
    } else if (id === 'SCISSORS' && randomImage.id === 'PAPER') {
      finalResult = 'YOU W0N'
    } else if (id === 'SCISSORS' && randomImage.id === 'ROCK') {
      finalResult = 'YOU LOSE'
    }

    switch (finalResult) {
      case 'YOU W0N':
        this.setState(prevState => ({
          choiceImageUrl: imageUrl,
          randomImageUrl: randomImage.imageUrl,
          count: prevState.count + 1,
          isGameRunning: true,
          finalResult,
        }))

        break

      case 'YOU LOSE':
        this.setState(prevState => ({
          choiceImageUrl: imageUrl,
          randomImageUrl: randomImage.imageUrl,
          count: prevState.count - 1,
          finalResult,
          isGameRunning: true,
        }))
        break
      case 'IT IS DRAW':
        this.setState({
          choiceImageUrl: imageUrl,
          randomImageUrl: randomImage.imageUrl,
          isGameRunning: true,
          finalResult,
        })
        break
      default:
        break
    }
  }

  renderGameResultView = () => {
    const {choiceImageUrl, randomImageUrl, finalResult} = this.state

    return (
      <div className="game-result-container">
        <div className="image-container">
          <img src={choiceImageUrl} alt="your choice" className="choice-img" />
          <img
            src={randomImageUrl}
            alt="opponent choice"
            className="choice-img"
          />
        </div>
        <p>{finalResult}</p>
        <button
          type="button"
          onClick={this.onClickPlayAgain}
          className="rules-button"
        >
          PLAY AGAIN
        </button>
      </div>
    )
  }

  renderHomeView = () => {
    const {choicesList} = this.props
    return (
      <div>
        <ul className="list-container">
          {choicesList.map(eachChoice => (
            <GameCard
              key={eachChoice.id}
              eachChoice={eachChoice}
              onClickChoice={this.onClickChoice}
            />
          ))}
        </ul>
      </div>
    )
  }

  render() {
    const {isGameRunning, count} = this.state

    return (
      <div className="rps-bg-container">
        <div className="rps-card-container">
          <div>
            <h1 className="rps-heading">
              ROCK <br />
              PAPER <br />
              SCISSORS <br />
            </h1>
          </div>
          <div className="score-container">
            <div>
              <p>Score</p>
              <p className="count">{count}</p>
            </div>
          </div>
        </div>

        {isGameRunning ? this.renderGameResultView() : this.renderHomeView()}

        <GameRulesView />
      </div>
    )
  }
}

export default PlayingView
