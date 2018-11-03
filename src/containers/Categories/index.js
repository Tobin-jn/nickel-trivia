import React, { Component } from 'react';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { 
  updateCategory, 
  updateQuestions, 
  updateCurrentQuestion, 
  addQuestionCount 
} from '../../actions'
import './Categories.css';
import { getQuestions } from '../../apiCalls/apiCalls'
import DailyQuestion from '../DailyQuestion'
import { Route, NavLink, Redirect } from 'react-router-dom';


export class Categories extends Component {

  handleClick = (category) => {
    this.props.handleCategory(category)
    this.getTriviaQuestions(category)
    this.props.addQuestion()
  }

  getTriviaQuestions = async (category) => {
    if(!this.checkState(category)) {
      this.generateQuestion(category, this.props.questions[category])
      return
    }

    try {
      const triviaQuestions = await getQuestions(category)

      this.props.handleFetchQuestions(category, triviaQuestions)
      this.generateQuestion(category, triviaQuestions)
    } 
    catch(error) {
      console.log('we have a problem...')
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
  }

  render() {
    // if(this.props.category === '') {
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
        // <NavLink className='category-seleted-btn' to='/triviagame'>Get Question</NavLink>


        // <NavLink className='daily-trivia-btn' to='/categories'>Trivia of the Day</NavLink>
export const mapStateToProps = state => ({
  questions: state.questions,
  category: state.category
});

export const mapDispatchToProps = dispatch => ({
  handleCategory: (category) => dispatch(updateCategory(category)),
  handleFetchQuestions: (category, questions) => dispatch(updateQuestions(category, questions)),
  generateNewQuestion: (question) => dispatch(updateCurrentQuestion(question)),
  addQuestion: () => dispatch(addQuestionCount())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Categories);


// Categories.propTypes = {
//   handleCategory: PropTypes.func.isRequired,
// };







