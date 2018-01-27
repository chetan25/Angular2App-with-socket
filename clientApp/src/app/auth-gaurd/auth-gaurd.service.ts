import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { RegisterService } from '../services/register.service';

@Injectable()
export class AuthGaurdService implements CanActivate {
  constructor(
    private registerService: RegisterService,
    private router: Router
  ) { }
  
  /**
  * Check if the user is logged in, returns a bool
  *
  * @returns {bool}
  */
  canActivate() {
	  if (this.registerService.loggedIn()) {
	    return true;
    }
	  this.router.navigate(['login']);
	  return false;
  } 
}
