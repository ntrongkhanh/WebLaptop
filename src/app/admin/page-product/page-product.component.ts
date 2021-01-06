import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LaptopModel } from 'src/app/models/laptop.model';
import { AdminService } from '../services/admin.service';

@Component({
  selector: 'app-page-product',
  templateUrl: './page-product.component.html',
  styleUrls: ['./page-product.component.css']
})
export class PageProductComponent implements OnInit {
  showNoticeAdd = false;
  showNoticeFail = false;

  listProduct: LaptopModel[] = [];

  newLaptopObj = {
    "amount": 0,
    "battery": "",
    "category": "",
    "color": "",
    "cpu": "",
    "description": "",
    "graphicCard": "",
    "guarantee": "",
    "id": 0,
    "idCategory": 0,
    "idImage": 0,
    "idManufacturer": 0,
    "idProductType": 0,
    "image": "",
    "manufacturer": "",
    "modelCode": "",
    "name": "",
    "national": "",
    "os": "",
    "port": "",
    "price": 0,
    "productType": "",
    "ram": "",
    "screen": "",
    "status": "",
    "storage": "",
    "weight": "",
    "year": ""
  }

  constructor(private adminSrv: AdminService, public router: Router) { }

  ngOnInit(): void {
    this.onClickNewProduct();

    this.getProducts();
  }

  onClickNewProduct() {
    let btn = document.getElementById("toggle-product") as HTMLInputElement;
    let area = document.getElementById("new-product-area");

    if (btn.innerHTML == "Thêm mới") {
      area.style.display = "block";
      btn.innerHTML = "Thu gọn";
    }
    else {
      area.style.display = "none";
      btn.innerHTML = "Thêm mới";
    }
  }

  getProducts() {
    let getToken = JSON.parse(localStorage.getItem('ad-token'))['token'];
    this.adminSrv.getLaptops(getToken).subscribe(result => {
      this.listProduct = result['data'];
    })
  }

  getIdCategory(input:string) {
    if (input == "gaming") {
      return 100001;
    }
    else if (input == "vanphong") {
      return 100002;
    }
    else if (input == "caocap") {
      return 100003;
    }
  }

  getIdBrand(input:string) {
    if (input == "dell") {
      return 100001;
    }
    else if (input == "asus") {
      return 100002;
    }
    else if (input == "acer") {
      return 100003;
    }
    else if (input == "lenovo") {
      return 100004;
    }
    else if (input == "hp") {
      return 100005;
    }
    else if (input == "apple") {
      return 100006;
    }
  }

  getIdProductType(input: string) {
    if (input == "laptop") {
      return 100001;
    }
  }

  addNewLaptop() {
    let getToken = JSON.parse(localStorage.getItem('ad-token'))['token'];
    this.newLaptopObj['idCategory'] = this.getIdCategory(this.newLaptopObj['category']);
    this.newLaptopObj['idProductType'] = this.getIdProductType(this.newLaptopObj['productType']);
    this.newLaptopObj['idManufacturer'] = this.getIdBrand(this.newLaptopObj['manufacturer']);

    console.log(this.newLaptopObj);

    this.adminSrv.createLaptop(getToken, JSON.parse(JSON.stringify(this.newLaptopObj))).subscribe(result => {
      if (result['data'] == "Success") {
        this.showNoticeAdd = true;
        this.showNoticeFail = false;

        this.newLaptopObj = {
          "amount": 0,
          "battery": "",
          "category": "",
          "color": "",
          "cpu": "",
          "description": "",
          "graphicCard": "",
          "guarantee": "",
          "id": 0,
          "idCategory": 0,
          "idImage": 0,
          "idManufacturer": 0,
          "idProductType": 0,
          "image": "",
          "manufacturer": "",
          "modelCode": "",
          "name": "",
          "national": "",
          "os": "",
          "port": "",
          "price": 0,
          "productType": "",
          "ram": "",
          "screen": "",
          "status": "",
          "storage": "",
          "weight": "",
          "year": ""
        }
      }
      else {
        this.showNoticeFail = true;
        this.showNoticeAdd = false;
      }
    }, err => {
      this.showNoticeFail = true;
      this.showNoticeAdd = false;
    });
  }

  deleteMe(e) {
    this.ngOnInit();
  }

  public trackItem (index: number, item) {
    return item.trackId;
  }
}
