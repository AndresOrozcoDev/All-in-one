import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { ProductsShoppingCartMock } from '../../mocks/products-shopping-mock';

@Injectable({
  providedIn: 'root'
})
export class ShoppingService {

  constructor( private http: HttpClient ) { }

  getAllProducts() {
    return of(ProductsShoppingCartMock);
  }
}
