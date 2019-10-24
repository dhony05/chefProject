import { Component } from '@angular/core';
import { BackEndService } from '../../services/backend';

@Component({
  selector: 'start-display',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent {
    popUpOpenLogin = false;
    popUpOpenRegister = false;
  constructor(private cache: BackEndService) {
    this.cache.requestChefs(); // use to get fresh list on construstion
    this.cache.requestNewUser(this.cache.getBlankUser(2,"c","K",
   "fkgfjhj","cki.ng@riverdale.edu","testme",""));
  }
  test(){
      // console.log(this.cache.getChefs());
      this.cache.requestUser(2);
      console.log(this.cache.user);
      console.log(this.cache.userCanLogin);
      this.cache.requestUserLogin(this.cache.user.email,"testme");
      console.log(this.cache.userCanLogin);
  }
  openPopUpLogin() {
    this.popUpOpenLogin = true;
  }

  cancelOptionLogin() {
    this.popUpOpenLogin = false;
  }
  openPopUpRegister() {
    this.popUpOpenRegister = true;
  }

  cancelOptionRegister() {
    this.popUpOpenRegister = false;
  }
}
