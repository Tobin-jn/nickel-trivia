/* eslint-disable */

import React from "react";
import { shallow } from "enzyme";
import { Categories, mapStateToProps, mapDispatchToProps } from "../index";
import { mockState, mockQuestion, mockQuestions } from './mocks';
import { 
  updateCategory, 
  updateQuestions, 
  updateCurrentQuestion, 
  addQuestionCount,
  toggleAsked,
} from '../../../actions'

describe("Categories", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Categories />);
  });

  it("should exist", () => {
    expect(wrapper).toBeDefined();
  });

  it("should match snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe('handleClick', () => {

  })

  describe('getTriviaQuestions', () => {

  })

  describe('checkState', () => {

  })

  describe('generateQuestion', () => {

  })

});

describe('mapStateToProps', () => {
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
      
    const mappedProps = mapStateToProps(mockState)
    expect(mappedProps.questions).toEqual(expected)
  })


  it("should return a category in the props object", () => {
    const expected = 'animals'
      
    const mappedProps = mapStateToProps(mockState)
    expect(mappedProps.category).toEqual(expected)
  })
})

describe('mapDispatchToProps', () => {
  const mockDispatch = jest.fn()

  it('should call dispatch with updateCategory action when handleCategory is called', () => {
    const actionToDispatch = updateCategory('animals')

    const mappedProps = mapDispatchToProps(mockDispatch)
    mappedProps.handleCategory('animals')

    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
  })

  it('should call dispatch with updateQuestions action when updateQuestions is called', () => {
    const actionToDispatch = updateQuestions('geography', mockQuestions)

    const mappedProps = mapDispatchToProps(mockDispatch)
    mappedProps.updateQuestions('geography', mockQuestions)

    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
  })

  it('should call dispatch with updateCurrentQuestion action when generateNewQuestion is called', () => {
    const actionToDispatch = updateCurrentQuestion(mockQuestion)

    const mappedProps = mapDispatchToProps(mockDispatch)
    mappedProps.generateNewQuestion(mockQuestion)

    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
  })

  it('should call dispatch with addQuestionCount action when addQuestionCount is called', () => {
    const actionToDispatch = addQuestionCount()

    const mappedProps = mapDispatchToProps(mockDispatch)
    mappedProps.addQuestionCount()

    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
  })

  it('should call dispatch with toggleAsked action when toggleAsked is called', () => {
    const actionToDispatch = toggleAsked('geography', mockQuestion)

    const mappedProps = mapDispatchToProps(mockDispatch)
    mappedProps.toggleAsked('geography', mockQuestion)

    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
  })
})

