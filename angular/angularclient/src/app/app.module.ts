import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import {FormsModule} from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatDialogModule, MatDialog, MatCheckboxModule} from '@angular/material';


// import { AppComponent } from './app.component';

import { StartComponent } from './components/start/start.component';
import { ContactsComponent} from './components/sai/contacts/contacts.component';
import { ProfileComponent} from './components/sai/profile/profile.component';
import { HelpComponent} from './components/sai/help/help.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DisplayOneComponent } from './components/don/dcomponents/display-one/display-one.component';
import { SidebarComponent } from './components/don/dcomponents/sidebar/sidebar.component';
import { DisplayChefsComponent } from './components/don/dcomponents/display-chefs/display-chefs.component';
import { HomeComponent } from './components/abe/home/home.component';
import { LoginComponent } from './components/abe/login/login.component';
import { UserRegistrationComponent } from './components/abe/user-registration/user-registration.component';

@NgModule({
  declarations: [
    StartComponent,
    DisplayOneComponent,
    SidebarComponent,
    DisplayChefsComponent,
    ProfileComponent,
    HelpComponent,
    ContactsComponent,
    HomeComponent,
    LoginComponent,
    UserRegistrationComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    NgbModule,
    MatDialogModule,
    MatCheckboxModule
  ],
  exports: [
    MatDialogModule
  ],
  providers: [
      MatDialog
  ],
  bootstrap: [StartComponent]
})
export class AppModule { }
