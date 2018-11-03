import React, { Component } from 'react';
import './Question.css';
import PropTypes from "prop-types";
import { connect } from 'react-redux'

export class Question extends Component {

  render() {
    const { currentQuestion } = this.props

    if(!this.props.currentQuestion){
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
            <h3 className="question">{currentQuestion.question} </h3>
          </div>
          <div className="answer-container">
            <div><p className="answer-choice choice-a">{currentQuestion.answers[0]}</p></div>
            <div><p className="answer-choice choice-b">{currentQuestion.answers[1]}</p></div>
            <div><p className="answer-choice choice-c">{currentQuestion.answers[2]}</p></div>
            <div><p className="answer-choice choice-d">{currentQuestion.answers[3]}</p></div>
          </div>
        </div>
      );
    }
  }
}

export const mapStateToProps = state => ({
  category: state.category,
  // questions: state.questions,
  currentQuestion: state.currentQuestion
});

export const mapDispatchToProps = dispatch => ({
  // saveUserData: (username, id) => dispatch(saveUserData(username, id)),

});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Question);

// Categories.propTypes = {
//   handleCategory: PropTypes.func.isRequired,
// };
