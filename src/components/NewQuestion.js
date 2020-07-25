import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { handleCreateQuestion } from '../actions/questions'

class NewQuestion extends Component {
  state = {
    optionOne: '',
    optionTwo: ''
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const question = {
      optionOneText: this.state.optionOne,
      optionTwoText: this.state.optionTwo
    }
    this.props.dispatch(handleCreateQuestion(question))
      .then(() => this.setState({
        optionOne: '',
        optionTwo: ''
      }))
      .then(() => this.props.history.push('/'))
  }

  handleChange = (e) => {
    if (e.target.name === 'option-one') {
      this.setState({ optionOne: e.target.value})
    }
    if (e.target.name === 'option-two') {
      this.setState({optionTwo: e.target.value})
    }
  }

  render() {
    const { optionOne, optionTwo } = this.state

    return (
      <div className="new-question-container">
        <h2>New Question</h2>
        <div className="new-question-content">
          <h3>Would You Rather...</h3>
          <div>
            <textarea
              type="text"
              name="option-one"
              id="option-one"
              value={optionOne}
              onChange={this.handleChange}
              className="new-question-input"
              />
            <div>OR</div>
            <textarea
              type="text"
              name="option-two"
              id="option-two"
              value={optionTwo}
              onChange={this.handleChange}
              className="new-question-input"
            />
          </div>
          <button
            onClick={this.handleSubmit}
            disabled={optionOne === '' || optionTwo === ''}
            className="btn-submit-question"
          >
            Submit
          </button>
        </div>
      </div>
    )
  }
}

export default withRouter(connect()(NewQuestion))