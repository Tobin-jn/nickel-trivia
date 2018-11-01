import React, { Component } from 'react';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import './Categories.css';

export const Categories = props => {

  handleClick = (e) => {
    e.preventDefault()
    props.handleCategory(event.target.name)
  }

  return (
    <div>
      <h1>Categories</h1>
      <button 
        className="category"
        name='general-knowledge'
        onClick={this.handleClick()}
        >General Knowledge
      </button>
      <button 
        className="category"
        name='geography'
        onClick={this.handleClick()}
        >Geography
      </button>
      <button 
        className="category"
        name='history'
        onClick={this.handleClick()}
        >History
      </button>
      <button 
        className="category"
        name='animals'
        onClick={this.handleClick()}
        >Animals
      </button>
      <button 
        className="category"
        name='vehicles'
        onClick={this.handleClick()}
        >Vehicles
      </button>
      <button 
        className="category"
        name='cartoons'
        onClick={this.handleClick()}
        >Cartoons and Animations
      </button>
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
)(Categories);

Categories.propTypes = {
  // saveUserData: PropTypes.func.isRequired,
};