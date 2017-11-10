// template
import { Component, OnInit, ViewEncapsulation } from '@angular/core';

// add
export interface IUser {
  login: string;
  password: string;
}

// template
@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.css'],
  encapsulation: ViewEncapsulation.None
})
// template
export class LoginformComponent implements OnInit {
  constructor() { }
  ngOnInit() { }

// add
  submitForm(form: IUser): boolean {
    console.log(form);
    return false;
  }

}
