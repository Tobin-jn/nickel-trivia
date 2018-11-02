import React, { Component } from 'react';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import './DailyQuestion.css';

export class DailyQuestion extends Component {

componentDidMount = () => {

}


  // generateQuestion = () => {
  //   const { category, questions } = this.props
  //   console.log(questions[category])
  //   const questionBank = questions[category]
  //   // const length = questionBank.length

  //   console.log(questionBank[0])

  //   // const randomInt = Math.random() * (length - 0);
  //   // console.log(randomInt)



  // }


  render() {
    return (
      <div>
        <h1>DailyQuestion</h1>
      </div>
    );
  }

}

export const mapStateToProps = state => ({
  category: state.category,
  questions: state.questions
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