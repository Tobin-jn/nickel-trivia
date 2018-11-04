/* eslint-disable */

import { gameReducer } from "../gameReducer";

describe('gameReducer', () => {
  it('should return the initial state', () => {
    const expected = {
      questionCount: 0,
      score: 0
    }

    const result = gameReducer(undefined, {})

    expect(result).toEqual(expected)
  })
})