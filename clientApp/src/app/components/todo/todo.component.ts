import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit, OnDestroy {
  user:Array<any>;
  userId:number;
  constructor() { }

  ngOnInit() {
    //Get user profile
    this.user = JSON.parse(localStorage.getItem("user"));
    this.userId = this.user['userId'];
  }
 
  ngOnDestroy() {
  }
}
