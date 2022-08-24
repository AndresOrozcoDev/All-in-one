import { Component, OnInit } from '@angular/core';
import { WeatherService } from './weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {

  latitude : number = 0;
  longitude : number = 0;
        
  constructor( private service: WeatherService ) { }

  ngOnInit(): void {
    this.getCurrentLocation();
  }

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
    this.service.getWeigth().subscribe( resp => {
      console.log(resp);
    })
  }

}
