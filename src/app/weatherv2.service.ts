import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs'
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class Weatherv2Service {

  constructor(private httpClient: HttpClient) { }


  getWeather(city): Observable<any>{
    console.log("getWeather>");
    return this.httpClient.get(`${environment.openweather_url}${city}&APPID=${environment.openweather_api_key}`);
 }
}

