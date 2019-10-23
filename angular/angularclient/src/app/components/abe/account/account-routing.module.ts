import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  RouterModule,Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AccountComponent } from './account.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';



const routes: Routes = [
{path:'home', component:AccountComponent},
{path:'user-login', component:LoginComponent},
{path:'user-registration', component:UserRegistrationComponent},
{path:'', redirectTo:'/home', pathMatch:'full'}
/*,{path:'**', component:pageNotFoundComponent}*/
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ], 
  exports: [
    RouterModule
  ]
})


export class AccountRoutingModule {


}
