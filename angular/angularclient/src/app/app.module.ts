import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
// import { AppComponent } from './app.component';

import { StartComponent } from './components/start/start.component';
import { ContactsComponent} from './components/sai/contacts/contacts.component';
import { ProfileComponent} from './components/sai/profile/profile.component';
import { HelpComponent} from './components/sai/help/help.component';
import { HttpClientModule } from '@angular/common/http';
import { PopUpComponent } from './components/sai/pop-up/pop-up.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DisplayOneComponent } from './components/don/dcomponents/display-one/display-one.component';
import { SidebarComponent } from './components/don/dcomponents/sidebar/sidebar.component';
import { DisplayChefsComponent } from './components/don/dcomponents/display-chefs/display-chefs.component';



@NgModule({
  declarations: [
    StartComponent,

    DisplayOneComponent,
    SidebarComponent,
    DisplayChefsComponent,
    ProfileComponent,
    HelpComponent,
    ContactsComponent,
    PopUpComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule

  ],
  providers: [],
  bootstrap: [StartComponent]
})
export class AppModule { }
