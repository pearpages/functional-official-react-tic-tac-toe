import { Square } from './Square';

const arrayIncludesValue = (array, value) => (array || []).includes(value);

const makeArrayIncludesValue = (array) => (value) =>
  arrayIncludesValue(array, value);

export const makeRenderSquareWithValueAndClickHandler = (config) => (
  squareIndex
) => Square.renderSquare(adapter(config, squareIndex));

export const adapter = ({ squares, handleClick, line = [] }, squareIndex) => ({
  value: squares[squareIndex],
  clickHandler: squares[squareIndex]
    ? () => undefined
    : handleClick(squareIndex),
  isHighlighted: makeArrayIncludesValue(line)(squareIndex),
});
