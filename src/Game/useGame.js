import { useState } from 'react';

import { calculateWinner } from './Game.helpers';
import { PLAYERS } from './shared';

function getInitialHistory() {
  const squares = Array(9).fill(null);
  const nextPlayer = PLAYERS.PLAYER1;
  return [{ squares, nextPlayer }];
}

function getCurrentMove({ moveTo, history }) {
  return moveTo !== undefined ? moveTo : history.length - 1;
}

function getConfig({ history, moveTo }) {
  const currentMove = getCurrentMove({ moveTo, history });
  return { ...history[currentMove], currentMove };
}

export function useGame() {
  const [moveTo, setMove] = useState(undefined);
  const [history, setHistory] = useState(getInitialHistory());

  const { squares, nextPlayer, currentMove } = getConfig({ history, moveTo });

  const win = calculateWinner(squares);

  const handleClick = (square) => () => {
    const newSquares = squares.slice();
    newSquares[square] = nextPlayer;
    const copyOfHistory = history.slice(0, currentMove + 1);
    const newBoardStatus = {
      squares: newSquares,
      nextPlayer:
        nextPlayer === PLAYERS.PLAYER1 ? PLAYERS.PLAYER2 : PLAYERS.PLAYER1,
    };
    setHistory(copyOfHistory.concat(newBoardStatus));
    setMove(undefined);
  };

  return {
    squares,
    handleClick: win.winner ? () => undefined : handleClick,
    nextPlayer,
    history,
    setMove,
    win,
  };
}
