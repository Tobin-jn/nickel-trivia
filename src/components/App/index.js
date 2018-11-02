import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './App.css';
import Categories from '../../containers/Categories';
import DailyQuestion from '../../containers/DailyQuestion';
import TriviaGame from '../../containers/TriviaGame';

const App = props => {
  return (
    <div className="App">
      <h1 className="title">Nickle Trivia</h1>
      
      <NavLink className='trivia-of-day-btn' to='/dailyquestion'>
        <button className="daily-trivia-btn">Trivia of the Day</button>
      </NavLink>
      <NavLink className='question-generator-btn' to='/categories'>
        <button className="trivia-game">Trivia Game</button>
      </NavLink>
      
      <Route exact path='/categories' component={ Categories } />
      <Route exact path='/dailyquestion' component={ DailyQuestion } />
      <Route exact path='/triviagame' component={ TriviaGame } />

    </div>
  );
}

export default App;


        //   Trivia Question Generator
          

// <NavLink to='/about'>About</NavLink>

// export default withRouter(
//   connect(
//     null,
//     mapDispatchToProps
//   )(App)
// );