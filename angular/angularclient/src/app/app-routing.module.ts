import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent} from './components/sai/profile/profile.component';
import { HelpComponent} from './components/sai/help/help.component';
import { ContactsComponent} from './components/sai/contacts/contacts.component';



const routes: Routes = [
    {path: 'profile', component:ProfileComponent},
    {path: 'help',component:HelpComponent},
    {path: 'contacts',component:ContactsComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
