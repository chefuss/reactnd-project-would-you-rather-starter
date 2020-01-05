import { RECEIVE_USERS } from '../actions/users'
import { ADD_ANSWER, ADD_QUESTION } from '../actions/polls'

export default function users (state = {}, action ) {
  switch (action.type) {
    case RECEIVE_USERS:
      return {
        ...state,
        ...action.users
      };
    case ADD_ANSWER:
      return {
        ...state,
        [action.authedUser]: {
          ...state[action.authedUser],
          answers: {
            ...state[action.authedUser].answers,
            [action.qid] : action.answer
          }
        }
      }
    case ADD_QUESTION:
      return {
        ...state,
        [action.question.authedUser]: {
          ...state[action.question.author],
          questions: state[action.question.author].questions.push(action.question.id)
        }
      };
    default:
      return state;
  }
}