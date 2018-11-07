import React, { Component } from 'react';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import './TriviaGame.css';
import Question from '../Question'
import Categories from '../Categories'
import { NavLink } from 'react-router-dom';

export class TriviaGame extends Component{

  render() {
    if (this.props.gameCount === 0) {
      return (
        <div className='game'>

          <div className='header-container'>
            <h2 className='choose-text'>Choose a Category</h2>
            <h1 className='game-header'>Nickel Trivia</h1>
            <h2 className="score-text">Score {this.props.score} &cent;</h2>
          </div>

          <div className="game-wrapper">
            <Categories />

            <div className='question-container'>
              <div className='question-container-after'></div>
              <h3 className="question">Choose a category and lets start a Game!</h3>
            </div>

          </div>
        </div>
      );
    } else {
      return (
        <div className='game'>
          <div className='header-container'>
            <h2 className='choose-text'>Choose a Category</h2>
            <h1 className='game-header'>Nickel Trivia</h1>
            <h2 className="score-text">Score {this.props.score} &cent;</h2>
          </div>

          <div className="game-wrapper">
            <Categories />
            <Question />
          </div> 
        </div>
      );
    }
  }
}

export const mapStateToProps = state => ({
  currentQuestion: state.currentQuestion,
  gameCount: state.game.questionCount,
  score: state.game.score
});

export default connect(
  mapStateToProps
)(TriviaGame);

TriviaGame.propTypes = {
  // saveUserData: PropTypes.func.isRequired,
};