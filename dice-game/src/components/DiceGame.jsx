// components/DiceGame.jsx
import React, { useState } from 'react';
import Dice from './Dice';
import PlayerInfo from './PlayerInfo';
import Button from './Button';

const DiceGame = () => {
  const [playerName, setPlayerName] = useState('Player 1');
  const [playerDice, setPlayerDice] = useState(4);
  const [computerDice, setComputerDice] = useState(4);
  const [isRolling, setIsRolling] = useState(false);
  const [gameResult, setGameResult] = useState(null);
  const [buttonText, setButtonText] = useState('Roll!');

  const rollDice = () => {
    setIsRolling(true);
    setButtonText('Rolling...');
    setGameResult(null);
    
    const rollInterval = setInterval(() => {
      setPlayerDice(Math.floor(Math.random() * 6) + 1);
      setComputerDice(Math.floor(Math.random() * 6) + 1);
    }, 100);

    setTimeout(() => {
      clearInterval(rollInterval);
      const finalPlayerRoll = Math.floor(Math.random() * 6) + 1;
      const finalComputerRoll = Math.floor(Math.random() * 6) + 1;
      
      setPlayerDice(finalPlayerRoll);
      setComputerDice(finalComputerRoll);
      setIsRolling(false);

      if (finalPlayerRoll > finalComputerRoll) {
        setGameResult('You Win! 🎉');
        setButtonText('Play Again');
      } else if (finalPlayerRoll < finalComputerRoll) {
        setGameResult('Computer Wins! 🤖');
        setButtonText('Try Again');
      } else {
        setGameResult('Draw! 🤝');
        setButtonText('Roll Again');
      }
    }, 3000);
  };

  return (
    <div className="game-board">
      <h1 className="game-title">Dice Game 🎲</h1>
      <div className="players-container">
        <PlayerInfo 
          name={playerName}
          onNameChange={setPlayerName}
          isPlayer={true}
        />
        <PlayerInfo 
          name="Computer"
          isPlayer={false}
        />
      </div>
      <div className="dice-container">
        <Dice value={playerDice} isRolling={isRolling} />
        <Dice value={computerDice} isRolling={isRolling} />
      </div>
      {gameResult && (
        <div className="game-result">
          {gameResult}
        </div>
      )}
      <Button onClick={rollDice} disabled={isRolling}>
        {buttonText}
      </Button>
    </div>
  );
};

export default DiceGame;