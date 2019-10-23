import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { AccountComponent } from './account.component';



@NgModule({
  declarations: [LoginComponent, UserRegistrationComponent, AccountComponent],
  imports: [
    CommonModule
  ]
})
export class AccountModule { }
