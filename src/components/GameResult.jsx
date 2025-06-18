import PropTypes from 'prop-types';
import './GameResult.css';

const GameResult = ({ player1Name, player2Name, player1Value, player2Value, show, onClose }) => {
  if (!show) return null;
  let resultLine1 = '';
  let resultLine2 = '';
  if (player1Value > player2Value) {
    resultLine1 = `${player1Name} Kazandı! 🎉`;
    resultLine2 = `(${player1Value} > ${player2Value})`;
  } else if (player2Value > player1Value) {
    resultLine1 = `${player2Name} Kazandı! 🎉`;
    resultLine2 = `(${player2Value} > ${player1Value})`;
  } else {
    resultLine1 = `Berabere! 🤝`;
    resultLine2 = `(${player1Value} = ${player2Value})`;
  }
    return (
    <div className="result-popup-overlay">
      <div className="result-popup">
        <button className="close-popup" onClick={onClose} aria-label="Kapat">×</button>
        <div>{resultLine1}</div>
        <div>{resultLine2}</div>
      </div>
      </div>
    );
};

GameResult.propTypes = {
  player1Name: PropTypes.string.isRequired,
  player2Name: PropTypes.string.isRequired,
  player1Value: PropTypes.number.isRequired,
  player2Value: PropTypes.number.isRequired,
  show: PropTypes.bool,
  onClose: PropTypes.func
};

export default GameResult; 