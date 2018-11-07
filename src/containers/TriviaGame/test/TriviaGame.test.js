/* eslint-disable */

import React from "react";
import { shallow } from "enzyme";
import { TriviaGame, mapStateToProps, mapDispatchToProps } from "../index";
import { mockState, mockQuestion } from './mocks';
import Question from '../../Question'

describe("TriviaGame", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<TriviaGame 
      currentQuestion={mockQuestion}
      gameCount={0}
      score={5}
    />);
  });

  it("should exist", () => {
    expect(wrapper).toBeDefined();
  });

  it("should match snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a message if gameCount is 0', () => {
    expect(wrapper.find('.start-game-text')).toBeDefined()
    expect(wrapper.find(Question).length).toEqual(0)
  })

  it('should render a question if gameCount is greater than 0', () => {
    wrapper = shallow(<TriviaGame 
      currentQuestion={mockQuestion}
      gameCount={2}
      score={5}
    />);
    expect(wrapper.find(Question).length).toEqual(1)
    expect(wrapper.find('.start-game-text').length).toEqual(0)
  })
});

describe('mapStateToProps', () => {
  it("should return a currentQuestion object in the props object", () => {
    const expected = mockQuestion

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
