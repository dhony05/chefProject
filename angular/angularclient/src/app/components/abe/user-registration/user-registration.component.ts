import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent implements OnInit {

  userFirstName:string="";
  userLastName:string="";
  userEmail:string="";
  userPassword:string="";

  constructor() { }

  registerData(){
    //***back end connection**//
    //store user first name, last name, email, and password to database
  }


  ngOnInit() {
  }

}
