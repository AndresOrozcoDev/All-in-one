import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { menuDashboardMock } from 'src/app/shared/mocks/menu-dashboard-mock';
import { menu } from 'src/app/shared/models/menu-models';
import { DashboardService } from './dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  menu : Array<menu> = [];
  
  constructor( private route: Router, private services: DashboardService ) { }

  ngOnInit(): void {
    this.getMenu();
  }

  getMenu(){
    this.services.getAllMenu().subscribe( (resp) => {
      this.menu = resp;
    })
  }

  signOut() {
    this.route.navigate(['..']);
    sessionStorage.removeItem('User');
  }

}
