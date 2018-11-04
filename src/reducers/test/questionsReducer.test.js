/* eslint-disable */

import { questionsReducer } from "../questionsReducer";

describe('questionsReducer', () => {
  it('should return the initial state', () => {
    const expected = {
      generalKnowledge: [],
      geography: [],
      history: [],
      animals: [],
      vehicles: [],
      cartoons: [],
    }

    const result = questionsReducer(undefined, {})

    expect(result).toEqual(expected)
  })
})