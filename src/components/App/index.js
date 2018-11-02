import React, { Component } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import Categories from '../../containers/Categories';
import DailyQuestion from '../../containers/DailyQuestion';
import TriviaGame from '../../containers/TriviaGame';

const App = props => {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={ Home } />
        <Route exact path='/categories' component={ Categories } />
        <Route exact path='/dailyquestion' component={ DailyQuestion } />
        <Route exact path='/triviagame' component={ TriviaGame } />
        <Redirect to='/' />
      </Switch>
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