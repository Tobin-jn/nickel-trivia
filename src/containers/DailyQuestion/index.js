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

      this.props.handleFetchQuestions('generalKnowledge', triviaQuestions)
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
    this.props.generateNewQuestion(newQuestion)
  }

  render() {
    const { currentQuestion } = this.props
    return (
      <div className='daily-question-container'>
        <h1>DailyQuestion</h1>
        <Question />
        <NavLink className='play-game-btn' to='/triviagame'>Play a game with Grandkids!</NavLink>
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
  handleFetchQuestions: (category, questions) => dispatch(updateQuestions(category, questions)),
  generateNewQuestion: (question) => dispatch(updateCurrentQuestion(question))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DailyQuestion);

DailyQuestion.propTypes = {
  // saveUserData: PropTypes.func.isRequired,
};