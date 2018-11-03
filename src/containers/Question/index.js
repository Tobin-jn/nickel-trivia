import React from 'react';
import './Question.css';
import PropTypes from "prop-types";


export const Question = props => {
  return (
    <div className="question-container">
      <h3 className="question">Question: {currentQuestion.question} </h3>
      <p className="answer-choice choice-a">{currentQuestion.answers[0]}</p>
      <p className="answer-choice choice-b">{currentQuestion.answers[1]}</p>
      <p className="answer-choice choice-c">{currentQuestion.answers[2]}</p>
      <p className="answer-choice choice-d">{currentQuestion.answers[3]}</p>
    </div>
  );
}


export const mapStateToProps = state => ({
  currentQuestion: state.cuurentQuestion,
  category: state.category
});

export const mapDispatchToProps = dispatch => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Question);

// Categories.propTypes = {
//   handleCategory: PropTypes.func.isRequired,
// };
