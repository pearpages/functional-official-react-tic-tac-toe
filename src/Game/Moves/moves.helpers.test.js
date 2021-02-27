import { getDescription } from './moves.helpers'

describe('moves.helpers', ()  => {
  describe('getDescription', () => {
    test('When there is no move message', () => {
      expect(getDescription()).toEqual('Go to game start')
    })
    test('When there is a move', () => {
      expect(getDescription(1)).toEqual('Go to move #1')
      expect(getDescription('random text')).toEqual('Go to move #random text')
    })
  })
})
