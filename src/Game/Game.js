import React from 'react';

import './Game.css';
import { useGame } from './useGame';
import { Board } from './Board';
import { Moves } from './Moves';
import { Status } from './Status';
import { calculateWinner } from './Game.helpers';

export function Game() {
  const { squares, handleClick, nextPlayer, history, setMove } = useGame();

  const { winner, line } = calculateWinner(squares);

  return (
    <div className="game">
      <div className="game-board">
        <Board
          config={{
            squares,
            handleClick: winner ? () => undefined : handleClick,
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
