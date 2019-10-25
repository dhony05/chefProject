import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { BackEndService } from 'src/app/services/backend';
import { Chef } from '../../Models/chef';



@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  @Output() cChecked: EventEmitter<any> = new EventEmitter();

  selectedCatcategory = [];
  @Output() categorizedChef  = [];
  categories: string[];
  priceRate: string[];
  price: number;
  isCategorized = false;
  


  constructor(private getter: BackEndService) {

    //this.getter.requestChefs();


    this.categories = [
      "American",
      "Italian",
      "Asian",
      "Mexican",
      "Spanish"

    ]
    this.priceRate = [
      "$",
      "$$",
      "$$+"

    ]
  }

  ngOnInit() {

  }

  // this method will get chef from service
  filteringChef(category) {
    return this.getter.getChefbyCategory(category);
  }

  

  getCheckBoxData(event, category) {
    if (event.checked) {
      this.selectedCatcategory.push(category);
      console.log(this.filteringChef(category));
      
      //Checking if there is not maching for category
      if(!((this.filteringChef(category).length ===0)&&( [].length === 0))){ 
        this.categorizedChef.push(this.filteringChef(category));
      }else{
        console.log("Sorry not there is not match for " + category);
      }
      
      this.isCategorized = true;

    }
    
    if (!event.checked) {
      let index = this.selectedCatcategory.indexOf(category);
    
      if (index > -1) {
        this.selectedCatcategory.splice(index, 1);
        this.categorizedChef.splice(index,1);
        
      } else if( index == 0){
        this.isCategorized = false;
      }

    }
    console.log(this.selectedCatcategory);
    console.log(this.categorizedChef);
 
  }
  



}
