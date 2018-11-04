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
})


  // it('should return a cleared out state', () => {
  //   const action = {
  //     type: ,
  //   }

  //   const expected = ''

  //   const result = categoryReducer(mockState, action)

  //   expect(result).toEqual(expected)
  // })