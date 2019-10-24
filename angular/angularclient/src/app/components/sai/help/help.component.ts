import { Component, OnInit } from '@angular/core';
import { BackEndService } from '../../../services/backend';

@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.css']
})
export class HelpComponent implements OnInit {

chefs;

  constructor(private cache: BackEndService) {
      this.cache.requestChefs(); // use to get fresh list on construstion
  }

  ngOnInit() {

  }

  sendData(){
      // this.chefs = this.cache.requestNewConcern();

  }
}
