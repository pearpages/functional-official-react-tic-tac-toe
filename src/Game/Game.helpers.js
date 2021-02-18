export function getStatusMessage({nextPlayer, winner}) {
  return (winner) 
    ? `Winner: ${winner}`
    : getNextPlayerMessage(nextPlayer)
}

export function getNextPlayerMessage(nextPlayer) {
  return `Next player: ${nextPlayer}`
}

export function calculateWinner(squares) {
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

  lines.forEach((line) => {
    const [a, b, c] = line;
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return {
        winner: squares[a],
        line
      }
    }    
  })
    
  if (squares.every((value) => !!value)) {
    return {
      winner: 'DRAW',
      line: null
    }
  }

  return {
    winner: null,
    line: null
  };
}
