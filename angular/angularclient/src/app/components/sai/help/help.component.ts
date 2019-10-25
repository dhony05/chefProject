import { Component, OnInit, ViewChild } from '@angular/core';
import { BackEndService } from '../../../services/backend';
import { NgForm } from '@angular/Forms';

@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.css']
})
export class HelpComponent implements OnInit {

chefs;
concerns;
  constructor(private cache: BackEndService) {
      this.cache.requestChefs(); // use to get fresh list on construstion

  }

  ngOnInit() {
  }

  sendData(){
      // this.chefs = this.cache.requestNewConcern();
  }

  onSubmit(form){
      this.cache.requestNewConcern(this.cache.getBlankConcern(1000,form.form.value.email,form.form.value.name,form.form.value.description));
  }
}
