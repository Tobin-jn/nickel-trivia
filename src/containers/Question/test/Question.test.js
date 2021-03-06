import React from 'react'
import { shallow, mount } from 'enzyme'
import { mockState, mockQuestion, mockQuestions } from './mocks';
import { addPoints } from '../../../actions'
import { Question, mapStateToProps, mapDispatchToProps } from '../index'

describe('Question', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(<Question 
      category={'geogrpahy'}
      questions={mockQuestions}
      currentQuestion={mockQuestion}
      addPoints={jest.fn()}
      // location={{ pathname: "" }}
      />)
  })

  it('should exist', () => {
    expect(wrapper).toBeDefined()
  })

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  describe('checkAnswer', () => {
    it('should setState if the answer is correct', () => {
      wrapper.setState({ correct: '' })

      wrapper.instance().checkAnswer(0)
      expect(wrapper.state().correct).toEqual('correct')
    })

    it('should setState if the answer is incorrect', () => {
      wrapper.setState({ correct: '' })

      wrapper.instance().checkAnswer(1)
      expect(wrapper.state().correct).toEqual('incorrect')
    })
  })

  describe('removeAlert', () => {
    it('should setState when removeAlert is called', () => {
      wrapper.setState({ correct: '' })

      wrapper.instance().removeAlert()

      expect(wrapper.state().correct).toEqual('no answer')
    })
  })

  it('should render a question and 4 answers if there is a currentQuestion', () => {
    expect(wrapper.find('.question').length).toEqual(1)
    expect(wrapper.find('.answer-choice').length).toEqual(4)
    
  })

  it('should render an error if there is not a currentQuestion', () => {
    wrapper = shallow(<Question 
      category={'geogrpahy'}
      questions={mockQuestions}
      currentQuestion={{}}
      addPoints={jest.fn()}
      />)

    expect(wrapper.find('.error-question-message')).toBeDefined()
  })

  describe('Answer clicks', () => {
    let wrapper

    beforeEach(() => {
      wrapper = mount(<Question 
        category={'geogrpahy'}
        questions={mockQuestions}
        currentQuestion={mockQuestion}
        addPoints={jest.fn()}
        />)
    })

    it('should call checkAnswer if first answer is clicked', () => {
    
      wrapper.instance().checkAnswer = jest.fn()

      wrapper.find('.choice-a').simulate('click')

      expect(wrapper.instance().checkAnswer).toHaveBeenCalledWith(0)
    })

    it('should call checkAnswer if second answer is clicked', () => {
    
      wrapper.instance().checkAnswer = jest.fn()

      wrapper.find('.choice-b').simulate('click')

      expect(wrapper.instance().checkAnswer).toHaveBeenCalledWith(1)
    })
    
    it('should call checkAnswer if third answer is clicked', () => {
    
      wrapper.instance().checkAnswer = jest.fn()

      wrapper.find('.choice-c').simulate('click')

      expect(wrapper.instance().checkAnswer).toHaveBeenCalledWith(2)
    })

    it('should call checkAnswer if fourth answer is clicked', () => {
    
      wrapper.instance().checkAnswer = jest.fn()

      wrapper.find('.choice-d').simulate('click')

      expect(wrapper.instance().checkAnswer).toHaveBeenCalledWith(3)
    })
  })
})

describe('mapStateToProps', () => {
  it("should return a category in the props object", () => {
    const expected = 'animals'
      
    const mappedProps = mapStateToProps(mockState)
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
      
    const mappedProps = mapStateToProps(mockState)
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

  const mappedProps = mapStateToProps(mockState)
  expect(mappedProps.currentQuestion).toEqual(expected)
  })
})

describe('mapDispatchToProps', () => {
  it('should call dispatch with addPoints action when addPoints is called', () => {
    const mockDispatch = jest.fn()
    const actionToDispatch = addPoints()

    const mappedProps = mapDispatchToProps(mockDispatch)
    mappedProps.addPoints()

    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
  })

})
