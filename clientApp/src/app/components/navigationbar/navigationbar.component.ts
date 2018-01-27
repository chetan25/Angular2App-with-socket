import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../../services/register.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router} from '@angular/router';
import { SocketConnectionService } from '../../services/socket-connection.service';

@Component({
  selector: 'app-navigationbar',
  templateUrl: './navigationbar.component.html',
  styleUrls: ['./navigationbar.component.css']
})
export class NavigationbarComponent implements OnInit {
  socketIo;
  constructor(
    private registerService: RegisterService,
    private flashMessagesService: FlashMessagesService,
    private router : Router,
    private socket: SocketConnectionService
  ) { }

  ngOnInit() {
  }
  
  isIn = false;   // store state
  toggleState() { // click handler
    let bool = this.isIn;
    this.isIn = bool === false ? true : false; 
  }
  onLogout() {
    this.registerService.logout();
    this.socketIo = this.socket.getSocket();
    this.socketIo.emit('logOut', 'user logged out');
    this.socketIo.disconnect(); 

    this.router.navigate(['/']);
    
    return false; 
  } 
}
