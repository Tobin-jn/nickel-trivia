/* eslint-disable */

import React from "react";
import { shallow } from "enzyme";
import { TriviaGame, mapStateToProps, mapDispatchToProps } from "../index";
import { mockState, mockQuestion } from './mocks';

describe("TriviaGame", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<TriviaGame 
      currentQuestion={mockQuestion}
      gameCount={1}
      score={5}
    />);
  });

  it("should exist", () => {
    expect(wrapper).toBeDefined();
  });

  it("should match snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });
});

describe('mapStateToProps', () => {
  it("should return a currentQuestion object in the props object", () => {
    const expected = {        
      category: "Geography",
      question: "Which city is the capital of the United States of America?",
      correct_answer: "Washington D.C",
      answers: [],
      id: 1,
      asked: false,
    }

    const mappedProps = mapStateToProps(mockState)
    expect(mappedProps.currentQuestion).toEqual(expected)
  })

  it('should return a number for gameCount in the props object', () => {
    const expected = 2

    const mappedProps = mapStateToProps(mockState)
    expect(mappedProps.gameCount).toEqual(expected)
  })

  it('should return a number for score in the props object', () => {
    const expected = 5

    const mappedProps = mapStateToProps(mockState)
    expect(mappedProps.score).toEqual(expected)
  })
})

// describe('mapDispatchToProps', () => {
//   it('should call dispatch with...', () => {

//   })
// })