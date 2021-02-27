import { render, fireEvent } from '@testing-library/react'

import { Moves } from './Moves'
import { getDescription } from './moves.helpers'

describe("<Moves>", () => {
  test('When Moves does not have any props is just an empty list', () => {
    const result = render(<Moves />)
    expect(result.queryByTestId('Moves').innerHTML).toEqual('')
  })
  test('When Moves has a history prop renders the same number of buttons than elements', () => {
    const result = render(<Moves history={['e1', 'e2', 'e3', 'e4']}/>)
    expect(result.queryAllByRole('button').length).toBe(4)
  })
  test('When Moves html snapshot changes', () => {
    const result = render(<Moves history={['e1', 'e2', 'e3', 'e4']}/>)
    expect(result.getByTestId('Moves')).toMatchSnapshot()
  })
  test('When Moves has a list, should call the setMove function with the index value of that element in the history array', () => {
    const setMove =  jest.fn()
    const history = ['e1', 'e2', 'e3', 'e4']
    const result = render(<Moves history={history} setMove={setMove} />)

    const lastIndex = (history.length - 1)
    fireEvent.click(getButton(result, lastIndex))
    expect(setMove).toHaveBeenCalledWith(lastIndex)
  })
})

function getButton(result, lastIndex) {
  const textOfLastElement = getDescription(lastIndex)
  return result.getByText(textOfLastElement)
}