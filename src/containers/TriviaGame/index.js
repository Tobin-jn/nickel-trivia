import React, { Component } from 'react';
import PropTypes from "prop-types";
import './TriviaGame.css';

class TriviaGame extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <h1>Game!</h1>
      </div>
    );
  }
}

export default TriviaGame;

TriviaGame.propTypes = {
  // saveUserData: PropTypes.func.isRequired,
};