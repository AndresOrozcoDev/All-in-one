import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountriesComponent } from './components/countries/countries.component';
import { TaskingComponent } from './components/tasking/tasking.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { WeatherComponent } from './components/weather/weather.component';
import { ShoppingComponent } from './components/shopping/shopping.component';

@NgModule({
  declarations: [
    CountriesComponent,
    TaskingComponent,
    PortfolioComponent,
    WeatherComponent,
    ShoppingComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class SharedModule { }
