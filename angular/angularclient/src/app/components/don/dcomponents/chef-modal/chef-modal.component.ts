import { Component, OnInit , Input} from '@angular/core';
import { Chef } from '../../Models/chef';



@Component({
  selector: 'app-chef-modal',
  templateUrl: './chef-modal.component.html',
  styleUrls: ['./chef-modal.component.css']
})
export class ChefModalComponent  implements OnInit {

  @Input('chef') chef:Chef;

  constructor(){
    console.log(this.chef);
  }
  
  ngOnInit() {
  }

  getData(){
    console.log(this.chef);
  }
  
  
}
