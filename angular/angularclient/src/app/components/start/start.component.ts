import { Component } from '@angular/core';
import { BackEndService } from '../../services/backend';

@Component({
  selector: 'start-display',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent {
  constructor(private cache: BackEndService) {
    this.cache.requestChefs(); // use to get fresh list on construstion
    this.cache.requestNewUser(this.cache.getBlankUser(1,"c","K",
   "fkgfjhj","cking@riverdale.edu","testme",""));
  }
  test(){
      // console.log(this.cache.getChefs());

  }
}
