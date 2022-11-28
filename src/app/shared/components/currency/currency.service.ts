import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { endpointResources, urlBases } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {

  urlBase = urlBases.urlBaseCurrency;
  latest = endpointResources.latestRates;

  constructor( private http: HttpClient ) { }

  getCurrencyRates(base: string): Observable<any> {
    let params = new HttpParams()
      .set('base', base)
    return this.http.get<any>( this.urlBase + this.latest, {params: params} );
  }
}
