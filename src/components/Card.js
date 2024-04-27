import React, { useState } from 'react';
import './css/Card.css';    

const Card = ({ name, desc }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className={`card ${isFlipped ? 'flipped' : ''}`} onClick={handleClick}>
      <div className="front">
        
        <h2>{name}</h2>
      </div>
      <div className="back">
        <p>{desc}</p>
      </div>
    </div>
  );
};

export default Card;