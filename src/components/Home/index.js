import React from 'react'
import { NavLink } from 'react-router-dom';


const Home = () => {
  return(
    <div>
      <h1 className="title">Nickle Trivia</h1>
      <NavLink className='daily-trivia-btn' to='/categories'>Trivia of the Day</NavLink>
      <NavLink className='trivia-game-btn' to='/categories'>Trivia Game</NavLink>
    </div>
  )
}

export default Home