import React, { Component } from 'react';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { updateCategory } from '../../actions'
import './Categories.css';
import { getQuestions } from '../../apiCalls'

export class Categories extends Component {

  handleClick = (category) => {
    this.props.handleCategory(category)
    this.getQuestions(category)
    //does this need to be async?
  }

  getQuestions = async (category) => {
    try {
      const triviaQuestions = await getQuestions(category)
      this.props.handleFetchQuestions(category, triviaQuestions)
    } catch(error) {
      console.log('we have a problem...')
    }
  }

  render() {
    return (
      <div className='categories-container'>

        <h1>Categories</h1>


        <button 
          className="category"
          name='generalKnowledge'
          onClick={()=> {this.handleClick('generalKnowledge')}}
          >General Knowledge
        </button>
        <button 
          className="category"
          name='geography'
          onClick={()=> {this.handleClick('geography')}}
          >Geography
        </button>
        <button 
          className="category"
          name='history'
          onClick={()=> {this.handleClick('history')}}
          >History
        </button>
        <button 
          className="category"
          name='animals'
          onClick={()=> {this.handleClick('animals')}}
          >Animals
        </button>
        <button 
          className="category"
          name='vehicles'
          onClick={()=> {this.handleClick('vehicles')}}
          >Vehicles
        </button>
        <button 
          className="category"
          name='cartoons'
          onClick={()=> {this.handleClick('cartoons')}}
          >Cartoons and Animations
        </button>

      </div>
    );
  }
}

export const mapStateToProps = state => ({
  // loggedIn: state.loggedIn,
});

export const mapDispatchToProps = dispatch => ({
  handleCategory: (category) => dispatch(updateCategory(category)),
  handleFetchQuestions: (category, questions) => dispatch(updateQuestions(category, questions))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Categories);


// Categories.propTypes = {
//   handleCategory: PropTypes.func.isRequired,
// };







