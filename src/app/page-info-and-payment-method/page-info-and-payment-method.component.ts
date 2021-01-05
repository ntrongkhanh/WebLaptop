import { Component, OnInit } from '@angular/core';
import { LaptopModel } from '../models/laptop.model';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-page-info-and-payment-method',
  templateUrl: './page-info-and-payment-method.component.html',
  styleUrls: ['./page-info-and-payment-method.component.css']
})
export class PageInfoAndPaymentMethodComponent implements OnInit {

  address: string = '';

  products: LaptopModel[] =[];

  constructor(private userSrv: UserService) { }

  ngOnInit(): void {
    let inLocal:LaptopModel[] = JSON.parse(localStorage.getItem('carts'));

    if (inLocal != null) {
      this.products = inLocal;
    }
  }

  getAddress() {
    let addressLocal = JSON.parse(localStorage.getItem('address'));
    if (addressLocal == null) return;

    return (addressLocal['home'] + ", " + addressLocal['province_x'] + ", " + addressLocal['province_h'] + ", " + addressLocal['province']);
  }

  getAddress__name() {
    let addressLocal = JSON.parse(localStorage.getItem('address'));
    if (addressLocal == null) return;

    return addressLocal['name'];
  }

  getAddress__phone() {
    let addressLocal = JSON.parse(localStorage.getItem('address'));
    if (addressLocal == null) return;

    return addressLocal['phone'];
  }

  order() {
    if (this.products === [] || !this.products) return;

    if (localStorage.getItem('wavi-token')) {
      let token = JSON.parse(localStorage.getItem('wavi-token'));

      this.userSrv.getUser(token['token']).subscribe(result => {
        let data = result['data'];

        if (!data['name']) {
          return;
        }
        else {
          let productDto = [];
          this.products.forEach(element => {
            let newObj = {
              "amount": 1,
              "id": 0,
              "idProduct": element.id,
              "image": "string",
              "name": "string",
              "price": 0,
              "totalPrice": 0
            }

            productDto.push(newObj);
          });
          let body = {
            "address": this.getAddress(),
            "cartDetailDtos": productDto,
            "id": 0,
            "idUser": 0,
            "name": this.getAddress__name(),
            "phone": this.getAddress__phone(),
            "status": "string",
            "totalPrice": 0
          }

          this.userSrv.setOrder(token['token'], body).subscribe(result => {
            console.log(result);
          }, err => {
            console.log("ERR" + err);
            console.log(body);
          });

          this.products = [];
          window.open("home", "_self");

          localStorage.removeItem('carts');
          localStorage.removeItem('address');
        }
      }, err => {
        console.log(err);
        return;
      });
    }
    else {
      let btn_sign_in = document.getElementById("signin-btn");
      btn_sign_in.click();
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
