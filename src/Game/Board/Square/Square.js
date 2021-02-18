import React from 'react'

import './Square.css'
export function Square({onClick, value, isHighlighted}) {
  return (
    <button className={`square ${isHighlighted ? 'square--highlighted' : ''}`} onClick={onClick}>
      {value}
    </button>
  );
}

Square.renderSquare = ({value, clickHandler, isHighlighted}) => {
  return <Square 
    value={value} 
    onClick={clickHandler}
    isHighlighted={isHighlighted}
  />;
}
