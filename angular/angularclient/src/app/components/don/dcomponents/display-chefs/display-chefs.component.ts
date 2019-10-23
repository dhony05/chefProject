import { Component, OnInit } from '@angular/core';
import { BackEndService } from 'src/app/services/backend';

@Component({
  selector: 'app-display-chefs',
  templateUrl: './display-chefs.component.html',
  styleUrls: ['./display-chefs.component.css']
})
export class DisplayChefsComponent implements OnInit {

  constructor(private cache: BackEndService) { 
    this.cache.requestChefs();
  }

  ngOnInit() {
  }
getData(){
  return this.cache.getChefs();
}

}
