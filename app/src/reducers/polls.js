import { RECEIVE_POLLS, ADD_ANSWER, ADD_QUESTION } from '../actions/polls';

export default function polls(state = {}, action) {
  switch (action.type) {
    case RECEIVE_POLLS:
      return {
        ...state,
        ...action.questions
      }
    case ADD_ANSWER:
      console.log(action)
      return {
        ...state,
        [action.qid]: {
          ...state[action.qid],
          [action.answer]: {
            ...state[action.qid][action.answer],
            votes: state[action.qid][action.answer].votes.concat([
              action.authedUser
            ])
          }
        }
      }
    case ADD_QUESTION: 
    const { question } = action
      return {
        ...state,
        [action.question.id] : question
      }
    default:
      return state;
  }
}
