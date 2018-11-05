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
          <h1 className='game-header'>Game!</h1>
          <div className="game-wrapper">
            <Categories />
            <div className="start-game">
              <h1 className="start-game-text">Choose a category and lets start a Game!</h1>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className='game'>
          <div className="header-container">
            <div className="score-team-two"></div>
            <h1 className='game-header'>Game!</h1>
            <div className="score">
              <h1 className="score-text">Score</h1>
              <h4 className="score-number">{this.props.score} Cents</h4>
            </div>
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

export const mapDispatchToProps = dispatch => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TriviaGame);

TriviaGame.propTypes = {
  // saveUserData: PropTypes.func.isRequired,
};