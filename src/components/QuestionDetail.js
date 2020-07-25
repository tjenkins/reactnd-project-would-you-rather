import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect, withRouter } from 'react-router-dom'
import QuestionAuthor from './QuestionAuthor'
import QuestionDetailAnswered from './QuestionDetailAnswered'
import QuestionDetailUnanswered from './QuestionDetailUnanswered'

class QuestionDetail extends Component {

  render() {
    const {
      error,
      id,
      hasAnswered
    } = this.props

    return (
      error === true ? <Redirect to='/404' />
      : (
        <div className="question-detail-container">
          <div className="question-item">
          <QuestionAuthor qid={id}/>
          {hasAnswered === true
            ? <QuestionDetailAnswered id={id} />
            : <QuestionDetailUnanswered id={id} />
          }
          </div>
        </div>
      )
    )
  }
}

function mapStateToProps ({ users, authedUser, questions}, props) {
  const { question_id } = props.match.params
  const question = questions[question_id]

  return {
    id: question_id,
    hasAnswered: users[authedUser].answers[question_id] !== undefined,
    error: question === undefined
  }
}

export default withRouter(connect(mapStateToProps)(QuestionDetail))