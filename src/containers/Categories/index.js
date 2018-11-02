import React, { Component } from 'react';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { updateCategory, updateQuestions } from '../../actions'
import './Categories.css';
import { getQuestions } from '../../apiCalls/apiCalls'

export class Categories extends Component {

  handleClick = (category) => {
    this.props.handleCategory(category)
    this.getTriviaQuestions(category)
  }

  getTriviaQuestions = async (category) => {
    const check = this.checkState(category)
    console.log(check)
    if(!check) {
      return
    }

    try {
      const triviaQuestions = await getQuestions(category)

      this.props.handleFetchQuestions(category, triviaQuestions)
      // this.setLocalStorage(triviaQuestions)

    } 
    catch(error) {
      console.log('we have a problem...')
    }
  }

  checkState = (category) => {
    const { questions } = this.props
    console.log(questions)
    if(questions[category].length === 0) {
      return true
    } else {
      return false
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
  questions: state.questions,
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







