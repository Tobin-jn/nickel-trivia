import React, { Component } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import Categories from '../../containers/Categories';
import DailyQuestion from '../../containers/DailyQuestion';
import TriviaGame from '../../containers/TriviaGame';
import Home from '../Home'

const App = props => {
  return (
    <div className="App">
        <Route exact path='/' component={ Home } />
        <Route exact path='/dailyquestion' component={ DailyQuestion } />
        <Route exact path='/triviagame' component={ TriviaGame } />
        <Redirect to='/' />

    </div>
  );
}

export default App;

      // <Switch>


        //   Trivia Question Generator
          

// <NavLink to='/about'>About</NavLink>

// export default withRouter(
//   connect(
//     null,
//     mapDispatchToProps
//   )(App)
// );