// components/Dice.jsx
import React from 'react';

const Dice = ({ value, isRolling }) => {
  const diceImages = {
    1: '/images/dice1.png',
    2: '/images/dice2.png',
    3: '/images/dice3.png',
    4: '/images/dice4.png',
    5: '/images/dice5.png',
    6: '/images/dice6.png'
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