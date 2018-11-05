import React, { Component } from 'react';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { 
  updateCategory, 
  updateQuestions, 
  updateCurrentQuestion, 
  addQuestionCount,
  toggleAsked,
  hasErrored,
} from '../../actions'
import './Categories.css';
import { getQuestions } from '../../apiCalls/apiCalls'
import DailyQuestion from '../DailyQuestion'
import { Route, NavLink, Redirect } from 'react-router-dom';


export class Categories extends Component {

  handleClick = (category) => {
    this.props.handleCategory(category)
    this.getTriviaQuestions(category)
    this.props.addQuestionCount()
  }

  getTriviaQuestions = async (category) => {
    if(!this.checkState(category)) {
      this.generateQuestion(category, this.props.questions[category])
      return
    }

    try {
      const triviaQuestions = await getQuestions('generalKnowledge')

      this.props.updateQuestions('generalKnowledge', triviaQuestions)
      this.generateQuestion('generalKnowledge', triviaQuestions)
    } 
    catch(error) {
      this.props.hasErrored(true)
    }
  }

  checkState = (category) => {
    if (this.props.questions[category].length === 0) {
      return true
    } else {
      return false
    }
  }

  generateQuestion = (category, questions) => {
    const length = questions.length
    const randomInt = Math.round(Math.random() * (length - 0));
    const newQuestion = questions[randomInt]
    console.log(newQuestion)
    this.props.generateNewQuestion(newQuestion)
    this.props.toggleAsked(category, newQuestion)
    this.props.updateQuestions(category, questions)
  }

  render() {

    //    if(this.props.isLoading){
    //   return
    //     <p>its coming</p>
    // } else if ( this.props.hasErrored) {
    //   return
    //     <p>We have an error</p>
    // } else {
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
  category: state.category
});

export const mapDispatchToProps = dispatch => ({
  handleCategory: (category) => 
    dispatch(updateCategory(category)),
  updateQuestions: (category, questions) => 
    dispatch(updateQuestions(category, questions)),
  generateNewQuestion: (question) => 
    dispatch(updateCurrentQuestion(question)),
  addQuestionCount: () => 
    dispatch(addQuestionCount()),
  toggleAsked: (category, question) => 
    dispatch(toggleAsked(category, question)),
  hasErrored: () =>
    dispatch(hasErrored()),
});



export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Categories);


// Categories.propTypes = {
//   handleCategory: PropTypes.func.isRequired,
// };







