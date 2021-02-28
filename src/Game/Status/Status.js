import React from 'react';

import { getStatusMessage } from './status.helpers';

export function Status({ nextPlayer, winner }) {
  return (
    <div className="status">{getStatusMessage({ nextPlayer, winner })}</div>
  );
}
