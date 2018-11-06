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
import { generateQuestion } from '../../apiCalls/helper'
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
      const newQuestion = generateQuestion(category, this.props.questions[category])
      this.nextQuestion(newQuestion, category, this.props.questions[category])
      return
    }

    try {
      const triviaQuestions = await getQuestions(category)

      this.props.updateQuestions(category, triviaQuestions)
      const newQuestion = generateQuestion(category, triviaQuestions)
      this.nextQuestion(newQuestion, category, triviaQuestions)
    } 
    catch(error) {
      this.props.hasErrored(true)
    }
  }

  checkState = (category) => {
    return this.props.questions[category].length === 0 ? true : false
  }

  nextQuestion = (newQuestion, category, questions) => {
    this.props.generateNewQuestion(newQuestion)
    this.props.toggleAsked(category, newQuestion)
    this.props.updateQuestions(category, questions)
  }

  render() {
    // if(this.props.isLoading){
    //   return (
    //     <p>its coming</p>
    //   )
    // } else if (this.props.hasErrored) {
    //   return (
    //     <p>We have an error</p>
    //   )
    // } else {
      return (
        <div className='categories-container'>

          <div className="categories">
            <button 
              className="category"
              name='generalKnowledge'
              onClick={()=> {this.handleClick('generalKnowledge')}}
              >General Store
            </button>
            <button 
              className="category"
              name='geography'
              onClick={()=> {this.handleClick('geography')}}
              >Where in the World
            </button>
            <button 
              className="category"
              name='history'
              onClick={()=> {this.handleClick('history')}}
              >When I was a kid...
            </button>
            <button 
              className="category"
              name='animals'
              onClick={()=> {this.handleClick('animals')}}
              >Lions, Tigers, & Bears
            </button>
            <button 
              className="category"
              name='vehicles'
              onClick={()=> {this.handleClick('vehicles')}}
              >Planes, Trains & Automobiles
            </button>
            <button 
              className="category"
              name='cartoons'
              onClick={()=> {this.handleClick('cartoons')}}
              >Your Grandkid's Favorite Movie
            </button>
          </div>
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







