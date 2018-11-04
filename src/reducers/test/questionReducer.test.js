/* eslint-disable */

import { questionReducer } from "../questionReducer";
import { mockState, mockQuestion, mockCurrentQuestion, mockClearQuestion } from './mocks';


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

  it('should update the current question in state', () => {
    const action = {
      type: 'UPDATE_CURRENT_QUESTION',
      question: mockQuestion
    }

    const expected = mockCurrentQuestion

    const result = questionReducer(mockState, action)

    expect(result).toEqual(expected)
  })

  // it('should clear out the current state to the default', () => {
  // })
})

