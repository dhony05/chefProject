import { Component, OnInit } from '@angular/core';
import { BackEndService } from 'src/app/services/backend';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email:string;
  passwordd:string;

  constructor() { }

  validateData(){
    //check if the information is right with the back end if so send user to store page
  }

  ngOnInit() {
  }

}
