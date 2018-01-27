import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { tokenNotExpired } from 'angular2-jwt';

@Injectable()
export class RegisterService {
  authToken: any;
  user: any;
  testMode:boolean;
  url:string;
  constructor(private http: Http) { 
   this.testMode = true;
   this.url = this.testMode ? 'http://localhost:3020/' : 'https://peaceful-wave-48941.herokuapp.com/';
  }
  
  //for deployment remove 'http://localhost:3020/'

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
}

