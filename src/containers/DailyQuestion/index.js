import React, { Component } from 'react'
import PropTypes from "prop-types"
import { connect } from "react-redux"
import './DailyQuestion.css'
import Question from '../Question'
import { updateQuestions, updateCurrentQuestion, toggleAsked, hasErrored } from '../../actions'
import { getQuestions } from '../../apiCalls/apiCalls'
import { generateQuestion } from '../../apiCalls/helper'
import { NavLink } from 'react-router-dom'

export class DailyQuestion extends Component {

  componentDidMount() {
    this.getTriviaQuestions('generalKnowledge')
  }

  getTriviaQuestions = async (category) => {
    this.props.hasErrored(false)
    try {
      const triviaQuestions = await getQuestions(category)

      this.props.updateQuestions(category, triviaQuestions)
      const newQuestion = generateQuestion(category, triviaQuestions)
      this.nextQuestion(newQuestion, category, triviaQuestions)
    } 
    catch(error) {
      this.props.hasErrored(true)
    }
  }

  checkState = (category) => {
    return this.props.questions[category].length === 0 ? true : false
  }

  nextQuestion = (newQuestion, category, questions) => {
    const { generateNewQuestion, toggleAsked, updateQuestions } = this.props
    generateNewQuestion(newQuestion)
    toggleAsked(category, newQuestion)
    updateQuestions(category, questions)
  }

  render() {
    return (
      <div className='daily-container'>
        <div className="header-wrapper">
          <img className='jar-logo' src={ require('../../images/NickelJar.png') } alt="Trivia Jar Logo"/>
          <h1 className='daily-header'>Question of the Day</h1>
          <NavLink  to='/triviagame'>
            <button className='play-game-btn btn'>Play a game with Grandkids!</button>
          </NavLink>
        </div>
        <Question />
      </div>
    );
  }
}

export const mapStateToProps = state => ({
  category: state.category,
  questions: state.questions,
  currentQuestion: state.currentQuestion
});

export const mapDispatchToProps = dispatch => ({
  updateQuestions: (category, questions) => 
    dispatch(updateQuestions(category, questions)),
  generateNewQuestion: (category, question) => 
    dispatch(updateCurrentQuestion(category, question)),
  toggleAsked: (category, question) => 
    dispatch(toggleAsked(category, question)),
  hasErrored: (bool) =>
      dispatch(hasErrored(bool)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DailyQuestion);

DailyQuestion.propTypes = {
  category: PropTypes.string.isRequired,
  questions: PropTypes.object.isRequired,
  currentQuestion: PropTypes.object.isRequired,
  updateQuestions: PropTypes.func.isRequired,
  generateNewQuestion: PropTypes.func.isRequired,
  toggleAsked: PropTypes.func.isRequired,
  hasErrored: PropTypes.func.isRequired,
};