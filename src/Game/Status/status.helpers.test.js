import { getStatusMessage } from './status.helpers';

describe('status.helpers', () => {
  test('Winner message', () => {
    const message = getStatusMessage({ nextPlayer: 'X', winner: 'O' });
    expect(message).toBe('Winner: O');
  });
  test('Next player message', () => {
    const message = getStatusMessage({ nextPlayer: 'O' });
    expect(message).toBe('Next player: O');
  });
  test('Draw message', () => {
    const message = getStatusMessage({ winner: 'draw' });
    expect(message).toBe('draw');
  });
});
