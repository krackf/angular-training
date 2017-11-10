// add
import { UserService } from './user.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// template
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginformComponent } from './loginform/loginform.component';
import { LoginreactiveFormComponent } from './loginreactive-form/loginreactive-form.component';

// template
@NgModule({
  declarations: [
    AppComponent,
    LoginformComponent,
    LoginreactiveFormComponent
  ],
  imports: [
    BrowserModule,

    // add
    FormsModule,
    ReactiveFormsModule
  ],

  // template
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }