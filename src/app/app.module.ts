import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from './material.module';

import { Weatherv2Service } from './weatherv2.service';
import { HttpClientModule } from '@angular/common/http';
import { environment } from '../environments/environment';








@NgModule({
  declarations: [
    AppComponent,
    
  ],

  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    HttpClientModule
  ],

  providers: [ Weatherv2Service],
  bootstrap: [AppComponent]
})

export class AppModule { }
