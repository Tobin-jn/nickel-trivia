/* eslint-disable */

import React from "react";
import { shallow } from "enzyme";
import { Categories, mapStateToProps, mapDispatchToProps } from "../index";
import { mockState } from './mocks';

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
  it("should return a questions array in the props object", () => {
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
  it('should call dispatch with updateCategory action when handleCategory is called', () => {

  })

  it('should call dispatch with updateQuestions action when updateQuestions is called', () => {

  })

  it('should call dispatch with updateCurrentQuestion action when generateNewQuestion is called', () => {

  })

  it('should call dispatch with addQuestionCount action when addQuestionCount is called', () => {

  })

  it('should call dispatch with toggleAsked action when toggleAsked is called', () => {

  })
})




//   describe('mapStateToProps', () => {
//     it('should return an object with the todos array', () => {
//       // Setup
//       const mockState = {
//         todos: [{text: 'Learn Redux!', id: 0}],
//         filter: 'SHOW_ALL'
//       }
//       const expected = {
//         todos: [{text: 'Learn Redux!', id: 0}]
//       }

//       // Execution
//       const mappedProps = mapStateToProps(mockState)

//       // Expectation
//       expect(mappedProps).toEqual(expected)
//     })
//   })
// })