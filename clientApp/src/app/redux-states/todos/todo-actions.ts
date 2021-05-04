import { Action } from '@ngrx/store';
import { TodoState, Todo } from './todo-state';

export const ADD_TODO: string = 'ADD-TODO';
export const DELETE_TODO: string = 'DELETE-TODO';
export const EDIT_TODO: string = 'EDIT-TODO';

export class TodoAction implements Action {
	constructor(
      public type: string,
      public payload: Todo
	) {}
}

