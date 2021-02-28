import React from 'react'
import PropTypes from 'prop-types'

import './Board.css'
import { makeRenderSquareWithValueAndClickHandler } from './board.helpers'

export function Board({ config, boardRenderer }) {

  const renderSquareWithValueAndClickHandler = boardRenderer(config)

  return (
    <div data-testid="Board">
      <div className={Board.rowClassName}>
        {renderSquareWithValueAndClickHandler(0)}
        {renderSquareWithValueAndClickHandler(1)}
        {renderSquareWithValueAndClickHandler(2)}
      </div>
      <div className={Board.rowClassName}>
        {renderSquareWithValueAndClickHandler(3)}
        {renderSquareWithValueAndClickHandler(4)}
        {renderSquareWithValueAndClickHandler(5)}
      </div>
      <div className={Board.rowClassName}>
        {renderSquareWithValueAndClickHandler(6)}
        {renderSquareWithValueAndClickHandler(7)}
        {renderSquareWithValueAndClickHandler(8)}
      </div>
    </div>
  );
}

Board.rowClassName = 'board-row'

const configShape = {
  squares: PropTypes.array.isRequired,
  handleClick: PropTypes.func.isRequired,
  line: PropTypes.array
}

Board.propTypes = {
  config: PropTypes.shape(configShape).isRequired,
  boardRenderer: PropTypes.func.isRequired
}

Board.defaultProps = {
  boardRenderer: makeRenderSquareWithValueAndClickHandler
}
