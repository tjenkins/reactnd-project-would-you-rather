import React, { Component } from 'react'
import { connect } from 'react-redux'

class QuestionDetailAnswered extends Component {

  render() {
    const {
      optionOneText,
      optionOneVotes,
      optionTwoText,
      optionTwoVotes,
      answer,
    } = this.props

    const totalVotes = optionOneVotes + optionTwoVotes

    return (
          <div className="question-item-content">
            <h3>Would You Rather...</h3>
            <div className="question-item-option-container">
              <div className="question-chosen-callout">{answer === 'optionOne' ? 'You picked' : '' }</div>
              <div></div>
              <div className="question-chosen-callout">{answer === 'optionTwo' ? 'You picked' : '' }</div>
              <div
                id="option-one"
                className={
                  `question-item-option
                  ${answer === 'optionOne' ? 'question-item-selected' : ''}
                  question-item-option-disabled`
                }
                >
                {optionOneText}
              </div>
              <div className="question-or">OR</div>
              <div
                id="option-two"
                className={
                  `question-item-option
                  ${answer === 'optionTwo' ? 'question-item-selected' : ''}
                  question-item-option-disabled`
                }
                >
                {optionTwoText}
              </div>
              <div>
                <p>{optionOneVotes} out of {totalVotes}</p>
                <p>({Math.floor(optionOneVotes/totalVotes*100)}%)</p>
              </div>
              <div></div>
              <div>
                <p>{optionTwoVotes} out of {totalVotes}</p>
                <p>({Math.floor(optionTwoVotes/totalVotes*100)}%)</p>
              </div>
            </div>
          </div>
    )}
}

function mapStateToProps ({ users, authedUser, questions}, { id }) {
  const question = questions[id]
  const answer = users[authedUser].answers[id]

  return {
    optionOneText: question.optionOne.text,
    optionOneVotes: question.optionOne.votes.length,
    optionTwoText: question.optionTwo.text,
    optionTwoVotes: question.optionTwo.votes.length,
    answer,
  }
}

export default connect(mapStateToProps)(QuestionDetailAnswered)