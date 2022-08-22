import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountriesComponent } from 'src/app/shared/components/countries/countries.component';
import { PortfolioComponent } from 'src/app/shared/components/portfolio/portfolio.component';
import { TaskingComponent } from 'src/app/shared/components/tasking/tasking.component';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
  { path: '', component: DashboardComponent, children: [
      { path: '', component: PortfolioComponent },
      { path: 'countries', component: CountriesComponent },
      { path: 'tasking', component: TaskingComponent },
    ] 
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
