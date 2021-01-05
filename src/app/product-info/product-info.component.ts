import { Component, Input, OnInit, ChangeDetectorRef, OnChanges } from '@angular/core';
import { LaptopModel } from '../models/laptop.model';

@Component({
  selector: 'app-product-info',
  templateUrl: './product-info.component.html',
  styleUrls: ['./product-info.component.css']
})
export class ProductInfoComponent implements OnInit, OnChanges {
  @Input() laptopObject: LaptopModel;

  constructor() { }

  ngOnInit(): void {
    // this.listImage.push(this.laptopObject.image);
  }

  ngOnChanges() {
    this.getImage();
    console.log(this.listImage);
  }

  currentIndex = 0;

  listImage = [
    // "https://i.pinimg.com/originals/a8/44/2b/a8442ba710985e938e6d56f1b335c9bf.gif",
    // "https://i.pinimg.com/564x/fe/60/9d/fe609da59a92b7bb1616607416e0672a.jpg",
    // "https://i.pinimg.com/564x/c4/2b/92/c42b920d196ab2ff47df78a835946f8b.jpg",
    // "https://i.pinimg.com/236x/cc/22/a6/cc22a692ae42dd4c6c2eef8dbb3c9ae7.jpg",
    // "https://i.pinimg.com/564x/5e/c1/76/5ec1767ee6be6554d0fb712bf10a8f50.jpg",
  ]

  
  getImage() {
    let strImg: string = this.laptopObject.image;
    let arrImg: string[]  = strImg.split(',');

    arrImg.forEach(imglink => {
      this.listImage.push(imglink);
    });
  }

  addToCart() {
    let cartLocal: LaptopModel[] = JSON.parse(localStorage.getItem('carts'));
    
    if (!cartLocal) {
      cartLocal = [];
     
    }
    cartLocal.push(this.laptopObject);
    localStorage.setItem('carts', JSON.stringify(cartLocal));
    window.dispatchEvent(new Event('storage'));
  }

  handleClickImg(e, index) {
    this.currentIndex = index;
  }

  increaseIndex() {
    this.currentIndex++;

    if (this.currentIndex >= this.listImage.length) {
      this.currentIndex = 0;
    }
  }

  decreaseIndex() {
    this.currentIndex--;

    if (this.currentIndex < 0) {
      this.currentIndex = this.listImage.length - 1;
    }
  }

  isActived(index) {
    if (index == this.currentIndex) {
      return {'actived' : true }
    }

    else {
      return {};
    }
  }

  formatCurrency(number) {
    return new Intl.NumberFormat('vi-VI', { style: 'currency', currency: 'VND' }).format(number);
  }
}
