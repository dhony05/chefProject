import { Component } from '@angular/core';
import { BackEndService } from '../../services/backend';
import {MatDialog, MatDialogConfig} from "@angular/material";
import {LoginComponent, } from "../abe/login/login.component";
import {UserRegistrationComponent} from "../abe/user-registration/user-registration.component";
@Component({
  selector: 'start-display',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent {

  constructor(private cache: BackEndService, private dialog: MatDialog) {
    this.cache.requestChefs(); // use to get fresh list on construstion
  }

  test(){
      console.log(this.cache.getChefs());
  }

  openLogin(){
      this.dialog.open(LoginComponent);
  }
  openRegister(){
      this.dialog.open(UserRegistrationComponent);
  }
}
