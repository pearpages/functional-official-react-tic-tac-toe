import React, { useState } from 'react'

import { Square } from './Square'

const status = 'Next player: X';

export function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null))

  const handleClick = (i) => () => {
    const newSquares = squares.slice()
    newSquares[i] = 'X'
    setSquares(newSquares)
  }

  const renderSquareWithValueAndClickHandler = (i) => renderSquare(squares[i], handleClick(i))

  return (
    <div>
      <div className="status">{status}</div>
      <div className="board-row">
        {renderSquareWithValueAndClickHandler(0)}
        {renderSquareWithValueAndClickHandler(1)}
        {renderSquareWithValueAndClickHandler(2)}
      </div>
      <div className="board-row">
        {renderSquareWithValueAndClickHandler(3)}
        {renderSquareWithValueAndClickHandler(4)}
        {renderSquareWithValueAndClickHandler(5)}
      </div>
      <div className="board-row">
        {renderSquareWithValueAndClickHandler(6)}
        {renderSquareWithValueAndClickHandler(7)}
        {renderSquareWithValueAndClickHandler(8)}
      </div>
    </div>
  );
}

function renderSquare(value, clickHandler) {
  return <Square 
    value={value} 
    onClick={clickHandler}
  />;
}
