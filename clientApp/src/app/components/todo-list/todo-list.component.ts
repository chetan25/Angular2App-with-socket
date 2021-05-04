import { Component, OnInit, OnDestroy, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from '../../models/todo';
import { TodoDataService } from '../../services/todo-data.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import * as moment from 'moment';
import { OrderByDatePipe } from '../../pipes/order-by-date.pipe';
declare var $:any;
import { Store } from '@ngrx/store';
import { UserState, User } from '../../redux-states/user/user-state';
import { Observable } from 'rxjs/Observable';
import { SocketConnectionService } from '../../services/socket-connection.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
  providers: [TodoDataService, OrderByDatePipe]
})
export class TodoListComponent implements OnInit {
  user:any;
  userId:number;
  data$: Observable<User>;

  todos:Array<Todo> = [];
  todoSelectedIndex:number;
  todoTitle:string;
  todoDescription:string;
  todoCompleted:boolean;
  modalTitle:string;
  modalAction:string;
  selectedIndex:number;
  todoId:number;
  newTodo;
  sortOrder:boolean = true;//true means newest, false means oldest
  //this is for now defined in two places  
  description:string = 'A list of things that one wants to get done or that need to get done.These are prioritized lists of all the tasks that you need to carry out.';
  creationDate:string;
  count: number;
  rows: Array<any>;
  obs;
  constructor(
    private todoDataService: TodoDataService,
    private flashMessagesService: FlashMessagesService,
    private myFilter: OrderByDatePipe,
    private store: Store<UserState>,
    private socket: SocketConnectionService
  ) {
    //Get user profile from store
    //if store empty get from session.
    this.data$ = this.store.select('user');
    this.data$.subscribe((user:User) => {
      this.user = user;
      if (!user.userId) {
        this.user.userId = localStorage.getItem("userId");
        this.user.userName = localStorage.getItem("userName");
        this.user.email = localStorage.getItem("userEmail");
        this.user.name = localStorage.getItem("name");
        //add a socket connection
        this.socket.joinChannel(this.user);
      }
    });
  }

  ngOnInit() {
   // this.user = JSON.parse(localStorage.getItem("user"));
    this.userId = this.user['userId'];
    this.creationDate = moment().subtract(1, 'days').format('DD/MM/YYYY');
    //get the list of all todo for user from api or local storage
    if (localStorage.getItem("todos") === null) {
      this.obs = this.todoDataService.getToDos(this.user['userId'])
        .subscribe(data => {
          if (data.todos.length > 0) {
            this.todos = data.todos; 
            //sort the todos according to date, latest first
            this.todos = this.myFilter.transform(
              this.todos, this.sortOrder
            );
 
            //store todos in  local storage
            localStorage.setItem(
              'todos', JSON.stringify(this.todos)
            );
            this.setTheTodoItemData();
          }
        });
    } else {
      this.todos = JSON.parse(localStorage.getItem('todos'));
      //sort the todos according to date, latest first
      this.todos = this.myFilter.transform(
        this.todos, this.sortOrder
      );
      this.setTheTodoItemData();
    }
  }
 
  /**
  * set the dat for the todo list item
  **/
  setTheTodoItemData() {
    this.count = this.todos.length % 4 == 0 ? Math.floor(this.todos.length/4) : Math.floor(this.todos.length/4) +1;
    this.rows = Array(this.count).fill(1);
  }

  /**
  * edit the todo
  *
  * @param number index
  **/
  todoEdit(index:number) {
    this.modalTitle = 'Edit ToDo';
    this.modalAction = 'edit';
    this.todoSelectedIndex = index;
    this.todoTitle = this.todos[index].title;
    this.todoDescription =
      this.todos[index].description ? this.todos[index].description : this.description;
    this.todoCompleted = this.todos[index].completed;
    this.todoId = this.todos[index]._id;
    //open the modal to edit
    $("#myModal").modal('show');
  }

  /**
  * save the edited note
  **/
  saveEditTodo() {
    this.todos[this.todoSelectedIndex].title = this.todoTitle;
    this.todos[this.todoSelectedIndex].description = this.todoDescription;
    this.todos[this.todoSelectedIndex].completed = this.todoCompleted;
    this.newTodo = {
      'id': this.todoId,
      'userId': this.user['userId'],
      'todoId': this.todoId,
      'title': this.todoTitle,
      'description': this.todoDescription,
      'completed': this.todoCompleted
    };
    this.todoDataService.editTodo(this.newTodo).subscribe(data => {
      //update the local storage
      localStorage.setItem('todos', JSON.stringify(this.todos)); 
      this.flashMessagesService.show('ToDo edited successfully', {
        cssClass: 'alert-success',
        timeout: 2000
      });
      //open the modal to edit
      $("#myModal").modal('hide');
    });
  }
 
  /**
  * open the ad todo modal
  **/
  openAddTodoModal() {
    this.modalTitle = 'Add ToDo';
    this.modalAction = 'add';
    this.todoTitle = '';
    this.todoDescription = '';
    this.todoCompleted = false;
    //open the modal to edit
    $("#myModal").modal('show');
  }

  /**
  * add a new todo to the array
  **/
  addTodo() {
    this.newTodo = {
      'userId': this.user['userId'],
      'title': this.todoTitle,
      'description': this.todoDescription,
      'createdOn': moment().format('DD/MM/YYYY'),
      'completionDate': moment().add(7, 'days').format('DD/MM/YYYY'),
      'completed': this.todoCompleted ? this.todoCompleted : false
    };
    this.todoDataService.addTodo(this.newTodo).subscribe(data => {
      this.todos.push(data.data);
      this.flashMessagesService.show('ToDo added successfully', {
        cssClass: 'alert-success',
        timeout: 2000
      });
      //update the local storage
      localStorage.setItem('todos', JSON.stringify(this.todos));
      //sort the todos according to date, latest first
      this.todos = this.myFilter.transform(this.todos, this.sortOrder);
      this.setTheTodoItemData();
       //open the modal to edit
      $("#myModal").modal('hide');
    });
  }

  /**
  * delete the todo
  *
  * @param object event
  **/
  todoDelete(event) {
    this.todoDataService.deleteTodo(event.id).subscribe(data => {
      this.todos.splice(event.indexSelected, 1);
      this.flashMessagesService.show('ToDo deleted successfully', {
        cssClass: 'alert-success',
        timeout: 2000
      });
      //update the local storage
      localStorage.setItem('todos',  JSON.stringify(this.todos)); 
      this.setTheTodoItemData(); 
    });
  }

  /**
  * show todo details
  * 
  * @param number index
  **/
  todoShowDetails(index:number) {
    this.selectedIndex = index;
     //open the modal to edit
    $("#showDetailModal").modal('show');
  }

  /**
  * sort todo by creation date
  **/
  sortTodoByDate() {
    this.sortOrder = !this.sortOrder;
    console.log(this.todos, this.sortOrder);
    //sort the todos according to date, latest first
    this.todos = this.myFilter.transform(this.todos, this.sortOrder);
  }
}
 