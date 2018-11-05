/* eslint-disable */

import { gameReducer } from "../gameReducer";
import { mockState } from './mocks';


describe('gameReducer', () => {
  it('should return the initial state', () => {
    const expected = {
      questionCount: 0,
      score: 0
    }

    const result = gameReducer(undefined, {})
    expect(result).toEqual(expected)
  })

  it('should add one to the question count', () => {
    const action = {
      type: 'ADD_QUESTION_COUNT',
    }

    const expected = {
      questionCount: 2,
      score: 0
    }

    const result = gameReducer(mockState.game, action)
    expect(result).toEqual(expected)
  })

  it('should add five to the score', () => {
    const action = {
      type: 'ADD_POINTS',
    }

    const expected = {
      questionCount: 2,
      score: 5
    }

    const result = gameReducer(mockState.game, action)
    expect(result).toEqual(expected)
  })
})

