import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DisplayChefsComponent } from './components/don/dcomponents/display-chefs/display-chefs.component';


const routes: Routes = [
  {path: 'look',component:DisplayChefsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
