import { Component, OnInit, OnDestroy } from '@angular/core';
import { RegisterService } from '../../services/register.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder }  from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit, OnDestroy {
  formSubmitted = false;
  loginForm: FormGroup;
  observable;
 
  //one way to add validation
  userName = new FormControl("", Validators.required);
  password = new FormControl("", Validators.required);
 
  constructor(
    private registerService: RegisterService,
    private flashMessagesService: FlashMessagesService,
    private router : Router,
    private fb: FormBuilder
  ) {
     this.loginForm = this.fb.group({
        "userName":this.userName,
        "password":this.password
    });
  }

  ngOnInit() {
  }
  
  ngOnDestroy() {
   this.observable.unsubscribe();
  }
  /**
  * on form submit
  */
  onSubmit() {
    this.formSubmitted = true;
    if (this.loginForm.invalid) {
      this.flashMessagesService.show(
        'required fileds not set',
        {cssClass: 'alert-danger', timeout: 3000}
      );
      return false;
    }
    const user = {
      userName: this.loginForm.get('userName').value,
      password: this.loginForm.get('password').value
    }
    
    this.observable = this.registerService.onLogin(user).subscribe(data => {
      if (data.success) {
        const logedUser = {
          'userName': data.user.userName,
          'name': data.user.name,
          'email': data.user.email,
          'userId': data.user.id
        }  
        //add a socket connection
        this.registerService.joinUserToChannel(logedUser);
        //add user to store
        this.registerService.addUserToStore(logedUser);
        //add to local storage
        this.registerService.storeLocalStorage(data.token, logedUser);
        this.router.navigate(['profile']);
      } else {
        this.flashMessagesService.show(data.msg, {
          cssClass: 'alert-danger',
          timeout: 5000
        });
        //this.router.navigate(['login']);
      }
    });
  }
}
