import { Status } from './Status';

import { render } from '@testing-library/react';

describe('<Status>', () => {
  test('Check when the html rendered changes', () => {
    const result = render(<Status nextPlayer={'X'} />);
    expect(result.container.innerHTML).toMatchSnapshot();
  });
  test('Winner', () => {
    const result = render(<Status nextPlayer={'O'} winner={'X'} />);
    expect(result.container.textContent).toBe('Winner: X');
  });
  test('Next player', () => {
    const result = render(<Status nextPlayer={'O'} />);
    expect(result.container.textContent).toBe('Next player: O');
  });
  test('draw', () => {
    const result = render(<Status nextPlayer={'O'} winner={'draw'} />);
    expect(result.container.textContent).toBe('draw');
  });
});
