import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NavLink, withRouter } from 'react-router-dom'
import { setAuthedUser } from '../actions/authedUser'

class Nav extends Component {

  handleLogout = () => {
    this.props.history.push('/')
    this.props.dispatch(setAuthedUser(null))
  }

  render() {
    const { name, avatarURL } = this.props

    return (
      <div className="nav-wrapper">
        <div className="nav-container">
          <div className="nav-group-left">
            <ul>
              <NavLink className='nav-item' activeClassName='nav-item-selected' to='/' exact >Home</NavLink>
              <NavLink className='nav-item' activeClassName='nav-item-selected' to='/leaderboard'>Leaderboard</NavLink>
              <NavLink className='nav-item' activeClassName='nav-item-selected' to='/add'>New Question</NavLink>
            </ul>
          </div>
          <div className="nav-group-right">
            <span>{name}</span>
            <img className="avatar" src={avatarURL} alt="avatar"/>
            <div className="nav-btn-logout nav-item" onClick={this.handleLogout}>Logout</div>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps ({ users, authedUser }) {
  return {
    name: users[authedUser].name,
    avatarURL: users[authedUser].avatarURL
  }
}

export default withRouter(connect(mapStateToProps)(Nav))