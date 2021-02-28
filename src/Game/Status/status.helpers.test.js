import { getStatusMessage } from './status.helpers';
import { PLAYERS } from '../shared';

const { PLAYER1, PLAYER2 } = PLAYERS;

describe('status.helpers', () => {
  test('Winner message', () => {
    const message = getStatusMessage({ nextPlayer: PLAYER1, winner: PLAYER2 });
    expect(message).toBe('Winner: O');
  });
  test('Next player message', () => {
    const message = getStatusMessage({ nextPlayer: PLAYER2 });
    expect(message).toBe('Next player: O');
  });
  test('Draw message', () => {
    const message = getStatusMessage({ winner: 'draw' });
    expect(message).toBe('draw');
  });
});
