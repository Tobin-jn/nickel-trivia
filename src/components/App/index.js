import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Home from '../Home'
import Categories from '../../containers/Categories';
import TriviaGame from '../../containers/TriviaGame';
import DailyQuestion from '../../containers/DailyQuestion';
import './App.css';

const App = props => {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={ Home } />
        <Route exact path='/dailyquestion' component={ DailyQuestion } />
        <Route exact path='/triviagame' component={ TriviaGame } />
        <Redirect to='/' />
      </Switch>
    </div>
  );
}

export default App;