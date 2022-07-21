import Popup from 'reactjs-popup'
import {RiCloseLine} from 'react-icons/ri'
import './index.css'

const GameRulesView = () => (
  <div className="pop-up-container">
    <Popup
      modal
      trigger={
        <div>
          <button type="button" className="rules-button">
            Rules
          </button>
        </div>
      }
    >
      {close => (
        <div className="rules-pop-container">
          <button
            type="button"
            onClick={() => close()}
            className="cross-button"
          >
            <RiCloseLine />
          </button>
          <div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
              alt="rules"
              className="rules-img"
            />
          </div>
        </div>
      )}
    </Popup>
  </div>
)

export default GameRulesView
