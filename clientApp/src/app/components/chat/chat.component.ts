import { Component, OnInit, OnDestroy } from '@angular/core';
import { SocketConnectionService } from '../../services/socket-connection.service';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit, OnDestroy {
  user:Array<any>;
  users: Array<any>;
  connection;
  constructor(
    private flashMessagesService: FlashMessagesService,
    private socket: SocketConnectionService
  ) { }

  ngOnInit() {
  	this.user = JSON.parse(localStorage.getItem("user"));
  	//get the logged in user
    this.socket.getJoinedUsers(this.user)
      .subscribe(socketData => {
        this.users = socketData['data'];
        if (
          socketData['newUserNameJoined'] &&
          this.user['name'] !== socketData['newUserNameJoined']
        ) {
            this.flashMessagesService.show(
              'User ' + socketData['newUserNameJoined'] + ' joined.',
              {
                cssClass: 'alert-success',
                timeout: 2000
              }
            );
        }
        if (
          socketData['userNameLeft'] &&
          this.user['name'] !== socketData['userNameLeft']
        ) {
            this.flashMessagesService.show(
              'User ' + socketData['userNameLeft'] + ' left.',
              {
                cssClass: 'alert-success',
                timeout: 2000
              }
            );
        }
      });
    //get the message from user's
    this.socket.getMessage()
      .subscribe(message => {
        //todo to show message in a modal
        console.log(message);
      });  
  }

  /**
  * Open chat for a user
  *
  * @param object user
  */
  openChat(user) {
    //todo: to open a pop up for chat
    this.socket.sendMessage(
      user['userId'],
      'test'
    );
  }

  ngOnDestroy() {
    //this.connection.unsubscribe();
  }
}
