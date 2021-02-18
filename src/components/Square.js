import React from 'react'

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
