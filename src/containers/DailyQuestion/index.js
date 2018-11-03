import React, { Component } from 'react';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import './DailyQuestion.css';
import Question from '../Question'

export class DailyQuestion extends Component {


  render() {
    const { currentQuestion } = this.props
    return (
      <div className='daily-question-container'>
        <h1>DailyQuestion</h1>
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
  // saveUserData: (username, id) => dispatch(saveUserData(username, id)),

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DailyQuestion);

DailyQuestion.propTypes = {
  // saveUserData: PropTypes.func.isRequired,
};