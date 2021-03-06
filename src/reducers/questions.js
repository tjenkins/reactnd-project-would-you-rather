import { RECEIVE_QUESTIONS, CREATE_QUESTION, ANSWER_QUESTION } from '../actions/types'

export default function questions (state = {}, action) {
  switch (action.type) {
    case RECEIVE_QUESTIONS :
      return {
        ...state,
        ...action.questions
      }
    case CREATE_QUESTION :
      return {
        ...state,
        [action.question.id]: action.question
      }
    case ANSWER_QUESTION :
      const { authedUser, qid, answer} = action

      return {
        ...state,
        [qid]: {
          ...state[qid],
          [answer]: {
            ...state[qid][answer],
            votes: state[qid][answer].votes.concat([authedUser])
          }
        }
      }
    default :
      return state
  }
}