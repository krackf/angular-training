// add
import { UserService } from './../user.service';
import { passwordValidator } from '../validators/passwordValidator.validator';
import { IUser } from '../types/IUser.interface';

// template ..... attention ordre des imports est super important
import { Component, OnInit, ViewEncapsulation } from '@angular/core';

// add
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

// template
@Component({
  selector: 'app-loginreactive-form',
  templateUrl: './loginreactive-form.component.html',
  styleUrls: ['./loginreactive-form.component.css'],
  encapsulation: ViewEncapsulation.None
})

// modify
export class LoginreactiveFormComponent implements OnInit {
  isLoggedIn: boolean;
  login: AbstractControl;
  password: AbstractControl;
  myForm: FormGroup;
  constructor(private userService: UserService, formBuilder: FormBuilder) {
    this.isLoggedIn = false;
    this.myForm = formBuilder.group({
      login: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(10)]],
      password: ['', Validators.compose([Validators.required, passwordValidator])]
    });
    this.login = this.myForm.controls['login'];
    this.password = this.myForm.controls['password'];
}

  // template
  ngOnInit() { }

  // add
  onSubmit(value: IUser) {
    if (this.myForm.valid) {
      console.log(value);
      // this.myForm.reset();
      this.isLoggedIn = this.userService.signInUser(value);
    }
  }

}