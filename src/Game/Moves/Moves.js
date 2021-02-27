import React from 'react'
import PropTypes from 'prop-types'

import { getDescription } from './moves.helpers'

import './Moves.css'

export function Moves({ history, setMove }) {
  return (<ol data-testid="Moves" className="moves">{history.map((_, index) => {
    return (
      <li key={index}>
        <button onClick={() => setMove(index)}>{getDescription(index)}</button>
      </li>
    );
  })}</ol>)
}

Moves.propTypes = {
  history: PropTypes.array.isRequired,
  setMove: PropTypes.func.isRequired
}

Moves.defaultProps = {
  history: [],
  setMove: () => undefined
}
