import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  categories:string[]
  priceRate:string[]
  price:number;
 
   constructor() {
     this.categories = [
       "American",
       "Italian",
       "Asian",
       "Mexican"
 
      ]
      this.priceRate = [
         "$",
        "$$",
        "$$+"
 
      ]
 
    }

  ngOnInit() {
  }

}
