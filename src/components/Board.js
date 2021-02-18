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
  const winner = calculateWinner(squares)

  return (
    <div>
      <div className="status">{getStatusMessage({nextPlayer: isNext, winner})}</div>
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

function getStatusMessage({nextPlayer, winner}) {
  return (winner) 
    ? `Winner: ${winner}`
    : getNextPlayerMessage(nextPlayer)
}

function getNextPlayerMessage(nextPlayer) {
  return `Next player: ${nextPlayer}`
}

function renderSquare(value, clickHandler) {
  return <Square 
    value={value} 
    onClick={clickHandler}
  />;
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}