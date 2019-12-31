export const RECEIVE_POLLS = 'RECEIVE_POLLS'

export function receivePolls(questions) {
  return {
    type: RECEIVE_POLLS,
    questions
  }
}