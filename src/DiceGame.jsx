import { useState, useEffect } from 'react';
import Player from './components/Player';
import GameResult from './components/GameResult';
import './DiceGame.css';

const DiceGame = () => {
  const [player1Name, setPlayer1Name] = useState('Player 1');
  const [player2Name, setPlayer2Name] = useState('Player 2');
  const [diceValues, setDiceValues] = useState([1, 1]);
  const [isRolling, setIsRolling] = useState(false);
  const [showResult, setShowResult] = useState(false);

  const rollDice = () => {
    if (isRolling) return;
    setIsRolling(true);
    setShowResult(false);
    const rolls = 30;
    let currentRoll = 0;
    const rollInterval = setInterval(() => {
      currentRoll++;
      const newPlayer1Value = Math.floor(Math.random() * 6) + 1;
      const newPlayer2Value = Math.floor(Math.random() * 6) + 1;
      setDiceValues([newPlayer1Value, newPlayer2Value]);
      if (currentRoll >= rolls) {
        clearInterval(rollInterval);
        setIsRolling(false);
        setTimeout(() => {
          if (diceValues[0] !== diceValues[1]) setShowResult(true);
        }, 200);
      }
    }, 100);
  };

  useEffect(() => {
    if (!isRolling && diceValues[0] !== diceValues[1]) {
      setShowResult(true);
    }
  }, [isRolling, diceValues]);

  return (
    <div className="dice-game">
      <h1>Dice Game</h1>
      <div className="players-container">
        <Player
          name={player1Name}
          diceValue={diceValues[0]}
          isRolling={isRolling}
          onNameChange={setPlayer1Name}
        />
        <Player
          name={player2Name}
          diceValue={diceValues[1]}
          isRolling={isRolling}
          onNameChange={setPlayer2Name}
        />
      </div>
        <GameResult
          player1Name={player1Name}
          player2Name={player2Name}
          player1Value={diceValues[0]}
          player2Value={diceValues[1]}
        show={showResult && !isRolling && diceValues[0] !== diceValues[1]}
        onClose={() => setShowResult(false)}
        />
      <button 
        className="roll-button" 
        onClick={rollDice}
        disabled={isRolling}
      >
        {isRolling ? 'Zarlar Atılıyor...' : 'Zar At'}
      </button>
    </div>
  );
};

export default DiceGame; 