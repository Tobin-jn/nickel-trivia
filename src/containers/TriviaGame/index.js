import React, { Component } from 'react';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import './TriviaGame.css';
import Question from '../Question'
import Categories from '../Categories'
import { NavLink } from 'react-router-dom';
// import { clearCurrentQuestion } from '../../actions'

export class TriviaGame extends Component{

  render() {
    console.log(this.props.gameCount)
    if (this.props.gameCount === 0) {
      return (
        <div>
          <h1>Game!</h1>
          <Categories />
          <div className="start-game">
            <h1 className="start-game-text">Choose a category and lets start a Game!</h1>
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <h1>Game!</h1>
          <Categories />
          <Question />
          <div className="score">
            <h1 className="score-text">Score:</h1>
            <h4 className="score-number">{this.props.score}</h4>
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
  // clearCurrentQuestion: () => dispatch(clearCurrentQuestion())

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TriviaGame);

TriviaGame.propTypes = {
  // saveUserData: PropTypes.func.isRequired,
};