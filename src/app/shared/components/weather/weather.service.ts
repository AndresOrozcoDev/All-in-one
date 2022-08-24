import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor( private http: HttpClient ) { }

  getPosition(): Promise<any> {
    return new Promise((resolve, reject) => {
      navigator.geolocation.watchPosition(resp => {
          resolve({lng: resp.coords.longitude, lat: resp.coords.latitude});
        }, err => {
          reject(err);
        });
    });
  }

  getWeigth() {
    return this.http.get('https://api.openweathermap.org/data/3.0/onecall?lat=-73.2474105&lon=40.7967216&appid=674b59719e7fbcdb2fc49ca2edd1ab7d')
  }
  
}
