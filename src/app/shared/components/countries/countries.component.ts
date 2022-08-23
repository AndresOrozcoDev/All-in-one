import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Country } from '../../models/country-models';
import { CountriesService } from './countries.service';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.scss']
})
export class CountriesComponent implements OnInit {

  countryForm = new FormGroup({
    country: new FormControl('', Validators.required)
  });

  countries: Array<Country> = [];
  country: Array<Country> = [];

  constructor( private services: CountriesService ) { }

  ngOnInit(): void {
    this.getAllCountries();
  }

  getAllCountries() {
    this.services.getAllCountries().subscribe( (resp) => {
      this.countries = resp;
    });
  }

  handleSelect(value: string){
    this.services.getCountry(value).subscribe( (resp) => {
      this.country = resp;
    });
  }

}
