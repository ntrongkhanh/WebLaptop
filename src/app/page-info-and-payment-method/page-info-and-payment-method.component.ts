import { Component, OnInit } from '@angular/core';
import { LaptopModel } from '../models/laptop.model';

@Component({
  selector: 'app-page-info-and-payment-method',
  templateUrl: './page-info-and-payment-method.component.html',
  styleUrls: ['./page-info-and-payment-method.component.css']
})
export class PageInfoAndPaymentMethodComponent implements OnInit {

  products: LaptopModel[] =[];

  constructor() { }

  ngOnInit(): void {
    let inLocal:LaptopModel[] = JSON.parse(localStorage.getItem('carts'));

    if (inLocal != null) {
      this.products = inLocal;
    }
  }


  getConfig(laptopObject: LaptopModel) {
    return this.getCpu(laptopObject) + ", " + this.getRam(laptopObject);
  }

  formatCurrency(number) {
    return new Intl.NumberFormat('vi-VI', { style: 'currency', currency: 'VND' }).format(number);
  }

  getPrice(laptopObject: LaptopModel) {
    return this.formatCurrency(laptopObject.price);
  }

  getRam(laptopObject: LaptopModel) {
    if (laptopObject.ram.toLowerCase().search("64gb") != -1) {
      return "RAM 64GB";
    }
    else if (laptopObject.ram.toLowerCase().search("32gb") != -1) {
      return "RAM 32GB";
    }
    else if (laptopObject.ram.toLowerCase().search("16gb") != -1) {
      return "RAM 16GB";
    }
    else if (laptopObject.ram.toLowerCase().search("12gb") != -1) {
      return "RAM 12GB";
    }
    else if (laptopObject.ram.toLowerCase().search("8gb") != -1) {
      return "RAM 8GB";
    }
    else if (laptopObject.ram.toLowerCase().search("6gb") != -1) {
      return "RAM 6GB";
    }
    else if (laptopObject.ram.toLowerCase().search("4gb") != -1) {
      return "RAM 4GB";
    }
    else if (laptopObject.ram.toLowerCase().search("2gb") != -1) {
      return "RAM 2GB";
    }
    else {
      return laptopObject.ram;
    }
  }

  getCpu(laptopObject: LaptopModel) {
    if (laptopObject.cpu.toLowerCase().search("core 2 duo") != -1) {
      return "Intel Core 2 duo";
    }
    else if (laptopObject.cpu.toLowerCase().search("pentium") != -1) {
      return "Intel Pentium";
    }
    else if (laptopObject.cpu.toLowerCase().search("i3") != -1) {
      return "Intel Core i3";
    }
    else if (laptopObject.cpu.toLowerCase().search("i5") != -1) {
      return "Intel Core i5";
    }
    else if (laptopObject.cpu.toLowerCase().search("i7") != -1) {
      return "Intel Core i7";
    }
    else if (laptopObject.cpu.toLowerCase().search("i9") != -1) {
      return "Intel Core i9";
    }
    else if (laptopObject.cpu.toLowerCase().search("xeon") != -1) {
      return "Intel Xeon";
    }
    else if (laptopObject.cpu.toLowerCase().search("r3") != -1) {
      return "AMD Ryzen 3";
    }
    else if (laptopObject.cpu.toLowerCase().search("r5") != -1) {
      return "AMD Ryzen 5";
    }
    else if (laptopObject.cpu.toLowerCase().search("r7") != -1) {
      return "AMD Ryzen 7";
    }
    else if (laptopObject.cpu.toLowerCase().search("r9") != -1) {
      return "AMD Ryzen 9";
    }
    else if (laptopObject.cpu.toLowerCase().search("threadripper") != -1) {
      return "AMD Ryzen Threadripper";
    }
    else if (laptopObject.cpu.toLowerCase().search("m1") != -1) {
      return "Apple M1";
    }
  }

  getName(laptopObject: LaptopModel) {
    return laptopObject.name + " " + laptopObject.modelCode;
  }
}
