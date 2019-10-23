import { Component, OnInit } from '@angular/core';
import { BackEndService } from '../../../services/backend';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
chefs;
popUpOpen = false;

  constructor(private cache: BackEndService) {
      this.cache.requestChefs(); // use to get fresh list on construstion
  }
  ngOnInit() {
  }

getData(){
    this.chefs = this.cache.getChef(1);
    return this.chefs;
}
openPopUp() {
  this.popUpOpen = true;
}

cancelOption() {
  this.popUpOpen = false;
}
}
