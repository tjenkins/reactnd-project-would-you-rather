import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withUserScore } from '../utils/helpers'

class LeaderboardItem extends Component {
  render() {
    const {
      name,
      answered,
      asked,
      score,
      avatarURL
    } = this.props

    return (
      <div className="leaderboard-item">
        <div className="leaderboard-avatar-container">
          <img className="leaderboard-avatar" src={avatarURL} alt="avatar"/>
        </div>
        <div className="leaderboard-user-info">
          <h2 className="leaderboard-name">{name}</h2>
          <p>Answered: {answered}</p>
          <p>Asked: {asked}</p>
        </div>
        <div className="leaderboard-score-container">
          <div className="leaderboard-score-header">
            Score
          </div>
          <div className="leaderboard-score">
            {score}
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ users }, { id }) => withUserScore(users[id])

export default connect(mapStateToProps)(LeaderboardItem)