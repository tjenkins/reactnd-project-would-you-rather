import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import QuestionAuthor from './QuestionAuthor'

class QuestionItem extends Component {

  render() {
    const { question } = this.props

    return (
      <Link
        to={`/questions/${question.id}`}
        className="question-item"
      >
        <QuestionAuthor qid={question.id}/>
        <div className="question-item-content">
          <h3>Would you rather...</h3>
          <div className="question-item-option-container">
            <div className="question-item-option">
              { question.optionOne.text}
            </div>
            <div>OR</div>
            <div className="question-item-option">
              { question.optionTwo.text}
            </div>
          </div>
        </div>
      </Link>
    )
  }
}

function mapStateToProps ({ questions, users }, { id }) {
  return {
    question: questions[id],
  }
}

export default connect(mapStateToProps)(QuestionItem)