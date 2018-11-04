import React, { Component } from 'react';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import './DailyQuestion.css';
import Question from '../Question'
import { updateQuestions, updateCurrentQuestion } from '../../actions'
import { getQuestions } from '../../apiCalls/apiCalls'
import { NavLink } from 'react-router-dom'

export class DailyQuestion extends Component {

  componentDidMount() {
    this.getTriviaQuestions()
  }

  getTriviaQuestions = async () => {
    if(!this.checkState('generalKnowledge')) {
      this.generateQuestion('generalKnowledge', this.props.questions['generalKnowledge'])
      return
    }

    try {
      const triviaQuestions = await getQuestions('generalKnowledge')

      this.props.updateQuestions('generalKnowledge', triviaQuestions)
      this.generateQuestion('generalKnowledge', triviaQuestions)
    } 
    catch(error) {
      console.log('we have a problem...')
    }
  }

  checkState = (category) => {
    if (this.props.questions[category].length === 0) {
      return true
    } else {
      return false
    }
  }

  generateQuestion = (category, questions) => {
    const length = questions.length
    const randomInt = Math.round(Math.random() * (length - 0));
    const newQuestion = questions[randomInt]
    console.log(newQuestion)
    this.props.generateNewQuestion(category, newQuestion)
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
  updateQuestions: (category, questions) => dispatch(updateQuestions(category, questions)),
  generateNewQuestion: (category, question) => dispatch(updateCurrentQuestion(category, question))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DailyQuestion);

DailyQuestion.propTypes = {
  // saveUserData: PropTypes.func.isRequired,
};