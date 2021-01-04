import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { LaptopModel } from '../models/laptop.model';

@Component({
  selector: 'app-laptop-in-cart',
  templateUrl: './laptop-in-cart.component.html',
  styleUrls: ['./laptop-in-cart.component.css']
})
export class LaptopInCartComponent implements OnInit {

  @Input() laptopObject: LaptopModel;
  @Output() remove = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  getConfig() {
    return this.getCpu() + ", " + this.getRam();
  }

  formatCurrency(number) {
    return new Intl.NumberFormat('vi-VI', { style: 'currency', currency: 'VND' }).format(number);
  }

  getPrice() {
    return this.formatCurrency(this.laptopObject.price);
  }

  getRam() {
    if (this.laptopObject.ram.toLowerCase().search("64gb") != -1) {
      return "RAM 64GB";
    }
    else if (this.laptopObject.ram.toLowerCase().search("32gb") != -1) {
      return "RAM 32GB";
    }
    else if (this.laptopObject.ram.toLowerCase().search("16gb") != -1) {
      return "RAM 16GB";
    }
    else if (this.laptopObject.ram.toLowerCase().search("12gb") != -1) {
      return "RAM 12GB";
    }
    else if (this.laptopObject.ram.toLowerCase().search("8gb") != -1) {
      return "RAM 8GB";
    }
    else if (this.laptopObject.ram.toLowerCase().search("6gb") != -1) {
      return "RAM 6GB";
    }
    else if (this.laptopObject.ram.toLowerCase().search("4gb") != -1) {
      return "RAM 4GB";
    }
    else if (this.laptopObject.ram.toLowerCase().search("2gb") != -1) {
      return "RAM 2GB";
    }
    else {
      return this.laptopObject.ram;
    }
  }

  getCpu() {
    if (this.laptopObject.cpu.toLowerCase().search("core 2 duo") != -1) {
      return "Intel Core 2 duo";
    }
    else if (this.laptopObject.cpu.toLowerCase().search("pentium") != -1) {
      return "Intel Pentium";
    }
    else if (this.laptopObject.cpu.toLowerCase().search("i3") != -1) {
      return "Intel Core i3";
    }
    else if (this.laptopObject.cpu.toLowerCase().search("i5") != -1) {
      return "Intel Core i5";
    }
    else if (this.laptopObject.cpu.toLowerCase().search("i7") != -1) {
      return "Intel Core i7";
    }
    else if (this.laptopObject.cpu.toLowerCase().search("i9") != -1) {
      return "Intel Core i9";
    }
    else if (this.laptopObject.cpu.toLowerCase().search("xeon") != -1) {
      return "Intel Xeon";
    }
    else if (this.laptopObject.cpu.toLowerCase().search("r3") != -1) {
      return "AMD Ryzen 3";
    }
    else if (this.laptopObject.cpu.toLowerCase().search("r5") != -1) {
      return "AMD Ryzen 5";
    }
    else if (this.laptopObject.cpu.toLowerCase().search("r7") != -1) {
      return "AMD Ryzen 7";
    }
    else if (this.laptopObject.cpu.toLowerCase().search("r9") != -1) {
      return "AMD Ryzen 9";
    }
    else if (this.laptopObject.cpu.toLowerCase().search("threadripper") != -1) {
      return "AMD Ryzen Threadripper";
    }
    else if (this.laptopObject.cpu.toLowerCase().search("m1") != -1) {
      return "Apple M1";
    }
  }

  getName() {
    return this.laptopObject.name + " " + this.laptopObject.modelCode;
  }

  shorten(str, maxLen, separator = ' ') {
    if (str.length <= maxLen) return str;
    return str.substr(0, str.lastIndexOf(separator, maxLen));
  }

  getImageLink() {
    return this.laptopObject.image;
  }

  removeProduct() {
    this.remove.emit(this.laptopObject.id);
  }
}
