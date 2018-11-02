import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import { clearCategory } from '../../actions';
import { connect } from 'react-redux';

export class Home extends Component {

//not sure if this is working, want to clear actegory when we return to the beginning so that we go through the category again
  resetCategory = () => {
    this.props.clearCategory()
  }

  render() {
    return(
      <div>
        <h1 className="title">Nickle Trivia</h1>
        <NavLink className='daily-trivia-btn' to='/categories'>Trivia of the Day</NavLink>
        <NavLink className='trivia-game-btn' to='/categories'>Trivia Game</NavLink>
      </div>
    )
  }
}

export const mapStateToProps = state => ({
  category: state.category
})

export const mapDispatchToProps = dispatch => ({
  clearCategory: () => dispatch(clearCategory())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);