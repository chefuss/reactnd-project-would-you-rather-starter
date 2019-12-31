import { getInitialData } from '../utils/api'
import { receiveUsers } from './users'
import { receivePolls } from './polls'
import { setAuthedUser } from './authedUser'

//todo: change this to get the value from the login page
const AUTHED_ID = 'sarahedo';

export function handleInitialData() {
  return (dispatch) => {
    return getInitialData()
      .then(({users, questions }) => {
        dispatch(receiveUsers(users))
        dispatch(receivePolls(questions))
        dispatch(setAuthedUser(AUTHED_ID));
      })
  }
}