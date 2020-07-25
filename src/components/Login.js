import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setAuthedUser } from '../actions/authedUser'

class Login extends Component {

  handleClick = (id) => {
    this.props.dispatch(setAuthedUser(id))
  }

  getUserList = (users) => (
    users.map((user) => (
      <li
        className='login-item'
        key={user.id}
        onClick={() => this.handleClick(user.id)}
      >
        <img className='avatar' src={user.avatarURL} alt="avatar"/>
        {user.name}
      </li>
    ))
  )

  render() {
    const { users } = this.props

    return (
      <div className='login-container'>
        <h2>Select an account</h2>
        <ul className='login-list'>
          {this.getUserList(users)}
        </ul>
      </div>
    )
  }
}

function mapStateToProps ({ users }) {
  return {
    users: Object.keys(users).map((user) => ({
      id: users[user].id,
      name: users[user].name,
      avatarURL: users[user].avatarURL
    }))
  }
}

export default connect(mapStateToProps)(Login)