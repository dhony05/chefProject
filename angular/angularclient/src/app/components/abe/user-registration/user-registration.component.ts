import { Component, OnInit } from '@angular/core';
import { BackEndService } from 'src/app/services/backend';

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

  constructor(private cache: BackEndService) {
    this.cache.requestNewUser(this.cache.getBlankUser(1,this.userFirstName,this.userLastName,
      this.userEmail,this.userPassword," "));
   }

  registerData(){
    //***back end connection**//
    
    //store user first name, last name, email, and password to database
  }

  ngOnInit() {
  }

}
