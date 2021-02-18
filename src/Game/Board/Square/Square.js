import React from 'react'

import './Square.css'
export function Square({onClick, value}) {
  return (
    <button className="square" onClick={onClick}>
      {value}
    </button>
  );
}

Square.renderSquare = ({value, clickHandler}) => {
  return <Square 
    value={value} 
    onClick={clickHandler}
  />;
}
