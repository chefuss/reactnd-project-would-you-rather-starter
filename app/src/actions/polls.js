import { saveQuestionAnswer } from '../utils/api'

export const RECEIVE_POLLS = 'RECEIVE_POLLS'
export const ADD_ANSWER = 'ADD_ANSWER'

export function receivePolls(questions) {
  return {
    type: RECEIVE_POLLS,
    questions
  }
}

export function addAnswer({ authedUser, qid, answer }) {
  return {
    type: ADD_ANSWER,
    qid,
    authedUser,
    answer
  }
}

export function handleAddAnswer(info) {
  return (dispatch) => {
    dispatch(addAnswer(info))
    return saveQuestionAnswer(info)
      .catch((e) => {
        console.warn('Error in handleAddAnswer: ', e)
        dispatch(addAnswer(info))
        alert('There was an error adding the answer. Try again')
      })
  }
}