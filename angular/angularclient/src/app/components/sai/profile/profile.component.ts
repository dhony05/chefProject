import { Component, OnInit } from '@angular/core';
import { BackEndService } from '../../../services/backend';
import {MatDialog, MatDialogConfig} from "@angular/material";


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
chefs;
concerns;
  constructor(private cache: BackEndService, private dialog: MatDialog) {
      this.cache.requestChefs(); // use to get fresh list on construstion
      this.cache.requestConcerns();
  }
  ngOnInit() {
  }

getData(){
    this.chefs = this.cache.getChef(1);
    return this.chefs;
}
    // this.dialog.open();
gotConcerns(){
    this.concerns = this.cache.getConcerns();
    return this.concerns;
}
}
