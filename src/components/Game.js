import React, { useState } from 'react'

import { Board } from './Board'
import { getStatusMessage, calculateWinner } from './helpers'

const X = 'X'
const O = 'O'

export function Game() {
  const [move, setMove] = useState(undefined)
  const [history, setHistory] = useState([{ squares: Array(9).fill(null), isNext: X }])

  const currentMove = move !== undefined ? move : (history.length - 1)
  const {squares, isNext} = history[currentMove]

  const handleClick = (square) => () => {
    const newSquares = squares.slice()
    newSquares[square] = isNext
    setHistory(history.slice(0, currentMove + 1).concat({squares: newSquares, isNext: (isNext === X ? O : X)}))
    setMove(undefined)
  }

  const winner = calculateWinner(squares)

  return (
    <div className="game">
      <div className="game-board">
        <Board config={{
          squares,
          handleClick: winner ? () => undefined : handleClick,
        }} />
      </div>
      <div className="game-info">
        <div className="status">{getStatusMessage({nextPlayer: isNext, winner})}</div>
        <ol>{getMoves(history, setMove)}</ol>
      </div>
    </div>
  );
}

function getMoves(history, jumpTo) {
  return history.map((_, move) => {
    const desc = move ?
      'Go to move #' + move :
      'Go to game start';
    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{desc}</button>
      </li>
    );
  });
}