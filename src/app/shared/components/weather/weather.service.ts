import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { apiKey, endpointResources, urlBases } from 'src/environments/environment';
import { ResponseWeather } from '../../models/weather-models';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  urlBase = urlBases.urlBaseWeather;
  weather = endpointResources.weather;
  appid = apiKey.appid;

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

  getWeigth(latitude: number, longitude: number): Observable<any> {
    let params = new HttpParams()
      .set('lat', latitude)
      .set('lon', longitude)
      .set('appid', this.appid)
    return this.http.get<ResponseWeather>(this.urlBase + this.weather, {params: params});
  }
  
}
