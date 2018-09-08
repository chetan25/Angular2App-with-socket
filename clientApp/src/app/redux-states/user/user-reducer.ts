import { LOGIN, LOGOUT, UserActions } from './user-actions';
import { UserState, User } from './user-state';

const initialState:User = {
  userName: null,
  name: null,
  email: null,
  userId: null,
};

function setLocalStorage(data) {
  if (typeof(Storage) !== "undefined") {
    localStorage.setItem("userId", data.userId);
    localStorage.setItem("userName", data.userName);
    localStorage.setItem("userEmail", data.email);
  } else {
    console.log('Sorry local storage not supported');
  }
}

function removeLocalStorage() {
  localStorage.removeItem("userId");
  localStorage.removeItem("userName");
  localStorage.removeItem("userEmail");
}

export function userReducer(state:User = initialState, action: UserActions):User {
	switch (action.type) {
		case LOGIN:
          // Create a new state from payload
          setLocalStorage(action.payload);
          return Object.assign({}, state, action.payload);
		case LOGOUT:
		  removeLocalStorage();
		  return Object.assign({}, initialState);
		default:
		  return state;
	}
};