// components/Dice.jsx
import React from 'react';

const Dice = ({ value, isRolling }) => {
  const diceImages = {
    1: '../public/images/dice1.png',
    2: '../public/images/dice2.png',
    3: '../public/images/dice3.png',
    4: '../public/images/dice4.png',
    5: '../public/images/dice5.png',
    6: '../public/images/dice6.png',
  };

  return (
    <div className={`dice ${isRolling ? 'rolling' : ''}`}>
      <img 
        src={diceImages[value]} 
        alt={`Dice showing ${value}`}
        width="100"
        height="100"
      />
    </div>
  );
};

export default Dice;