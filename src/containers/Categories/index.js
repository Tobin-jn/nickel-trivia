import React, { Component } from 'react';
import PropTypes from "prop-types";
import './Categories.css';

class Categories extends Component {
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

export default Categories;

Categories.propTypes = {
  // saveUserData: PropTypes.func.isRequired,
};