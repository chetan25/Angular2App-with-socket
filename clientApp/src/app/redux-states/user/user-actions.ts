import { Action } from '@ngrx/store';
import { UserState,User } from './user-state';

export const LOGIN: string = 'LOGIN';
export const LOGOUT: string = 'LOGOUT';

export class UserActions implements Action {
    constructor(
      public type: string,
      public payload: User
    ) {}
}