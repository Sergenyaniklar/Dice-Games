// components/Button.jsx
import React from 'react';

const Button = ({ children, onClick, disabled }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className="game-button"
    >
      {children}
    </button>
  );
};

export default Button;