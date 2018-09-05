import { ADD_TODO, DELETE_TODO, EDIT_TODO, TodoAction } from './todo-actions';
import { TodoState, Todo } from './todo-state';

const initialState:Array<Todo> = [{
  id: null,
  userId: null,
  title: null,
  completed: null,
  creationDate: null,
  description: null,
}];

export function todoReducer(
	state:Array<Todo> = initialState,
	action: TodoAction
):Array<Todo> {
	return state;
	// switch (action.type) {
	// 	case ADD_TODO:
 //          // Create a new state from payload
 //          return Object.assign({}, state, action.payload);
	// 	case DELETE_TODO:
	// 	  return Object.assign({}, initialState);
	// 	case EDIT_TODO:
	// 	  return Object.assign({}, initialState);
	// 	default:
	// 	  return state;
	// }
};