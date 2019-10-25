import { Component, OnInit } from '@angular/core';
import { BackEndService } from 'src/app/services/backend';
import {MatDialog, MatDialogConfig} from '@angular/material';
import {DisplayOneComponent} from '../display-one/display-one.component';

@Component({
  selector: 'app-display-chefs',
  templateUrl: './display-chefs.component.html',
  styleUrls: ['./display-chefs.component.css']
})
export class DisplayChefsComponent implements OnInit {


  checkBoxVal = [];
  constructor(private cache: BackEndService, private dialog: MatDialog) {

    this.cache.requestChefs();
  }

  ngOnInit() {
  }
getData(){
  return this.cache.getChefs();
}


getCatValue(){

}


openChef(){
    this.dialog.open(DisplayOneComponent);
}

}
