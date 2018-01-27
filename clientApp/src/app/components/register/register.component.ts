import { Component, OnInit } from '@angular/core';
import { UserValidateService } from '../../services/user-validate.service';
import { RegisterService } from '../../services/register.service';
import {FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder }  from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  userName: String;
  email: String;
  password: String;
  formSubmitted = false;

  //model driven form
  registrationForm: FormGroup;
  //one way to add validation
  name = new FormControl("", Validators.required);

  constructor(
    private userValidateService: UserValidateService,
    private flashMessagesService: FlashMessagesService,
    private registerService: RegisterService,
    private router: Router,
    private fb: FormBuilder
  ) { 
    this.registrationForm = this.fb.group({
          "name": this.name,
          "userName":["", Validators.required],
          "email":["", Validators.required],
          "password":["", Validators.required]
      });
  }

  ngOnInit() {
  }
 
  //to submit  the form
  onRegister() {
    this.formSubmitted = true;
    if (this.registrationForm.invalid) {
      this.flashMessagesService.show(
        'required fileds not set',
        {cssClass: 'alert-danger', timeout: 3000}
      );
      return false;
    }
    const user = {
      name: this.registrationForm.get('name').value,
      userName: this.registrationForm.get('userName').value,
      email: this.registrationForm.get('email').value,
      password: this.registrationForm.get('password').value
    }
    //check validation required
    if (!this.userValidateService.validateEmail(user.email)) {
      this.flashMessagesService.show(
        'Email is not in valid format',
        {cssClass: 'alert-danger', timeout: 3000}
      );
      return false;
    }
   
    //register user
    this.registerService.registerUser(user).subscribe(data => {
      if (data.success) {
	     this.flashMessagesService.show('yor are now register', {cssClass: 'alert-success', timeout: 3000});

       this.router.navigate(['/']);
      } else {
        this.flashMessagesService.show('error in registering', {cssClass: 'alert-danger', timeout: 3000});
      }
    });
  }
}
