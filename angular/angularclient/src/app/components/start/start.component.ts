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
    this.cache.requestUser(1);
    this.cache.requestConcerns();
  }
  test(){
      console.log(this.cache.getChefs());
  }
}
