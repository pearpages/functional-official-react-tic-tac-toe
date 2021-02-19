import React from 'react'

import './Board.css'
import { Square } from './Square'

export function Board({ config: { squares, handleClick, line } }) {

  const isHighlighted = (square) => (line || []).includes(square)

  const renderSquareWithValueAndClickHandler = (square) => Square.renderSquare({
    value: squares[square],
    clickHandler: squares[square] ? () => undefined : handleClick(square),
    isHighlighted: isHighlighted(square)
  })

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
