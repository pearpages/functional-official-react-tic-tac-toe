import { render } from '@testing-library/react';

import { Status } from './Status';
import { PLAYERS } from '../shared';

const { PLAYER1, PLAYER2 } = PLAYERS;

describe('<Status>', () => {
  test('Check when the html rendered changes', () => {
    const result = render(<Status nextPlayer={PLAYER1} />);
    expect(result.container.innerHTML).toMatchSnapshot();
  });
  test('Winner', () => {
    const result = render(<Status nextPlayer={PLAYER2} winner={PLAYER1} />);
    expect(result.container.textContent).toBe('Winner: X');
  });
  test('Next player', () => {
    const result = render(<Status nextPlayer={PLAYER2} />);
    expect(result.container.textContent).toBe('Next player: O');
  });
  test('draw', () => {
    const result = render(<Status nextPlayer={PLAYER2} winner={'draw'} />);
    expect(result.container.textContent).toBe('draw');
  });
});
