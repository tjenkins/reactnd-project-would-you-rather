import React, { Component } from 'react'
import { connect } from 'react-redux'
import LeaderboardItem from './LeaderboardItem'
import { withUserScore } from '../utils/helpers'

class LeaderboardList extends Component {
  render() {
    const { users } = this.props

    return (
      <div className="leaderboard-list">
        {users.map((user) => (
          <LeaderboardItem key={user.id} id={user.id} />
          )
        )}
      </div>
    )
  }
}

function mapStateToProps ({ users }) {
  const usersArray = Object.keys(users).map((id) => withUserScore(users[id]))
    .sort((a, b) => b.score - a.score)

  return {
    users: usersArray
  }
}

export default connect(mapStateToProps)(LeaderboardList)