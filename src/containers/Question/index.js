import React, { Component } from 'react';
import './Question.css';
import PropTypes from "prop-types";
import { connect } from 'react-redux';
import { addPoints } from '../../actions';

export class Question extends Component {
  constructor() {
    super()
    this.state = {
      answerMessage: '',
      correct: 'no answer'
    }
  }

  checkAnswer = async (index) => {
    const { currentQuestion, addPoints } = this.props
    let answerAlert
    if(currentQuestion.answers[index] === currentQuestion.correct_answer){
      this.setState({ correct: 'correct' })
      addPoints()
    } else {
      this.setState({ correct: 'incorrect' })
    }
    await setTimeout(this.removeAlert, 3000)
  }

  removeAlert = () => {
    this.setState({ correct: 'no answer' })
  }


  // handleFingerPrint = async () => {
  //   await this.setState({thumbprint: 'active-thumbprint'});
  //   await setTimeout(this.printConnect, 500);
  //   await setTimeout(this.printHandshake, 2500);
  //   await setTimeout(this.printWelcome, 5000);
  //   await setTimeout(this.printBriefing, 6500);
  //   await setTimeout(this.props.setReady, 6500);
  // }

  // printConnect = async () => {
  //   await this.setState({securing: 'print-securing'});
  // }

  // printHandshake = async () => {
  //   await this.setState({handshake: 'print-handshake'});
  // }



  render() {
    const { currentQuestion } = this.props
    let answerAlert;

    if(this.state.correct === 'correct' ){
      answerAlert = 
        <div className='answer-response'>
          <p className='answer-text' ><span className='correct' >Correct Answer!!</span> Choose a category for your next question.</p>
          <img className='nickel-logo-answer' src={ require('../../images/nickel.png') } alt="Nickel Jar Logo" />
        </div>
    } else if (this.state.correct === 'incorrect'){
      answerAlert = 
        <div className="answer-response">
          <p className='answer-text' >Sorry, the correct answer was {currentQuestion.correct_answer}. Choose a category for your next question.</p>
        </div>
    } else {
      answerAlert = <div className="answer-response answer-response-hidden"></div>
    }


    if(!currentQuestion.question){
      return (
        <div className="eror-question">
          <h1 className="error-question-message">Oops... no more questions, choose another category.</h1>
        </div>
      )
    } else if (this.props.hasErrored) {
        return (
          <h1 className="error-question-message">Game Error</h1>
        )
    } else {
      return (
        <div>
          <div className='question-container'>
            <div className='question-container-after'></div>
            <h3 className="question">{currentQuestion.question} </h3>
          </div>
          <div className="answer-container">
            <div onClick={()=>{this.checkAnswer(0)}} ><p className="answer-choice choice-a">{currentQuestion.answers[0]}</p></div>
            <div onClick={()=>{this.checkAnswer(1)}} ><p className="answer-choice choice-b">{currentQuestion.answers[1]}</p></div>
            <div onClick={()=>{this.checkAnswer(2)}} ><p className="answer-choice choice-c">{currentQuestion.answers[2]}</p></div>
            <div onClick={()=>{this.checkAnswer(3)}} ><p className="answer-choice choice-d">{currentQuestion.answers[3]}</p></div>
          </div>
          {answerAlert}
        </div>
      );
    }
  }
}

export const mapStateToProps = state => ({
  category: state.category,
  questions: state.questions,
  currentQuestion: state.currentQuestion
});

export const mapDispatchToProps = dispatch => ({
  addPoints: () => dispatch(addPoints())
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Question);

// Categories.propTypes = {
//   handleCategory: PropTypes.func.isRequired,
// };
