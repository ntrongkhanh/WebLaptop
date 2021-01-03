import { Component, Input, OnInit } from '@angular/core';
import { LaptopModel } from '../models/laptop.model';

@Component({
  selector: 'app-product-review',
  templateUrl: './product-review.component.html',
  styleUrls: ['./product-review.component.css']
})
export class ProductReviewComponent implements OnInit {
  @Input() laptopObject: LaptopModel;

  constructor() { }

  ngOnInit(): void {
  }

}
