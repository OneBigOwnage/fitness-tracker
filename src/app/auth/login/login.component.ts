import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor() { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      emailAddress: new FormControl('', [
        Validators.required,
        Validators.email
      ]),
      password: new FormControl('', Validators.required)
    });
  }

  get formEmail(): AbstractControl {
    return this.loginForm.get('emailAddress');
  }

  get formPassword(): AbstractControl {
    return this.loginForm.get('password');
  }

  onSubmit() {
    console.log(this.loginForm);
  }

}
