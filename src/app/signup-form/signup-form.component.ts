import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { UserNameValidator } from './username.validator';
import { PasswordValidator } from './password.validator';

@Component({
  selector: 'signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent {

  form = new FormGroup({
    account: new FormControl('', Validators.required),
    userName: new FormControl('', [Validators.required, Validators.minLength(3), UserNameValidator.CannotContainSpace, UserNameValidator.userNameUnique]),
    password: new FormControl('', [Validators.required, PasswordValidator.passwordUnique])
  });
  get userName() {
    return this.form.get('userName');
  }
  get password() {
    return this.form.get('password');
  }
  login() {
    console.log(this.form.value.userName)
    this.form.setErrors({
      invalidLogin: true
    });

  }
}


