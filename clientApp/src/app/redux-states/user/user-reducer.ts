import { LOGIN, LOGOUT, UserActions } from './user-actions';
import { UserState, User } from './user-state';

const initialState:User = {
  userName: null,
  name: null,
  email: null,
  userId: null,
};

export function userReducer(state:User = initialState, action: UserActions):User {
	switch (action.type) {
		case LOGIN:
          console.log(action.payload, 'action');
          console.log(state, 'state')
          // Create a new state from payload
          return Object.assign({}, state, action.payload);
		case LOGOUT:
		  return state;
		default:
		  return state;
	}
};