import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleAnswerQuestion } from '../actions/questions'

class QuestionDetailUnanswered extends Component {
  state = {
    selectedOption: 'none'
  }

  handleSelectAnswer = (e) => {
    if (e.target.id === 'option-one') {
      this.setState({ selectedOption: 'optionOne'})
    }
    if (e.target.id === 'option-two') {
      this.setState({ selectedOption: 'optionTwo'})
    }
  }

  handleSubmitAnswer = (e) => {
    e.preventDefault()

    const { id, dispatch } = this.props
    const { selectedOption } = this.state

    dispatch(handleAnswerQuestion({ qid: id, answer: selectedOption }))
  }

  render() {
    const { selectedOption } = this.state
    const {
      optionOneText,
      optionTwoText
    } = this.props

    return (
          <div className="question-item-content">
            <h3>Would You Rather...</h3>
            <div className="question-item-option-container">
              <div
                id="option-one"
                onClick={this.handleSelectAnswer}
                className={`question-item-option ${selectedOption === 'optionOne' ? 'question-item-selected' : ''}`}
              >
                {optionOneText}
              </div>
              <div className="question-or">OR</div>
              <div
                id="option-two"
                onClick={this.handleSelectAnswer}
                className={`question-item-option ${selectedOption === 'optionTwo' ? 'question-item-selected' : ''}`}
              >
                {optionTwoText}
              </div>
            </div>
              <button
                onClick={this.handleSubmitAnswer}
                className="btn-submit-question"
                disabled={selectedOption === 'none'}
              >
                Submit
              </button>
          </div>
    )
  }
}

function mapStateToProps ({ questions }, { id }) {
  const question = questions[id]

  return {
    optionOneText: question.optionOne.text,
    optionTwoText: question.optionTwo.text,
  }
}

export default connect(mapStateToProps)(QuestionDetailUnanswered)