import React, { Component } from 'react'
import { connect } from 'react-redux'
import QuestionItem from './QuestionItem'

class QuestionList extends Component {

  state = {
    displayAnswered: false
  }

  handleChangeDisplayedQuestions = (e) => {
    e.preventDefault()
    if (e.target.name === 'show-answered') {
      this.setState(() => ({displayAnswered: true}))
    }
    if (e.target.name === 'show-unanswered') {
      this.setState(() => ({displayAnswered: false}))
    }
  }

  render() {
    const { questions } = this.props
    const { displayAnswered } = this.state

    return (
      <div className="question-list-wrapper">
        <div className="question-list-header">
          <button
            className={`btn-question-list-header ${displayAnswered === true ? 'btn-question-list-selected' : ''}`}
            name='show-answered'
            onClick={this.handleChangeDisplayedQuestions}
            >
            Answered Questions
          </button>
          <button
            className={`btn-question-list-header ${displayAnswered === false ? 'btn-question-list-selected' : ''}`}
            name='show-unanswered'
            onClick={this.handleChangeDisplayedQuestions}
          >
            Unanswered Questions
          </button>
        </div>
        <div className="question-list">
          {questions.map((question) => (
            question.hasAnswered === displayAnswered && (
              <QuestionItem key={question.id} id={question.id} />
            )
          ))}
        </div>
      </div>
    )
  }
}

function mapStateToProps ({ questions, users, authedUser }) {
  const user = users[authedUser]

  return {
    questions: Object.keys(questions).map((id) => ({
      id,
      hasAnswered:  Object.keys(user.answers).includes(id),
      timestamp: questions[id].timestamp
    })).sort((a, b) => b.timestamp - a.timestamp)
  }
}

export default connect(mapStateToProps)(QuestionList)