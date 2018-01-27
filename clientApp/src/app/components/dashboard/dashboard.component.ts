import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit, OnDestroy {
  slideData:Array<any>;
  user:Array<any>;
  constructor() {
    //set the data for carousel
    this.slideData = [
      {
        header: 'Maintain your daily ToDo list',
        description: 'ToDO list made easy.'
      },
      {
        header: 'Step2',
        description: 'Add Todo anytime.'
      }
    ];
  }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem("user"));
  }
    
  ngOnDestroy() {
  }
}
