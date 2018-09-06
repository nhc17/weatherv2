import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from './material.module';

import { Weatherv2Service } from './weatherv2.service';
import { HttpClientModule } from '@angular/common/http';
import { environment } from '../environments/environment';
import { CityComponent } from './component/city.component';
import { DogComponent } from './component/dog.component';
import { PageNotFoundComponent } from './component/page-not-found.component';

import { RoutingModule } from './routing';




@NgModule({
  declarations: [
    AppComponent,
    CityComponent,
    DogComponent, 
    PageNotFoundComponent
  ],

  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    HttpClientModule,
    RoutingModule
  ],

  providers: [ Weatherv2Service],
  bootstrap: [AppComponent]
})

export class AppModule { }
