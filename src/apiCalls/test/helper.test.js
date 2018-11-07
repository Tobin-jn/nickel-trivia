import React from 'react'
import * as helper from '../helper'
import * as Mocks from './mocks'


describe('helper', () => {
  describe('cleanQuestions', () => {
    it('should return a cleaned array when cleanQuestions is called', () => {

      const result = helper.cleanQuestions(Mocks.mockResults)

      expect(result).toEqual(Mocks.mockCleaned)  
    })
  })

  describe('cleanAnswers', () => {
    it('should replace encoded characters with the correct character', () => {
      let mockAnswer = ['Tom &amp; Jerry']

      const expected = ['Tom & Jerry']
      
      const result = helper.cleanAnswers(mockAnswer)

      expect(result).toEqual(expected)
    })
  })

  describe('cleanQuestion', () => {
    it('should replace encoded characters with the correct character', () => {
      let mockQuestion = 'Who is the best&hellip;'

      const expected = 'Who is the best...'
      
      const result = helper.cleanQuestion(mockQuestion)

      expect(result).toEqual(expected)
    })
  })

  describe('generateQuestion', () => {
    it('should return a single question from an array of questions', () => {
      Math.random = jest.fn().mockImplementation(() => { return .5 })

      const result = helper.generateQuestion('geography', Mocks.mockCleaned)

      const expected =   {
        category: "Geography",
        question: "The body of the Egyptian Sphinx was based on which animal?",
        answers: [ "animal", "animal", "animal", "animal", ],
        correct_answer: "animal",
        id: 3,
        asked: false,
      }

      expect(result).toEqual(expected)
    })
  })
})