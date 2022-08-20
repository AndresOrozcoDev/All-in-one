import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountriesComponent } from './components/countries/countries.component';
import { TaskingComponent } from './components/tasking/tasking.component';



@NgModule({
  declarations: [
    CountriesComponent,
    TaskingComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
