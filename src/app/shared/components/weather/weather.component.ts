import { Component, OnInit } from '@angular/core';
import { ResponseWeather } from '../../models/weather-models';
import { WeatherService } from './weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {

  latitude : number = 0;
  longitude : number = 0;
  weatherData: ResponseWeather = {} as ResponseWeather;

  constructor( private service: WeatherService ) { }

  ngOnInit(): void {
    this.getCurrentLocation();
  }

  ngOnDestroy() { }

  getCurrentLocation() {
    this.service.getPosition().then(pos => {
      this.latitude = pos.lng;
      this.longitude = pos.lat;
      this.getWeigth();
    }).catch(e => {
      console.error(e.message);
    });
  }

  getWeigth() {
    this.service.getWeigth(this.latitude, this.longitude).subscribe( resp => {
      this.weatherData = resp;
    })
  }

}
