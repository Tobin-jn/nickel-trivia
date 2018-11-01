import React, { Component } from 'react';
import PropTypes from "prop-types";
import { connect } from "react-redux";
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