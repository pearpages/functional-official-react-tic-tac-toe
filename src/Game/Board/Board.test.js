import { render } from '@testing-library/react'

import { Board } from './Board'

describe("<Board>", () => {
  const config = {
    handleClick: () => undefined,
    line: [2, 5, 8],
    squares: [null, null, 'X', null, 'O', 'X', null, 'O', 'X']
  }

  it('should have three rows', () => {
    const result = render(<Board config={config} />)
    expect(result.container.getElementsByClassName(Board.rowClassName).length).toBe(3)
  })

  it('should call the renderer function for each cell (square), 9 times in total', () => {
    const rowRender = jest.fn()
    const boardRenderer = jest.fn(() => rowRender)
    render(<Board config={config} boardRenderer={boardRenderer} />)
    expect(rowRender).toHaveBeenCalledTimes(9)
    expect(boardRenderer).toHaveBeenCalledWith(config)
  })

  it('should warn you of any html change', () => {
    const result = render(<Board config={config} />)
    expect(result.container.innerHTML).toMatchSnapshot()
  })
})