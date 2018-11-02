import React, { Component } from 'react';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import './DailyQuestion.css';

export class DailyQuestion extends Component {


  render() {
    const { currentQuestion } = this.props
    return (
      <div>
        <h1>DailyQuestion</h1>
        <h3 className="question">Question: {currentQuestion.question} </h3>
        <p className="answer-choice choice-a">{currentQuestion.answers[0]}</p>
        <p className="answer-choice choice-b">{currentQuestion.answers[1]}</p>
        <p className="answer-choice choice-c">{currentQuestion.answers[2]}</p>
        <p className="answer-choice choice-d">{currentQuestion.answers[3]}</p>
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
  // saveUserData: (username, id) => dispatch(saveUserData(username, id)),

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DailyQuestion);

DailyQuestion.propTypes = {
  // saveUserData: PropTypes.func.isRequired,
};