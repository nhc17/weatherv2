import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { Weatherv2Service  } from './weatherv2.service'

import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'weatherv2';

  result = {
    temp: 0,
    humidity: 0,
    pressure: 0,
  };

  desc = '';

  listOfCities = [];

  searchForm = new FormGroup(
    {
      city: new FormControl(''),
    }
  );

  constructor(
    private weatherV2Service: Weatherv2Service,
    private route: Router) { }

  ngOnInit(){
  const cityField =this.searchForm.get('city');
  let debounce = cityField.valueChanges.pipe(
    debounceTime(1000), // delay 1000 msec
    distinctUntilChanged()
  );

  debounce.subscribe(changes => {
    console.log(changes);
    this.weatherV2Service
       .addCity(changes)
       .subscribe((data)=>{
         console.log(data);
         this.weatherV2Service.getCities().subscribe((cities) => {
           console.log(cities);
           this.listOfCities = cities;
         })
       });
      });
    }
    
    
    
    
    fetchWeather(city){
    this.weatherV2Service.getWeather(city)
      .subscribe((data: any) => {
        console.log(data);
        this.result = data.main;
        this.desc = data.weather[0].description;
    })
  }

    navigateToCity(){
      this.route.navigate(['/City'])
    }
  } 
   
 

