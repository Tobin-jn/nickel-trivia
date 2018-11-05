import React, { Component } from 'react';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import './DailyQuestion.css';
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
    this.props.generateNewQuestion(newQuestion)
    this.props.toggleAsked(category, newQuestion)
    this.props.updateQuestions(category, questions)
  }

  render() {
    const { currentQuestion } = this.props
    return (
      <div className='daily-question-container'>
        <img className='jar-logo' src={ require('../../images/NickelTriviaJar.png') } alt="Trivia Jar Logo"/>
        <h1 className='daily-header'>Question of the Day</h1>
        <Question />
        <NavLink  to='/triviagame'>
          <button className='play-game-btn btn'>Play a game with Grandkids!</button>
        </NavLink>
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
    hasErrored: () =>
      dispatch(hasErrored()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DailyQuestion);

DailyQuestion.propTypes = {
  // saveUserData: PropTypes.func.isRequired,
};