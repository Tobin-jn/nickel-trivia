/* eslint-disable */

import { questionReducer } from "../questionReducer";

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