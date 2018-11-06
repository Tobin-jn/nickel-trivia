/* eslint-disable */

import React from "react";
import { shallow, mount } from "enzyme";
import { Categories, mapStateToProps, mapDispatchToProps } from "../index";
import * as Mocks from './mocks';
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
    wrapper = shallow(<Categories 
      category='animals'
      questions={Mocks.mockStateQuestions}
      handleCategory={jest.fn()}
      updateQuestions={jest.fn()}
      generateNewQuestion={jest.fn()}
      addQuestionCount={jest.fn()}
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

  describe('handleClick', () => {
    beforeEach(() => {
      wrapper = mount(<Categories
        category='animals'
        questions={Mocks.mockStateNoQuestions}
        handleCategory={jest.fn()}
        updateQuestions={jest.fn()}
        generateNewQuestion={jest.fn()}
        addQuestionCount={jest.fn()}
        toggleAsked={jest.fn()}
        hasErrored={jest.fn()}
      />);
    })
    it('should call handleCategory with the correct params', () => {
      wrapper.instance().handleClick('geography')

      expect(wrapper.props().handleCategory).toHaveBeenCalledWith('geography')
    })

    it('should call getTriviaQuestions with the correct params', () => {
      wrapper.instance().getTriviaQuestions = jest.fn()

      wrapper.instance().handleClick('geography')
      
      expect(wrapper.instance().getTriviaQuestions).toHaveBeenCalledWith('geography')
    })

    it('should call addQuestionCount with the correct params', () => {
      wrapper.instance().handleClick('geography')

      expect(wrapper.props().addQuestionCount).toHaveBeenCalledWith()
    })

  })

  // describe('getTriviaQuestions', () => {
  //   it('should call generateQuestion with the correct params if checkstate returns false', () => {})
  //   it('should call nextQuestion with the correct params if checkstate returns false', () => {})
  //   it('should call getQuestions with the correct params', () => {})
  //   it('should call updateQuestions with the correct params', () => {})
  //   it('should call generateQuestion with the correct params', () => {})
  //   it('should call nextQuestion with the correct params', () => {})
  //   it('should call hasErrored if there is an error', () => {})
  // })

  describe('checkState', () => {
    it('should return false if there are questions in the array', () => {
      expect(wrapper.instance().checkState('geography')).toEqual(false)
    })

    it('should return true if there are not questions in the array', () => {
      wrapper = shallow(<Categories
        category='animals'
        questions={Mocks.mockStateNoQuestions}
        handleCategory={jest.fn()}
        updateQuestions={jest.fn()}
        generateNewQuestion={jest.fn()}
        addQuestionCount={jest.fn()}
        toggleAsked={jest.fn()}
        hasErrored={jest.fn()}
      />);

      expect(wrapper.instance().checkState('geography')).toEqual(true)
    })
  })

  describe('nextQuestion', () => {
    beforeEach(() => {
      wrapper = mount(<Categories
        category='animals'
        questions={Mocks.mockStateNoQuestions}
        handleCategory={jest.fn()}
        updateQuestions={jest.fn()}
        generateNewQuestion={jest.fn()}
        addQuestionCount={jest.fn()}
        toggleAsked={jest.fn()}
        hasErrored={jest.fn()}
      />);
    })
    it('should call generateNewQuestion with the correct params', () => {
      wrapper.instance().nextQuestion(Mocks.mockQuestion, 'geography', Mocks.mockQuestions)

      expect(wrapper.props().generateNewQuestion).toHaveBeenCalledWith(Mocks.mockQuestion)
    })
    it('should call toggleAsked with the correct params', () => {
      wrapper.instance().nextQuestion(Mocks.mockQuestion, 'geography', Mocks.mockQuestions)

      expect(wrapper.props().toggleAsked).toHaveBeenCalledWith('geography', Mocks.mockQuestion)
    })
    it('should call updateQuestions with the correct params', () => {
      wrapper.instance().nextQuestion(Mocks.mockQuestion, 'geography', Mocks.mockQuestions)

      expect(wrapper.props().updateQuestions).toHaveBeenCalledWith('geography', Mocks.mockQuestions)
    })
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
      
    const mappedProps = mapStateToProps(Mocks.mockState)
    expect(mappedProps.questions).toEqual(expected)
  })


  it("should return a category in the props object", () => {
    const expected = 'animals'
      
    const mappedProps = mapStateToProps(Mocks.mockState)
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

  it('should call dispatch with addQuestionCount action when addQuestionCount is called', () => {
    const actionToDispatch = addQuestionCount()

    const mappedProps = mapDispatchToProps(mockDispatch)
    mappedProps.addQuestionCount()

    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
  })

  it('should call dispatch with toggleAsked action when toggleAsked is called', () => {
    const actionToDispatch = toggleAsked('geography', Mocks.mockQuestion)

    const mappedProps = mapDispatchToProps(mockDispatch)
    mappedProps.toggleAsked('geography', Mocks.mockQuestion)

    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
  })

  it('should call dispatch with hasErrored action when hasErrored is called', () => {})
})

