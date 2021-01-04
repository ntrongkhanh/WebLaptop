import { Component, OnInit } from '@angular/core';
import { LaptopModel } from '../models/laptop.model';

@Component({
  selector: 'app-page-cart',
  templateUrl: './page-cart.component.html',
  styleUrls: ['./page-cart.component.css']
})
export class PageCartComponent implements OnInit {

  products: LaptopModel[] = [];

  constructor() { }

  ngOnInit(): void {
    let productsInLocal:LaptopModel[] = JSON.parse(localStorage.getItem('carts'));

    if (productsInLocal == null) {
      this.products = [];
    }
    else{
      this.products = productsInLocal;
    }
  }

  getTotalPrice() {
    let totalPrice = 0;
    this.products.forEach(item => {
      totalPrice += item.price;
    });

    return totalPrice;
  }

  formatCurrency(number) {
    return new Intl.NumberFormat('vi-VI', { style: 'currency', currency: 'VND' }).format(number);
  }

  removeProduct(e) {
    let indexToRemove = this.products.findIndex(pro => pro.id == e);
    this.products.splice(indexToRemove, 1);

    localStorage.setItem('carts', JSON.stringify(this.products));
    window.dispatchEvent(new Event('storage'));
  }
}
