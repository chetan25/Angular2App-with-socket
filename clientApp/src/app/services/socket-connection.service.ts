import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import * as io from 'socket.io-client';

@Injectable()
export class SocketConnectionService {
  private testMode = false;
  private url;
  socket:SocketIOClient.Socket;
  constructor() { 
    this.url = this.testMode ? 'http://localhost:3020/' : 'https://peaceful-wave-48941.herokuapp.com/';
  }

  /**
  * Return the connected socket
  */
  getSocket() {
  	return this.socket;
  }

  /**
  * Connect to a socket
  */
  connect() {
    //connect to socket io
	  this.socket = io.connect(this.url,  {
	    'reconnection': true,
	    'reconnectionDelay': 500,
	    'reconnectionAttempts': 10
	  });
  }

  /**
  * Join the user to a socket channel
  */
  joinChannel(data) {
   //join the public channel
    this.connect();
    this.socket.emit("joinPublicChannel", {
      'channel': 'public',
      'userId': data['userId'],
      'userName': data['name']
    });
  }

  /**
  * Send messasge to user
  *
  * @param string userId
  * @param string message
  */
  sendMessage(userId:string, message:string) {
    this.socket.emit('sendMessage', {
      'userId': userId,
      'message': message
    });
  }
 
  /**
  * To ge the messages for the user
  *
  * @return Observable
  */
  getMessage():Observable<any[]> {
    let observable = new Observable<any[]>(observer => {
      //receive message when user joined 
      this.socket.on("receiveMessage", (data) => {
        observer.next(data);
      });
      return () => {
        this.socket.disconnect();
      }    
    });
    return observable;
  }

  /**
  * Get the emitted value back from the server
  * of the total joined users
  *
  * @returns Observable
  */
  getJoinedUsers(data):Observable<any[]> {
    if (!this.socket) {
      this.joinChannel(data);
    }
  	this.socket.emit("getJoinedUsers", {
      'channel': 'public'
    });
  	let observable = new Observable<any[]>(observer => {
      //receive message when user joined 
      this.socket.on("userOnPublicChannel", (data) => {
        observer.next(data);
      });
      return () => {
      	this.socket.disconnect();
      }    
    });

    return observable;
  }
}
