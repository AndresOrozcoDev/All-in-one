import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CurrencyService } from './currency.service';

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.scss']
})
export class CurrencyComponent implements OnInit {

  convertForm = new FormGroup({
    currency: new FormControl('', Validators.required)
  });

  constructor( private services: CurrencyService ) { }

  ngOnInit(): void {
  }

  changeCurrency() {
    this.services.getCurrencyRates(this.convertForm.value.currency).subscribe( (resp) => {
      console.log(resp);
    })
  }

}
