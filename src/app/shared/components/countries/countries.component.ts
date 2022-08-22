import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.scss']
})
export class CountriesComponent implements OnInit {

  countryForm = new FormGroup({
    country: new FormControl('', Validators.required)
  });

  constructor() { }

  ngOnInit(): void {
  }

}
