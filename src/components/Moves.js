import React from 'react'

export function Moves({ history, setMove }) {
  return (<ol>{history.map((_, move) => {
    return (
      <li key={move}>
        <button onClick={() => setMove(move)}>{getDescription(move)}</button>
      </li>
    );
  })}</ol>)
}

function getDescription(move) {
  return (move
    ? 'Go to move #' + move
    : 'Go to game start')
}