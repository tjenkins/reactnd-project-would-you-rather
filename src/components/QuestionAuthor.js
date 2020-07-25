import React, { Component } from 'react'
import { connect } from 'react-redux'

class QuestionAuthor extends Component {
  render() {
    const { author } = this.props
    return (
      <div className="question-item-author-container">
        <span>asked by</span>
        <img className="avatar" src={author.avatarURL} alt="author avatar"/>
        <span>{author.name}</span>
      </div>
    )
  }
}

function mapStateToProps ({ users, questions }, { qid }) {
  return {
    author: users[questions[qid].author]
  }
}

export default connect(mapStateToProps)(QuestionAuthor)