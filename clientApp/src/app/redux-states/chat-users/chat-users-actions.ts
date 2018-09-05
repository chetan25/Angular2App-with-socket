import { Action } from '@ngrx/store';
import { loggedUser, loggedUserState } from './chat-users-state';

export const USER_LOG_OUT: string = 'User Loged In';
export const USER_LOG_IN: string = 'User Loged Out';

export class ChatUsersAction implements Action {
	constructor(
		public type: string,
		public payload: loggedUser
	) {}
}