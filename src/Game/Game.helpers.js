import { PLAYERS, LINES } from './shared';

export function getUpdateGameFn({
  hasWinner,
  history,
  currentMove,
  squares,
  nextPlayer,
  setHistory,
  setMove,
}) {
  if (hasWinner) {
    return () => undefined;
  }
  return (square) => () => {
    const copyOfHistory = history.slice(0, currentMove + 1);
    const newBoardStatus = {
      squares: updateSquares({ squares, index: square, value: nextPlayer }),
      nextPlayer:
        nextPlayer === PLAYERS.PLAYER1 ? PLAYERS.PLAYER2 : PLAYERS.PLAYER1,
    };
    setHistory(copyOfHistory.concat(newBoardStatus));
    setMove(undefined);
  };
}

export function getInitialHistory() {
  const squares = Array(9).fill(null);
  const nextPlayer = PLAYERS.PLAYER1;
  return [{ squares, nextPlayer }];
}

export function getCurrentMove({ moveTo, history }) {
  return moveTo !== undefined ? moveTo : history.length - 1;
}

export function getConfig({ history, moveTo }) {
  const currentMove = getCurrentMove({ moveTo, history });
  return { ...history[currentMove], currentMove };
}

export function updateSquares({
  squares = [],
  index = 0,
  value = PLAYERS.PLAYER1,
}) {
  const newSquares = squares.slice();
  newSquares[index] = value;
  return newSquares;
}

export function getWinnerConfig(squares) {
  const winnerConfig = {
    winner: null,
    line: null,
  };

  LINES.some((line) => {
    const [a, b, c] = line;
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      winnerConfig.winner = squares[a];
      winnerConfig.line = [a, b, c];
      return true;
    }
    return false;
  });
  return winnerConfig;
}

export const hasDraw = (squares) => squares.every((value) => !!value);

export function calculateWinner(squares) {
  const winnerConfig = getWinnerConfig(squares);
  const hasWinner = !!winnerConfig.winner;
  if (hasWinner) {
    return winnerConfig;
  }

  if (hasDraw(squares)) {
    return {
      winner: 'DRAW',
      line: null,
    };
  }

  return {
    winner: null,
    line: null,
  };
}
