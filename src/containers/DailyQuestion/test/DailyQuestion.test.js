/* eslint-disable */

import React from "react";
import { shallow } from "enzyme";
import { DailyQuestion, mapStateToProps, mapDispatchToProps } from "../index";
import * as Mocks from './mocks';
import { 
  updateCategory, 
  updateQuestions, 
  updateCurrentQuestion, 
  addQuestionCount,
  toggleAsked,
} from '../../../actions'
import * as Helper from '../../../apiCalls/helper'
import * as Fetch from '../../../apiCalls/apiCalls'

describe("DailyQuestion", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<DailyQuestion
      category='animals'
      questions={Mocks.mockStateQuestions}
      currentQuestion={Mocks.mockQuestion}
      updateQuestions={jest.fn()}
      generateNewQuestion={jest.fn()}
      toggleAsked={jest.fn()}
      hasErrored={jest.fn()}
    />);
  });

  it("should exist", () => {
    expect(wrapper).toBeDefined();
  });

  it("should match snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe('getTriviaQuestions', () => {

    it('should call getQuestions with the correct params', () => {
      Fetch.getQuestions = jest.fn().mockImplementation(() => ({}))

      wrapper.instance().getTriviaQuestions('generalKnowledge')

      expect(Fetch.getQuestions).toHaveBeenCalledWith('generalKnowledge')
    })

    it('should call Helper.generateQuestion', async () => {
      Helper.generateQuestion = jest.fn()

      await wrapper.instance().getTriviaQuestions('generalKnowledge')

      expect(Helper.generateQuestion).toHaveBeenCalled()
    })

    it('should call nextQuestion with the correct params', async () => {
      wrapper.instance().nextQuestion = jest.fn()

      await wrapper.instance().getTriviaQuestions('geography')

      expect(wrapper.instance().nextQuestion).toHaveBeenCalled()
    })
  })

  describe('checkState', () => {
    it('should return false if there are questions in the array', () => {
      
      expect(wrapper.instance().checkState('geography')).toEqual(false)
    })

    it('should return true if there are not questions in the array', () => {
      wrapper = shallow(<DailyQuestion
        category='animals'
        questions={Mocks.mockStateNoQuestions}
        currentQuestion={Mocks.mockQuestion}
        updateQuestions={jest.fn()}
        generateNewQuestion={jest.fn()}
        toggleAsked={jest.fn()}
        hasErrored={jest.fn()}
      />);

      expect(wrapper.instance().checkState('geography')).toEqual(true)
    })
  })
});

describe('mapStateToProps', () => {
  it("should return a category in the props object", () => {
    const expected = 'animals'
      
    const mappedProps = mapStateToProps(Mocks.mockState)
    expect(mappedProps.category).toEqual(expected)
  })

  it("should return an array of questions in the props object", () => {
    const expected = {
      geography:[
        {        
          category: "Geography",
          question: "Which city is the capital of the United States of America?",
          correct_answer: "Washington D.C",
          answers: [],
          id: 1,
          asked: false,
        },
        {
          category: "Geography",
          question: "What is the capital of the American state of Arizona?",
          correct_answer: "Phoenix",
          answers: [],
          id: 2,
          asked: false,
        }
      ]
    }
      
    const mappedProps = mapStateToProps(Mocks.mockState)
    expect(mappedProps.questions).toEqual(expected)
  })

  it("should return a currentQuestion object in the props object", () => {
    const expected = {        
      category: "Geography",
      question: "Which city is the capital of the United States of America?",
      correct_answer: "Washington D.C",
      answers: [],
      id: 1,
      asked: false,
    }

  const mappedProps = mapStateToProps(Mocks.mockState)
  expect(mappedProps.currentQuestion).toEqual(expected)
  })
})

describe('mapDispatchToProps', () => {
  const mockDispatch = jest.fn()
  
  it('should call dispatch with updateQuestions action when updateQuestions is called', () => {
    const actionToDispatch = updateQuestions('geography', Mocks.mockQuestions)

    const mappedProps = mapDispatchToProps(mockDispatch)
    mappedProps.updateQuestions('geography', Mocks.mockQuestions)

    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
  })

  it('should call dispatch with updateCurrentQuestion action when generateNewQuestion is called', () => {
    const actionToDispatch = updateCurrentQuestion(Mocks.mockQuestion)

    const mappedProps = mapDispatchToProps(mockDispatch)
    mappedProps.generateNewQuestion(Mocks.mockQuestion)

    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
  })

  it('should call dispatch with toggleAsked action when toggleAsked is called', () => {
    const actionToDispatch = toggleAsked('geography', Mocks.mockQuestion)

    const mappedProps = mapDispatchToProps(mockDispatch)
    mappedProps.toggleAsked('geography', Mocks.mockQuestion)

    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
  })

  // it('should call dispatch with hasErrored action when toggleAsked is called', () => {})
})