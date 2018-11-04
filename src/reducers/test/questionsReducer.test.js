/* eslint-disable */

import { questionsReducer } from "../questionsReducer";
import { mockState } from './mocks';


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


  // it('should return a cleared out state', () => {
  //   const action = {
  //     type: ,
  //   }

  //   const expected = ''

  //   const result = categoryReducer(mockState, action)

  //   expect(result).toEqual(expected)
  // })