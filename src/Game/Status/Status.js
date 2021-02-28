import React from 'react';
import PropTypes from 'prop-types';

import { getStatusMessage } from './status.helpers';

export function Status({ nextPlayer, winner }) {
  return (
    <div className="status">{getStatusMessage({ nextPlayer, winner })}</div>
  );
}

Status.propTypes = {
  nextPlayer: PropTypes.string.isRequired,
  winner: PropTypes.string,
};
