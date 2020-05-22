import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { PeliFormComponent } from './components/peli-form/peli-form.component';
import { PeliPreviewComponent } from './components/peli-preview/peli-preview.component';
import { PeliListComponent } from './components/peli-list/peli-list.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    PeliFormComponent,
    PeliPreviewComponent,
    PeliListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
