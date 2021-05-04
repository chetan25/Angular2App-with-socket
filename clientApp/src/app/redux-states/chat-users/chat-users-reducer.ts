import { USER_LOG_OUT, USER_LOG_IN, ChatUsersAction } from './chat-users-actions';
import { loggedUserState, loggedUser } from './chat-users-state';

const initialState:loggedUser = {
  userName: null,
  userId: null,
};

export function loggedUserReducer(
  state:loggedUser = initialState, action: ChatUsersAction):Array<loggedUser>   {
  switch (action.type) {
		case USER_LOG_IN:
          // Create a new state from payload
          return [Object.assign({}, state, action.payload)];
		case USER_LOG_OUT:
		  return [Object.assign({}, initialState)];
		default:
		  return [state];
	} 
};