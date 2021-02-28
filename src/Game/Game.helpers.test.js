import {
  getCurrentMove,
  getInitialHistory,
  hasDraw,
  getConfig,
} from './Game.helpers';
import { PLAYERS } from './shared';

describe('Game.helpers', () => {
  test('getInitialHistory', () => {
    expect(getInitialHistory()).toEqual([
      {
        nextPlayer: PLAYERS.PLAYER1,
        squares: [null, null, null, null, null, null, null, null, null],
      },
    ]);
  });
  test.todo('getUpdateGameFn');
  test('getCurrentMove', () => {
    expect(getCurrentMove({ moveTo: 4 })).toBe(4);
    expect(getCurrentMove({ history: [1, 2, 3, 4, 5] })).toBe(4);
    expect(getCurrentMove({ history: [1, 2, 3] })).toBe(2);
  });
  test('getConfig', () => {
    const history = [
      { nextPlayer: 'X', squares: [null, null, null] },
      { nextPlayer: 'O', squares: [null, 'X', null] },
      { nextPlayer: 'X', squares: [null, 'X', 'O'] },
    ];
    expect(
      getConfig({
        history,
        moveTo: 0,
      })
    ).toEqual({ nextPlayer: 'X', squares: [null, null, null], currentMove: 0 });
    expect(
      getConfig({
        history,
      })
    ).toEqual({ nextPlayer: 'X', squares: [null, 'X', 'O'], currentMove: 2 });
  });
  test.todo('updateSquares');
  test('hasDraw', () => {
    expect(hasDraw([null, 1, 2, 3, 5])).toBe(false);
    expect(hasDraw([0, 1, 2, 3, 5])).toBe(true);
  });
  test.todo('getWinnerConfig');
  test.todo('calculateWinner');
});
