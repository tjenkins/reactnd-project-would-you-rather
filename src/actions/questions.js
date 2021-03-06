import { saveQuestion, saveQuestionAnswer } from '../utils/api'
import { RECEIVE_QUESTIONS, CREATE_QUESTION, ANSWER_QUESTION } from './types'

export function receiveQuestions (questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions
  }
}

function createQuestion (question) {
  return {
    type: CREATE_QUESTION,
    question
  }
}

function answerQuestion ({ authedUser, qid, answer }) {
  return {
    type: ANSWER_QUESTION,
    authedUser,
    qid,
    answer
  }
}

export function handleCreateQuestion (question) {
  return (dispatch, getState) => {
    const { authedUser } = getState()

    return saveQuestion({
      optionOneText: question.optionOneText,
      optionTwoText: question.optionTwoText,
      author: authedUser
    })
      .then((question) => dispatch(createQuestion(question)))
  }
}

export function handleAnswerQuestion ({ qid, answer }) {
  return (dispatch, getState) => {
    const { authedUser } = getState()
    const info = {
      authedUser,
      qid,
      answer
    }

    return saveQuestionAnswer(info)
      .then(() => dispatch(answerQuestion(info)))
  }
}