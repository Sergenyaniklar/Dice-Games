// components/PlayerInfo.jsx
import React from 'react';

const PlayerInfo = ({ name, onNameChange, isPlayer }) => {
  return (
    <div className="player-info">
      {isPlayer ? (
        <input
          type="text"
          value={name}
          onChange={(e) => onNameChange(e.target.value)}
          className="player-name-input"
          placeholder="Enter your name"
          maxLength={20}
        />
      ) : (
        <div className="player-name">{name}</div>
      )}
    </div>
  );
};

export default PlayerInfo;