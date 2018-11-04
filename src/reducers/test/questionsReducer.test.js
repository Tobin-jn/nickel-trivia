/* eslint-disable */

import { questionsReducer } from "../questionsReducer";
import { mockState, mockUpdatedQuestions, mockGeneralQuestion } from './mocks';


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

  it('should update questions in state', () => {
    const action = {
      type: 'UPDATE_QUESTIONS',
      category: 'generalKnowledge',
      questions: mockGeneralQuestion
    }

    const expected = mockUpdatedQuestions

    const result = questionsReducer(mockState.questions, action)

    expect(result).toEqual(expected)
  })

  // it('should toggle asked for an asked question in state', () => {
  //   const action = {
  //     type: 'TOGGLE_ASKED',
  //     category: ,
  //     question:
  //   }

  //   const expected = ''

  //   const result = questionsReducer(mockState, action)

  //   expect(result).toEqual(expected)
  // })
})

