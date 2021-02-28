import React from 'react';

import './Game.css';
import { useGame } from './useGame';
import { Board } from './Board';
import { Moves } from './Moves';
import { Status } from './Status';

export function Game() {
  const {
    squares,
    updateGame,
    nextPlayer,
    history,
    setMove,
    winConfig: { winner, line },
  } = useGame();

  return (
    <div className="game">
      <div className="game-board">
        <Board
          config={{
            squares,
            handleClick: updateGame,
            line,
          }}
        />
      </div>
      <div className="game-info">
        <Status nextPlayer={nextPlayer} winner={winner} />
        <Moves history={history} setMove={setMove} />
      </div>
    </div>
  );
}
