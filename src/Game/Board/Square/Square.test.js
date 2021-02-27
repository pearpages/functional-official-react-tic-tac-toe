import { render, fireEvent } from '@testing-library/react'

import { Square } from './Square'

describe("<Square>", () => {
  it("Should render a button with the value, by default does not containt square--highlighted as a className", () => {
    const value = "My text"
    const result = render(<Square onClick={() => undefined} value={value}/>)

    const button = result.getByRole('button')
    expect(button.textContent).toEqual(value)

    expect(result.container.getElementsByClassName(Square.HIGHLIGHTED).length).toBe(0)
    expect(result.container.getElementsByClassName('square').length).toBe(1)
  })

  it("Should call the onClick function when the button gets clicked", () => {
    const value = "My text"
    const onClick = jest.fn()
    const result = render(<Square onClick={onClick} value={value}/>)

    const button = result.getByRole('button')
    fireEvent.click(button)
    expect(onClick).toHaveBeenCalled()
  })
})

describe("renderSquare", () => {
  test('renders a Square component with all the params set', () => {
    const value = 'My other text'
    const clickHandler = jest.fn()
    const isHighlighted = true
    const result = render(Square.renderSquare({
      value,
      clickHandler,
      isHighlighted
    }))

    expect(result.container.textContent).toEqual(value)
    expect(result.container.getElementsByClassName(Square.HIGHLIGHTED).length).toBe(1)
  })
})