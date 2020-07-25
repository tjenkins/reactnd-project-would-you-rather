import { RECEIVE_USERS } from '../actions/users'
import { ANSWER_QUESTION, CREATE_QUESTION } from '../actions/questions'

export default function users (state = {}, action) {
  switch (action.type) {
    case RECEIVE_USERS :
      return {
        ...state,
        ...action.users
      }
    case ANSWER_QUESTION :
      const { authedUser, qid, answer } = action

      return {
        ...state,
        [authedUser]: {
          ...state[authedUser],
          answers: {
            ...state[authedUser].answers,
            [qid]: answer
          }
        }
      }
    case CREATE_QUESTION :
      return {
        ...state,
        [action.question.author]: {
          ...state[action.question.author],
          questions: state[action.question.author].questions.concat([action.question.id])
        }
      }
    default :
      return state
  }
}