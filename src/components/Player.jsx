import PropTypes from 'prop-types';
import Dice from './Dice';
import './Player.css';

const Player = ({ name, diceValue, isRolling, onNameChange }) => {
  return (
    <div className="player">
      <h2 className="player-title">{name}</h2>
      <input
        type="text"
        value={name}
        onChange={(e) => onNameChange(e.target.value)}
        placeholder="Oyuncu Adı"
        disabled={isRolling}
        className="player-name-input"
      />
      <Dice value={diceValue} isRolling={isRolling} />
    </div>
  );
};

Player.propTypes = {
  name: PropTypes.string.isRequired,
  diceValue: PropTypes.number.isRequired,
  isRolling: PropTypes.bool.isRequired,
  onNameChange: PropTypes.func.isRequired
};

export default Player; 