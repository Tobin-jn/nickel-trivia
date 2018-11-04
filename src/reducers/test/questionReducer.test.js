/* eslint-disable */

import { questionReducer } from "../questionReducer";
import { mockState } from './mocks';


describe('questionReducer', () => {
  it('should return the initial state', () => {
    const expected = {
      answers: [ '', '', '', ''],
      question: 'question',
      category:'General Knowledge'
    }

    const result = questionReducer(undefined, {})

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