import React from 'react'
import PropTypes from 'prop-types'

import './Square.css'

export function Square({onClick, value, isHighlighted}) {
  return (
    <button className={`square ${isHighlighted ? Square.HIGHLIGHTED : ''}`} onClick={onClick}>
      {value}
    </button>
  );
}

Square.HIGHLIGHTED = 'square--highlighted'

Square.renderSquare = ({value = '', clickHandler = () => undefined, isHighlighted = false}) => {
  return <Square
    value={value}
    onClick={clickHandler}
    isHighlighted={isHighlighted}
  />;
}

Square.propTypes = {
  onClick: PropTypes.func,
  value: PropTypes.string,
  isHighlighted: PropTypes.bool
}
