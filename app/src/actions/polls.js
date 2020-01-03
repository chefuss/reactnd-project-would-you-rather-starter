import { saveQuestionAnswer, saveQuestion } from '../utils/api'

export const RECEIVE_POLLS = 'RECEIVE_POLLS'
export const ADD_ANSWER = 'ADD_ANSWER'
export const ADD_QUESTION = 'ADD_QUESTION'

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

export function addQuestion ({question}) {
  return {
    type: ADD_QUESTION,
    question
  }
}

export function handleAddQuestion(optionOneText, optionTwoText) {
  return (dispatch, getState) => {
    const { authedUser } = getState();
    return saveQuestion({
      optionOneText,
      optionTwoText,
      author: authedUser
    }).then((question) => dispatch(addQuestion(question)));
  };
}