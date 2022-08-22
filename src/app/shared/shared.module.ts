import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountriesComponent } from './components/countries/countries.component';
import { TaskingComponent } from './components/tasking/tasking.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';



@NgModule({
  declarations: [
    CountriesComponent,
    TaskingComponent,
    PortfolioComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
