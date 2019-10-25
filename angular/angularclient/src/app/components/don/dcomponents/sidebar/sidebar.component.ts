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
  selectedCatValue = [];
  categorizedChef  = [];
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
    //this.getter.getChefbyCategory(this.categories[4]);

  }

  // this method will get chef from service
  filteringChef(category) {
    return this.getter.getChefbyCategory(category);
  }

  

  getCheckBoxData(event, value) {
    if (event.checked) {
      this.selectedCatValue.push(value);
      console.log(this.filteringChef(value));
      //console.log();
      
      //Checking if there is not maching for category
      if(!((this.filteringChef(value).length ===0)&&( [].length === 0))){ 
        this.categorizedChef.push(this.filteringChef(value));
      }else{
        console.log("Sorry not there is not match for " + value);
      }
      
      this.isCategorized = true;

    }
    if (!event.checked) {
      let index = this.selectedCatValue.indexOf(value);
      

      if (index > -1) {
        this.selectedCatValue.splice(index, 1);
        this.categorizedChef.splice(index,1);
        
      } else if( index == 0){
        this.isCategorized = false;
      }

    }
    console.log(this.selectedCatValue);
    console.log(this.categorizedChef);
    //console.log(this.categorizedChef.push(this.getter.getChefbyCategory(value)));
    //this.categorizedChef.push(this.getter.getChefbyCategory(value));
    
    //this.selectedCatValue.pop();
    //console.log(this.getter.getChefbyCategory(value));
  }
  



}
