import React, { Component } from 'react';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import './Categories.css';

export class Categories extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <h1>Categories</h1>
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
)(Categories);

Categories.propTypes = {
  // saveUserData: PropTypes.func.isRequired,
};