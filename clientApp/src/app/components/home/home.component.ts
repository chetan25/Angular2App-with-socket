import { Component } from '@angular/core';
import { RegisterService } from '../../services/register.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent {

	constructor(
      private registerService: RegisterService,
	) {}
	strackTraceDetails = [
	  {
	    'name' : 'Express Backend',
	    'description' : 'Node/Express server runs the backend'
	  },
	  {
	    'name' : 'Angular Cli',
	    'description' : 'Angular Cli to generate the front end components'
	  },
	  {
	    'name' : 'JWT',
	    'description' : 'JWt is used for authentication'
	  }
	];
}
