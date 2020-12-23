import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-info',
  templateUrl: './product-info.component.html',
  styleUrls: ['./product-info.component.css']
})
export class ProductInfoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  currentIndex = 0;
  
  product = {
    cpu: "AMD Ryzen 7 4800HS, 8 nhân 16 luồng",
    ram: "8GB DDR4 3200MHz (Nâng cấp tối đa 24GB)",
    monitor: '15,6" FHD IPS (1920 x 1080) 144Hz, nhám, 65% sRGB',
    videoCard:  "Nvidia Geforce GTX 1660Ti 6GB GDDR6",
    storage: "512GB NVMe (Nâng cấp tối đa 2TB)",
    pin: "76Wh",
    connector: "3 x USB-A, 1 x USB-C, 1 x HDMI, 1 x Jack 3.5mm",
    weight: "2,1Kg",
    os: "Windows 10 Home SL bản quyền",
    price: 30000000
  }

  listImage = [
    "https://i.pinimg.com/originals/a8/44/2b/a8442ba710985e938e6d56f1b335c9bf.gif",
    "https://i.pinimg.com/564x/fe/60/9d/fe609da59a92b7bb1616607416e0672a.jpg",
    "https://i.pinimg.com/564x/c4/2b/92/c42b920d196ab2ff47df78a835946f8b.jpg",
    "https://i.pinimg.com/236x/cc/22/a6/cc22a692ae42dd4c6c2eef8dbb3c9ae7.jpg",
    "https://i.pinimg.com/564x/5e/c1/76/5ec1767ee6be6554d0fb712bf10a8f50.jpg",
    // "https://phongvu.vn/cong-nghe/wp-content/uploads/2020/09/laptop-tot-nhat-2020-phong-vu-7.jpg"
  ]

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
