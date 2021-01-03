import { Component, Input, OnInit } from '@angular/core';
import { LaptopModel } from '../models/laptop.model';

@Component({
  selector: 'app-product-introduce',
  templateUrl: './product-introduce.component.html',
  styleUrls: ['./product-introduce.component.css']
})
export class ProductIntroduceComponent implements OnInit {
  
  @Input() laptopObject: LaptopModel;
  constructor() { }

  ngOnInit(): void {
  }

  onLoad(e){
    console.log (e)
  }
  onError(e) {
    console.log(e)
  }

  listRelateProduct = [
    {
      price: 29000000,
      config: 'Intel Core i5-8250U, RAM 8GB, 256GB m.2 NVMe, 14" FHD IPS (1920 x 1080), Intel UHD 620, 48Whr, Black'
    },
    {
      price: 30000000,
      config: 'Intel Core i5-8250U, RAM 8GB, 256GB m.2 NVMe, 15" FHD IPS (1920 x 1080), Intel UHD 620, 48Whr, Black'
    }
  ]

  formatCurrency(number) {
    return new Intl.NumberFormat('vi-VI', { style: 'currency', currency: 'VND' }).format(number);
  }
}
