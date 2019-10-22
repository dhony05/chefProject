import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
// import { AppComponent } from './app.component';

import { StartComponent } from './components/start/start.component';
import { HttpClientModule } from '@angular/common/http';
import { DisplayOneComponent } from './components/don/dcomponents/display-one/display-one.component';
import { SidebarComponent } from './components/don/dcomponents/sidebar/sidebar.component';
import { DisplayChefsComponent } from './components/don/dcomponents/display-chefs/display-chefs.component';



@NgModule({
  declarations: [
    StartComponent,
    DisplayOneComponent,
    SidebarComponent,
    DisplayChefsComponent,
   
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [StartComponent]
})
export class AppModule { }
