import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent {
  slideData:Array<any>;
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
}
