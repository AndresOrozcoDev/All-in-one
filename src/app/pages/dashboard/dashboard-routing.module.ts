import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountriesComponent } from 'src/app/shared/components/countries/countries.component';
import { CurrencyComponent } from 'src/app/shared/components/currency/currency.component';
import { PortfolioComponent } from 'src/app/shared/components/portfolio/portfolio.component';
import { ShoppingComponent } from 'src/app/shared/components/shopping/shopping.component';
import { TaskingComponent } from 'src/app/shared/components/tasking/tasking.component';
import { WeatherComponent } from 'src/app/shared/components/weather/weather.component';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
  { path: '', component: DashboardComponent, children: [
      { path: 'home', component: PortfolioComponent },
      { path: 'countries', component: CountriesComponent },
      { path: 'tasking', component: TaskingComponent },
      { path: 'weather', component: WeatherComponent },
      { path: 'shopping', component: ShoppingComponent },
      { path: 'currency', component: CurrencyComponent },
    ] 
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
