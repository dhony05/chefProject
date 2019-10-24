import { Component, OnInit } from '@angular/core';
import { BackEndService } from 'src/app/services/backend';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  categories:string[]
  priceRate:string[]
  price:number;
 
   constructor(private getter:BackEndService) {
   
    this.getter.requestChefs();
    

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
    //this.getter.getChefbyCategory(this.categories)
  }

  filteringChef(){
    //console.log(this.getter.getChefs());
    
    console.log(this.getter.getChefbyCategory(this.categories[1]));
    return this.getter.getChefbyCategory(this.categories[1]);
   
  }

}
