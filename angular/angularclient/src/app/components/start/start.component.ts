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
  }
  test(){
      console.log(this.cache.getChefs());
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
