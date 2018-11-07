import React, { Component } from 'react'
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { 
  updateCategory, 
  updateQuestions, 
  updateCurrentQuestion, 
  addQuestionCount,
  toggleAsked,
  hasErrored,
} from '../../actions'
import './Categories.css';
import { getQuestions } from '../../apiCalls/apiCalls'
import { generateQuestion } from '../../apiCalls/helper'

export class Categories extends Component {

  handleClick = (category) => {
    const { hasErrored, handleCategory, addQuestionCount } = this.props

    hasErrored(false)
    handleCategory(category)
    this.getTriviaQuestions(category)
    addQuestionCount()
  }

  getTriviaQuestions = async (category) => {
    const { questions, updateQuestions, hasErrored } = this.props

    if(!this.checkState(category)) {
      const newQuestion = generateQuestion(category, questions[category])
      this.nextQuestion(newQuestion, category, questions[category])
      return
    } 

    try {
      const triviaQuestions = await getQuestions(category)

      updateQuestions(category, triviaQuestions)
      const newQuestion = generateQuestion(category, triviaQuestions)
      this.nextQuestion(newQuestion, category, triviaQuestions)
    } 
    catch(error) {
      hasErrored(true)
    }
  }

  checkState = (category) => {
    return this.props.questions[category].length === 0 ? true : false
  }

  nextQuestion = (newQuestion, category, questions) => {
    const { generateNewQuestion, toggleAsked, updateQuestions } = this.props
    if (questions) {
      generateNewQuestion(newQuestion)
      toggleAsked(category, newQuestion)
      updateQuestions(category, questions)
    } 
  }

  render() {
      return (
        <div className='categories-container'>

          <div className="categories">
            <button 
              className="category generalKnowledge"
              name='generalKnowledge'
              onClick={()=> {this.handleClick('generalKnowledge')}}
              >General Store
            </button>
            <button 
              className="category geography"
              name='geography'
              onClick={()=> {this.handleClick('geography')}}
              >Where in the World
            </button>
            <button 
              className="category history"
              name='history'
              onClick={()=> {this.handleClick('history')}}
              >When I was a kid...
            </button>
            <button 
              className="category animals"
              name='animals'
              onClick={()=> {this.handleClick('animals')}}
              >Lions, Tigers, & Bears
            </button>
            <button 
              className="category vehicles"
              name='vehicles'
              onClick={()=> {this.handleClick('vehicles')}}
              >Planes, Trains & Automobiles
            </button>
            <button 
              className="category cartoons"
              name='cartoons'
              onClick={()=> {this.handleClick('cartoons')}}
              >Your Grandkid's Favorite Movie
            </button>
          </div>
        </div>
      );
    
  }
}

export const mapStateToProps = state => ({
  questions: state.questions,
  category: state.category
});

export const mapDispatchToProps = dispatch => ({
  handleCategory: (category) => 
    dispatch(updateCategory(category)),
  updateQuestions: (category, questions) => 
    dispatch(updateQuestions(category, questions)),
  generateNewQuestion: (question) => 
    dispatch(updateCurrentQuestion(question)),
  addQuestionCount: () => 
    dispatch(addQuestionCount()),
  toggleAsked: (category, question) => 
    dispatch(toggleAsked(category, question)),
  hasErrored: (bool) =>
    dispatch(hasErrored(bool)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Categories);


Categories.propTypes = {
  category: PropTypes.string.isRequired,
  questions: PropTypes.object.isRequired,
  handleCategory: PropTypes.func.isRequired,
  updateQuestions: PropTypes.func.isRequired,
  generateNewQuestion: PropTypes.func.isRequired,
  addQuestionCount: PropTypes.func.isRequired,
  toggleAsked: PropTypes.func.isRequired,
  hasErrored: PropTypes.func.isRequired,
};


