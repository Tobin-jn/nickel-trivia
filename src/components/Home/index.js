import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import { clearCategory } from '../../actions';
import { connect } from 'react-redux';
import './Home.css'

class Home extends Component {
  render() {
    return(
      <div className='landing-page'>
        <h1 className="title">Welcome to <span className='trivia-text'>Nickel Trivia!</span></h1>
        <img className='nickel-logo' src={ require('../../images/nickel.png') } alt="Nickel Jar Logo" />
        <div className="btn-container">
          <NavLink  to='/dailyquestion'>
            <button className='daily-trivia-btn btn'>Trivia of the Day</button>
          </NavLink>
          <NavLink  to='/triviagame'>
            <button className='trivia-game-btn btn'>Trivia Game</button>
          </NavLink>
        </div>
      </div>
    )
  }
}

export default Home
