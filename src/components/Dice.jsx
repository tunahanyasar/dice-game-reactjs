import PropTypes from 'prop-types';
import './Dice.css';
import dice1 from '../assets/images/dice1.png';
import dice2 from '../assets/images/dice2.png';
import dice3 from '../assets/images/dice3.png';
import dice4 from '../assets/images/dice4.png';
import dice5 from '../assets/images/dice5.png';
import dice6 from '../assets/images/dice6.png';

const Dice = ({ value, isRolling }) => {
  const diceImages = [dice1, dice2, dice3, dice4, dice5, dice6];

  return (
    <div className={`dice ${isRolling ? 'rolling' : ''}`}>
      <img 
        src={diceImages[value - 1]} 
        alt={`Dice showing ${value}`}
        className="dice-image"
      />
    </div>
  );
};

Dice.propTypes = {
  value: PropTypes.number.isRequired,
  isRolling: PropTypes.bool.isRequired
};

export default Dice; 