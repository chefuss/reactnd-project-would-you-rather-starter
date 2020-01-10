import { SET_AUTHED_USER, REMOVE_AUTHED_USER } from '../actions/authedUser';

export default function setAuthedUser(state = null, action) {
  switch(action.type) {
    case SET_AUTHED_USER :
      return action.id
    case REMOVE_AUTHED_USER :
      console.log(action);
      return null
    default:
      return state;
  } 
}