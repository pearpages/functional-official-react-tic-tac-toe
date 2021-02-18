import React from 'react'

import { Square } from './Square'

export function Board({config: {squares, handleClick}}) {

  const renderSquareWithValueAndClickHandler = (square) => Square.renderSquare(squares[square], handleClick(square))

  return (
    <div>
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
