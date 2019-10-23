import { Component, OnInit } from '@angular/core';
import { BackEndService } from '../../../services/backend';
@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

    chefs;
      constructor(private cache: BackEndService) {
          this.cache.requestChefs(); // use to get fresh list on construstion
      }
      ngOnInit() {
      }

    getData(){
        this.chefs = this.cache.getChefs();
        return this.chefs;
    }
    }
