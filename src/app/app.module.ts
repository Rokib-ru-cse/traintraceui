import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ShareTrainLocationComponent } from './share-train-location/share-train-location.component';
import { SeeTrainLocationComponent } from './see-train-location/see-train-location.component';
import { SeeYourLocationComponent } from './see-your-location/see-your-location.component';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { LoadLocationComponent } from './load-location/load-location.component';
import { SaveLocationComponent } from './save-location/save-location.component';
import { SaveYourLocationComponent } from './save-your-location/save-your-location.component';
import { LoadYourLocationComponent } from './load-your-location/load-your-location.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShareTrainLocationComponent,
    SeeTrainLocationComponent,
    SeeYourLocationComponent,
    LoadLocationComponent,
    SaveLocationComponent,
    SaveYourLocationComponent,
    LoadYourLocationComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    HttpClientModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
