// App.jsx
import React from 'react';
import DiceGame from './components/DiceGame';
import './styles/styles.css';

const App = () => {
  return (
    <div className="game-container">
      <DiceGame />
    </div>
  );
};

export default App;