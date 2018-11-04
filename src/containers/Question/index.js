import React, { Component } from 'react';
import './Question.css';
import PropTypes from "prop-types";
import { connect } from 'react-redux';
import { addPoints } from '../../actions';

export class Question extends Component {
  constructor() {
    super()
    this.state = {
      answerMessage: ''
    }
  }

  checkAnswer = (index) => {
    const { questions, addPoints } = this.props

    if(questions.currentQuestion.answers[index] === questions.currentQuestion.correct_answer){
      this.setState({ answerMessage: 'Correct Answer!!' })
      addPoints()
    } else {
      this.setState({ answerMessage: `Sorry, the correct answer was ${questions.currentQuestion.correct_answer}` })
    }
  }

  render() {
    const { questions } = this.props

    if(!questions.currentQuestion.question){
      return (
        <div className="eror-question">
          <h1 className="error-question-message">Oops, choose another category</h1>
        </div>
      )
    } else {
      return (
        <div>
          <div className='question-container'>
            <div className='question-container-after'></div>
            <h3 className="question">{questions.currentQuestion.question} </h3>
          </div>
          <div className="answer-container">
            <div onClick={()=>{this.checkAnswer(0)}} ><p className="answer-choice choice-a">{questions.currentQuestion.answers[0]}</p></div>
            <div onClick={()=>{this.checkAnswer(1)}} ><p className="answer-choice choice-b">{questions.currentQuestion.answers[1]}</p></div>
            <div onClick={()=>{this.checkAnswer(2)}} ><p className="answer-choice choice-c">{questions.currentQuestion.answers[2]}</p></div>
            <div onClick={()=>{this.checkAnswer(3)}} ><p className="answer-choice choice-d">{questions.currentQuestion.answers[3]}</p></div>
          </div>
        </div>
      );
    }
  }
}

export const mapStateToProps = state => ({
  category: state.category,
  questions: state.questions,
  // currentQuestion: state.currentQuestion
});

export const mapDispatchToProps = dispatch => ({
  // saveUserData: (username, id) => dispatch(saveUserData(username, id)),
  addPoints: () => dispatch(addPoints())
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Question);

// Categories.propTypes = {
//   handleCategory: PropTypes.func.isRequired,
// };
