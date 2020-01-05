import { SET_AUTHED_USER } from '../actions/authedUser';

export default function setAuthedUser(state = null, action) {
  console.log(action)
  switch(action.type) {
    case SET_AUTHED_USER :
      return action.id
    default:
      return state;
  } 
}