import {
  makeRenderSquareWithValueAndClickHandler,
  adapter,
} from './board.helpers';
import { Square } from './Square';
import { PLAYERS } from '../shared';

const { PLAYER1, PLAYER2 } = PLAYERS;

Square.renderSquare = jest.fn();

const mockFn = () => 'yahoo';

const config = {
  handleClick: () => mockFn,
  line: [2, 5, 8],
  squares: [
    null,
    null,
    PLAYER1,
    null,
    PLAYER2,
    PLAYER1,
    null,
    PLAYER2,
    PLAYER1,
  ],
};

describe('board.helpers', () => {
  test('factory makeRenderSquareWithValueAndClickHandler gets called with the right parameters', () => {
    const square = {
      onClick: () => undefined,
      value: '',
      isHighlighted: false,
    };
    makeRenderSquareWithValueAndClickHandler(config)(square);
    expect(Square.renderSquare).toHaveBeenCalledWith(adapter(config, square));
  });

  describe('adapter', () => {
    it('should give you the right paramaters for the adapter function', () => {
      const result = adapter(config, 2);
      expect(result.value).toBe(PLAYER1);
      expect(result.clickHandler).not.toBe(mockFn);
      expect(result.clickHandler()).toBe(undefined);
      expect(result.isHighlighted).toBe(true);

      const result2 = adapter(config, 0);
      expect(result2.value).toBe(null);
      expect(result2.clickHandler).toBe(mockFn);
      expect(result2.clickHandler()).toEqual('yahoo');
      expect(result2.isHighlighted).toBe(false);
    });
  });
});
