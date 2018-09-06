import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs'
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { catchError, map } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})

export class Weatherv2Service {

  cities = [];

  constructor(private http: HttpClient) { 
    this.cities=[];
  }

  getWeather(city): Observable<any>{
    console.log("getWeather>");
    return this.http
    .get(`${environment.openweather_url}${city}&APPID=${environment.openweather_api_key}`)
    .pipe(
      catchError(this.handleError('getWeather', []))
    );;
 }


addCity(city) {
  return of(this.cities.push(city));
}

getCities(){ 
 return of(this.cities);
}

private handleError<T> (operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {
    console.error(error); 
    console.error(`${operation} failed: ${error.message}`);
    return of(result as T);
  };
 }
}