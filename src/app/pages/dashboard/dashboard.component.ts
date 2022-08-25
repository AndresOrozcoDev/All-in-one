import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { menuDashboardMock } from 'src/app/shared/mocks/menu-dashboard-mock';
import { menu } from 'src/app/shared/models/menu-models';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  menu : Array<menu> = menuDashboardMock;
  
  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  signOut() {
    this.route.navigate(['..']);
    sessionStorage.removeItem('User');
  }

}
