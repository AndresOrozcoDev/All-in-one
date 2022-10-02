import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { menuDashboardMock } from 'src/app/shared/mocks/menu-dashboard-mock';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor( private http: HttpClient ) { }

  getAllMenu() {
    return of(menuDashboardMock);
  }

}
