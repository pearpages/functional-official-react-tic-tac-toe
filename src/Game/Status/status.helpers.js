export function getStatusMessage({ nextPlayer, winner }) {
  if ((winner || '').toLowerCase() === 'draw') {
    return winner;
  } else if (winner) {
    return `Winner: ${winner}`;
  }
  return getNextPlayerMessage(nextPlayer);
}

export function getNextPlayerMessage(nextPlayer) {
  return `Next player: ${nextPlayer}`;
}
