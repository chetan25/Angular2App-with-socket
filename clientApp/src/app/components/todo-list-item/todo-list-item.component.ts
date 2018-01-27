import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from '../../models/todo';
declare var $:any;

@Component({
  selector: 'app-todo-list-item',
  templateUrl: './todo-list-item.component.html',
  styleUrls: ['./todo-list-item.component.css']
})
export class TodoListItemComponent implements OnInit {
  @Input() todolist:Array<any>;
  @Input() todoIndex:number;
  @Output() onTodoEdit = new EventEmitter<number>();
  @Output() onTodoDelete = new EventEmitter<any>();
  @Output() onShowDetails = new EventEmitter<number>();
  index:number;

  constructor() {}

  ngOnInit() {
    //set the index
    this.index = this.todoIndex;
  }

  /**
  * edit the todo
  *
  * @param number indexSelected
  **/
  editTodo(indexSelected:number) {
    this.onTodoEdit.emit(indexSelected);
  }

  /**
  * delete the todo
  *
  * @param number indexSelected
  * @param number id
  **/
  deleteTodo(indexSelected:number, id:number) {
  	this.onTodoDelete.emit({indexSelected, id});
  }

  /**
  * show the todo details
  **/
  showDetails(indexSelected:number) {
    this.onShowDetails.emit(indexSelected);
  }
}
