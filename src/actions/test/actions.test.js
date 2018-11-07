/* eslint-disable */

import React from "react";
import { shallow } from "enzyme";
import * as actions from "../index";
import { mockCategory, mockQuestion, mockQuestions } from './mocks';

describe('actions', () => {

  it('should have a type of UPDATE_CATEGORY', () => {
    const expectedAction = {
      type: 'UPDATE_CATEGORY',
      category: mockCategory
    }

    const result = actions.updateCategory(mockCategory)

    expect(result).toEqual(expectedAction)
  })

  // it('should have a type of CLEAR_CATEGORY', () => {
  //   const expectedAction = {
  //     type: 'CLEAR_CATEGORY',
  //   }

  //   const result = actions.clearCategory()

  //   expect(result).toEqual(expectedAction)
  // })

  it('should have a type of UPDATE_QUESTIONS', () => {
    const expectedAction = {
      type: 'UPDATE_QUESTIONS',
      category: mockCategory,
      questions: mockQuestions
    }

    const result = actions.updateQuestions(mockCategory, mockQuestions)

    expect(result).toEqual(expectedAction)
  })

  it('should have a type of TOGGLE_ASKED', () => {
    const expectedAction = {
      type: 'TOGGLE_ASKED',
      category: mockCategory,
      question: mockQuestion
    }

    const result = actions.toggleAsked(mockCategory, mockQuestion)

    expect(result).toEqual(expectedAction)
  })

  it('should have a type of UPDATE_CURRENT_QUESTION', () => {
    const expectedAction = {
      type: 'UPDATE_CURRENT_QUESTION',
      question: mockQuestion
    }

    const result = actions.updateCurrentQuestion(mockQuestion)

    expect(result).toEqual(expectedAction)
  })

  // it('should have a type of CLEAR_CURRENT_QUESTION', () => {
  //   const expectedAction = {
  //     type: 'CLEAR_CURRENT_QUESTION',
  //   }

  //   const result = actions.clearCurrentQuestion()

  //   expect(result).toEqual(expectedAction)
  // })

  it('should have a type of ADD_QUESTION_COUNT', () => {
    const expectedAction = {
      type: 'ADD_QUESTION_COUNT',
    }

    const result = actions.addQuestionCount()

    expect(result).toEqual(expectedAction)
  })

  it('should have a type of ADD_POINTS', () => {
    const expectedAction = {
      type: 'ADD_POINTS',
    }

    const result = actions.addPoints()

    expect(result).toEqual(expectedAction)
  })

  it('should have a type of HAS_ERRORED', () => {
    const expectedAction = {
      type: 'HAS_ERRORED',
      hasErrored: true
    }

    const result = actions.hasErrored(true)

    expect(result).toEqual(expectedAction)
  })
})