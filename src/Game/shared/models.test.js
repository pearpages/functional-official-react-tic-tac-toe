import { LINES, PLAYERS } from './models';

describe('models', () => {
  test('When LINES change', () => {
    expect(LINES).toMatchSnapshot();
  });
  test('When PLAYERS change', () => {
    expect(PLAYERS).toMatchSnapshot();
  });
});
