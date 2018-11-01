import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './App.css';
import Categories from '../../containers/Categories';
import DailyQuestion from '../../containers/DailyQuestion';
import TriviaGame from '../../containers/TriviaGame';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className="title">Nickle Trivia</h1>
        <button className="daily-trivia-btn">Trivia of the Day</button>
        <button className="trivia-game">Trivia Game</button>
        <Categories />
        <DailyQuestion />
        <TriviaGame />

      </div>
    );
  }
}

export default App;

        // <NavLink className='trivia-of-day-btn' to='/dailycategory'>
        //   Daily Trivia Question
        // </NavLink>
        // <NavLink className='question-generator-btn' to='/categories'>
        //   Trivia Question Generator
          
        // </NavLink>

// <NavLink to='/about'>About</NavLink>
