import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Todo } from '../models/todo';
import { Store } from '@ngrx/store';
// import { TodoState, Todo } from '../redux-states/todos/todo-state';
import { ADD_TODO, DELETE_TODO, EDIT_TODO, TodoAction } from '../redux-states/todos/todo-actions';

@Injectable()
export class TodoDataService {
  authToken: any;	
  testMode:boolean;
  url:string;
  constructor(private http:Http) {
   this.testMode = false;
   this.url = this.testMode ? 'http://localhost:3020/' : 'https://share-todo.herokuapp.com/';
  }

 /**
  * Get Todos for user, by default for user 1
  *
  * @returns Json
  */
  getToDos(userId:string){
  	let headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type', 'application/json');
    //return this.http.get('https://jsonplaceholder.typicode.com/todos?userId=' + userId).map(res => res.json());
    return this.http.get(
      this.url + 'api/todo/' + userId,
      {headers: headers}
    ).map(res => res.json());
  }

  /**
   * add a todo to db
   * 
   * @param array todo
   * 
   * @returns Json
  **/ 
  addTodo(todo:Array<any>) {
    console.log(todo);
	  let headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type', 'application/json');

	  return this.http.post(
      this.url + 'api/todo',
      todo,
      {headers: headers}
    ).map(res => res.json());
  }

  /**
   * save the edit todo
   *
   * @param array todo
   *
   * @returns Json
  **/ 
  editTodo(todo:Array<any>) {
    let headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type', 'application/json');

    return this.http.put(
      this.url + 'api/todo',
      todo,
      {headers: headers}
    ).map(res => res.json());
  }

  /**
   * Delete the selected todo
   *
   * @param number id
  */
  deleteTodo(id: number) {
    console.log(id);
    let headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type', 'application/json');

    return this.http.delete(
      this.url + 'api/todo/' + id,
      {headers: headers}
    ).map(res => res.json());
  }

  /**
  * Sets the token for logged in user
  */
  loadToken() {
    this.authToken = localStorage.getItem('id_token'); 
  }
}
