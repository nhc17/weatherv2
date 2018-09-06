import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Weatherv2Service } from '../weatherv2.service';


@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css']
})
export class CityComponent implements OnInit {

  
  @ViewChild('cityForm') cityForm: NgForm;


  constructor(private weatherV2Service: Weatherv2Service) { }

  ngOnInit() {  }

 

}
