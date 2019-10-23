import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DisplayChefsComponent } from './components/don/dcomponents/display-chefs/display-chefs.component';
import { ProfileComponent} from './components/sai/profile/profile.component';
import { HelpComponent} from './components/sai/help/help.component';
import { ContactsComponent} from './components/sai/contacts/contacts.component';
import { HomeComponent } from './components/abe/home/home.component';
import { LoginComponent } from './components/abe/login/login.component';
import { UserRegistrationComponent } from './components/abe/user-registration/user-registration.component';

const routes: Routes = [
    {path: 'profile', component:ProfileComponent},
    {path: 'help',component:HelpComponent},
    {path: 'contacts',component:ContactsComponent},
    {path: 'look',component:DisplayChefsComponent},
    {path:'home', component:HomeComponent},
    {path:'user-login', component:LoginComponent},
    {path:'user-registration', component:UserRegistrationComponent},
    {path:'', redirectTo:'/home', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
