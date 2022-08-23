import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { endpointResources, urlBases } from 'src/environments/environment';
import { Country } from '../../models/country-models';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  urlBase = urlBases.urlBaseCountries;
  allCountries = endpointResources.allCountries;
  nameCountry = endpointResources.nameCountry;

  constructor( private http: HttpClient ) { }

  getAllCountries(): Observable<any> {
    return this.http.get<Country>(this.urlBase + this.allCountries);
  }

  getCountry(name: string) : Observable<any> {
    return this.http.get<Country>(this.urlBase + this.nameCountry + name);
  }
}
