import React, { Component } from 'react';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import './TriviaGame.css';
import Question from '../Question'
import Categories from '../Categories'
import { NavLink } from 'react-router-dom';


export const TriviaGame = props => {

  return (
    <div>
      <h1>Game!</h1>
      <Categories />
      <Question />
      <div className="score">
        <h1 className="score-text">Score:</h1>
        <h4 className="score-number">20cents</h4>
      </div>
    </div>
  );
}

export const mapStateToProps = state => ({
  // loggedIn: state.loggedIn,
});

export const mapDispatchToProps = dispatch => ({
  // saveUserData: (username, id) => dispatch(saveUserData(username, id)),

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TriviaGame);

TriviaGame.propTypes = {
  // saveUserData: PropTypes.func.isRequired,
};