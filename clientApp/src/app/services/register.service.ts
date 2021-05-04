import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { tokenNotExpired } from 'angular2-jwt';
import { Store } from '@ngrx/store';
import { LOGIN, LOGOUT, UserActions } from '../redux-states/user/user-actions';
import { UserState, User } from '../redux-states/user/user-state';
import { SocketConnectionService } from './socket-connection.service';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class RegisterService {
  authToken: any;
  user: any;
  testMode:boolean;
  url:string;
  userState$: Observable<UserState>;
  constructor(
    private http: Http,
    private store: Store<UserState>,
    private socket: SocketConnectionService
  ) { 
    this.testMode = false;
    this.url = this.testMode ? 'http://localhost:3020/' : 'https://share-todo.herokuapp.com/';
  }
  
  /** 
  * Register user
  *
  * @param {Object} user
  * @returns Json
  */
  registerUser(user) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
     
    return this.http.post(this.url + 'api/register', user, {headers: headers}).map(res => res.json());
  }
  
  /**
  * Signs user in
  *
  * @param {Object} user
  * @returns Json
  */
  onLogin(user) { 
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    return this.http.post(this.url + 'api/login', user, {headers: headers}).map(res => res.json());
  }
  
  /**
  * Signs out the user
  */
  logout() {
    localStorage.clear();
    this.authToken = null;
    this.user = null;
  }

  /**
  * Sore the token/user in local storage
  *
  * @param {string} token
  * @param {Object} user
  */
  storeLocalStorage(token, user) {
    localStorage.setItem('id_token', token);
    localStorage.setItem('user', JSON.stringify(user));
    this.authToken = token;
    this.user = user;
  }
  
  /**
  * Get's the user profile who is logged in
  *
  * @returns Json
  */
  getUserProfile() {
    let headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type', 'application/json');
     
    return this.http.get(this.url + 'api/profile', {headers: headers}).map(res => res.json());
  }

  /**
  * Sets the token for logged in user
  */
  loadToken() {
    this.authToken = localStorage.getItem('id_token'); 
  }

  /**
  * Checks if the token is expired or not
  *
  * @returns {bool} 
  */
  loggedIn() {
    return tokenNotExpired('id_token');
  }

  /**
  * join the user to the socket channel
  * 
  * @param {Object} logedUser
  */
  joinUserToChannel(logedUser) {
    //join the socket channel
    this.socket.joinChannel(logedUser); 
  }

  /**
  * update the user store with the logged in user
  *
  * @param {Object} logedUser
  */
  addUserToStore(logedUser) {
    //call store to store state
    this.store.dispatch(new UserActions('LOGIN', logedUser));  
  }
}

