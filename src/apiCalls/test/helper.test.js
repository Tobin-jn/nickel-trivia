import React from 'react'
import * as helper from '../helper';
import * as Mocks from './mocks'


describe('helper', () => {
  describe('shuffleAnswers', () => {
    it('should take in an array and shuffle the order of the elements', () => {

    })
  })

  describe('cleanQuestions', () => {
    // beforeEach(() => {
    //   helper.shuffleAnswers = jest.fn()
    //   helper.cleanAnswers = jest.fn()
    //   helper.cleanQuestion = jest.fn()
    // })

    it('should call shuffleAnswer when cleanQuestions is called', () => {
      
      helper.cleanQuestions(Mocks.mockResults)

      expect(helper.shuffleAnswers).toHaveBeenCalled()

    })
    it('should call cleanAnswer when cleanQuestions is called', () => {

    })
    it('should call cleanQuestion when cleanQuestions is called', () => {

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

  describe('cleanQuestions', () => {
    it('should replace encoded characters with the correct character', () => {
      let mockQuestion = 'Who is the best&hellip;'

      const expected = 'Who is the best...'
      
      const result = helper.cleanQuestion(mockQuestion)

      expect(result).toEqual(expected)
    })
  })

  describe('generateQuestion', () => {
    it('should return a single question from an array of questions', () => {

    })
    
  })
  
})