import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/products-models';
import { ShoppingService } from './shopping.service';

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.scss']
})
export class ShoppingComponent implements OnInit {

  products : Array<Product> = [];
  productsBag : Array<Product> = [];

  constructor( private services: ShoppingService ) { }

  ngOnInit(): void {
    this.getAllProducts();
  }

  getAllProducts() {
    this.services.getAllProducts().subscribe( (resp) => {
      this.products = resp;
    })
  }

  addBag(product: Product) {
    this.productsBag.push(product);
  }

  removeBag(product: Product) {
    this.productsBag = this.productsBag.filter( e => 
      e.id !== product.id
    );
  }

}
