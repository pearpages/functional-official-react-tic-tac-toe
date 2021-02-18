import React, { useState } from 'react'

import { Square } from './Square'

const X = 'X'
const O = 'O'

export function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null))
  const [isNext, setIsNext] = useState(X)

  const handleClick = (square) => () => {
    const newSquares = squares.slice()
    newSquares[square] = isNext
    setIsNext((isNext === X ? O : X))
    setSquares(newSquares)
  }

  const renderSquareWithValueAndClickHandler = (square) => renderSquare(squares[square], handleClick(square))

  return (
    <div>
      <div className="status">{`Next player: ${isNext}`}</div>
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
