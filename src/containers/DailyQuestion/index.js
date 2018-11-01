import React, { Component } from 'react';
import PropTypes from "prop-types";
import './DailyQuestion.css';

class DailyQuestion extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <h1>DailyQuestion</h1>
      </div>
    );
  }
}

export default DailyQuestion;

DailyQuestion.propTypes = {
  // saveUserData: PropTypes.func.isRequired,
};