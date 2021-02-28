import { useState } from 'react';

import {
  calculateWinner,
  getInitialHistory,
  getConfig,
  getUpdateGameFn,
} from './Game.helpers';

export function useGame() {
  const [moveTo, setMove] = useState(undefined);
  const [history, setHistory] = useState(getInitialHistory());

  const { squares, nextPlayer, currentMove } = getConfig({ history, moveTo });

  const winConfig = calculateWinner(squares);

  const updateGame = getUpdateGameFn({
    hasWinner: !!winConfig.winner,
    history,
    currentMove,
    squares,
    nextPlayer,
    setHistory,
    setMove,
  });

  return {
    squares,
    updateGame,
    nextPlayer,
    history,
    setMove,
    winConfig,
  };
}
