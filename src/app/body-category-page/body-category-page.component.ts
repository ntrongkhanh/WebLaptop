import { Component, OnInit, Output } from '@angular/core';

import { LaptopModel } from '../../app/models/laptop.model';
import { LaptopService } from '../../app/services/laptop/laptop.service'
import { NgForm } from '@angular/forms';
import { BrandPipe } from '../pipes/brand.pipe';
import { FilterPipe } from '../pipes/filter.pipe';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-body-category-page',
  templateUrl: './body-category-page.component.html',
  styleUrls: ['./body-category-page.component.css']
})
export class BodyCategoryPageComponent implements OnInit {

  limitList = 12;
  laptopRenderList: LaptopModel[];
  laptops: LaptopModel[];
  countLaptops;
  order = 'best_sell';
  brand = '';

  filterObj = {
    order: '',
    brand: '',
    price: '',
    category: '',
    cpu: '',
    ram: '',
    storage: '',
    display_size: '',
    display_panel: '',
    display_freg: '',
    display_resolution: '',
    graphicCard: '',
    weight: '',
  }

  constructor(private latopService: LaptopService,
              private brandPipe: BrandPipe,
              private filterPipe: FilterPipe) {

  }

  ngOnInit(): void {
    this.filterPipe = new FilterPipe();
    this.getLaptops();
  }

  getLength() {
    if (this.laptopRenderList)  {
      return this.laptopRenderList.length;
    }
    else {
      return 0;
    }
  }

  showMoreClick() {
    this.limitList += 12;
  }

  deleteFilter() {
    this.filterObj.order = '';
    this.filterObj.brand = '';
    this.filterObj.category = '';
    this.filterObj.cpu = '';
    this.filterObj.price = '';
    this.filterObj.ram = '';
    this.filterObj.storage = '';
    this.filterObj.display_size = '';
    this.filterObj.display_resolution = '';
    this.filterObj.display_freg = '';
    this.filterObj.display_panel = '';
    this.filterObj.graphicCard = '';
    this.filterObj.weight = '';

    let filters = document.getElementsByName("checkbox");

    console.log(filters);
    filters.forEach(item => {
      (item as HTMLInputElement).checked = false;
    });

    this.laptopRenderList = this.filterPipe.transform(this.laptops, this.filterObj);
  }

  async getLaptops() {
    await this.latopService.getLaptops().subscribe(result => {
      this.laptops = result["data"];

      this.laptopRenderList = this.laptops;

      //Lấy param từ url
      let searchParams = new URLSearchParams(window.location.search);
      if (searchParams.has('brand')) {
        this.filterObj.brand = searchParams.get('brand');

        let cb = document.getElementById("id" + searchParams.get('brand')) as HTMLInputElement;
        cb.checked = true;
        
        this.laptopRenderList = this.filterPipe.transform(this.laptops, this.filterObj);
      }

      if (searchParams.has('price')) {
        let filterPrice = searchParams.get('price');

        if (filterPrice == "_10"){
          let cb = document.getElementById("iddưới 10 triệu") as HTMLInputElement;
          cb.checked = true;
          this.filterObj.price += "dưới 10 triệu";
        }
        else if (filterPrice == "10_15"){
          let cb = document.getElementById("idtừ 10 - 15 triệu") as HTMLInputElement;
          cb.checked = true;
          this.filterObj.price += "từ 10 - 15 triệu";
        }
        else if (filterPrice == "15_20"){
          let cb = document.getElementById("idtừ 15 - 20 triệu") as HTMLInputElement;
          cb.checked = true;
          this.filterObj.price += "từ 15 - 20 triệu";
        }
        else if (filterPrice == "20_30"){
          let cb = document.getElementById("idtừ 20 - 30 triệu") as HTMLInputElement;
          cb.checked = true;
          this.filterObj.price += "từ 20 - 30 triệu";
        }
        else if (filterPrice == "30_40"){
          let cb = document.getElementById("idtừ 30 - 40 triệu") as HTMLInputElement;
          cb.checked = true;
          this.filterObj.price += "từ 30 - 40 triệu";
        }
        else if (filterPrice == "40_"){
          let cb = document.getElementById("idtrên 40 triệu") as HTMLInputElement;
          cb.checked = true;
          this.filterObj.price += "trên 40 triệu";
        }
        
        this.laptopRenderList = this.filterPipe.transform(this.laptops, this.filterObj);
      }
    });
  }

  onValueSelectChange(newValue) {
    this.order = newValue;
    this.filterObj.order = this.order;

    this.laptopRenderList = this.filterPipe.transform(this.laptops, this.filterObj);
    console.log("lol");
  }

  onFilterChecked(obj){

    if (obj.title == "Thương hiệu") {
      if (obj.isChecked == true) {
        this.filterObj.brand = this.filterObj.brand + obj.value.toLowerCase();
      }
      else {
        this.filterObj.brand = this.filterObj.brand.replace(obj.value.toLowerCase(), '');
      }
    }

    else if (obj.title == "Khoảng giá") {
      if (obj.isChecked == true) {
        this.filterObj.price = this.filterObj.price + obj.value.toLowerCase();
      }
      else {
        this.filterObj.price = this.filterObj.price.replace(obj.value.toLowerCase(), '');
      }
    }

    else if (obj.title == "Nhu cầu") {
      if (obj.isChecked == true) {
        this.filterObj.category = this.filterObj.category + obj.value.toLowerCase();
      }
      else {
        this.filterObj.category = this.filterObj.category.replace(obj.value.toLowerCase(), '');
      }
    }

    else if (obj.title == "CPU") {
      if (obj.isChecked == true) {
        this.filterObj.cpu = this.filterObj.cpu + obj.value.toLowerCase();
      }
      else {
        this.filterObj.cpu = this.filterObj.cpu.replace(obj.value.toLowerCase(), '');
      }
    }

    else if (obj.title == "RAM") {
      if (obj.isChecked == true) {
        this.filterObj.ram = this.filterObj.ram + "_" + obj.value.toLowerCase();
      }
      else {
        this.filterObj.ram = this.filterObj.ram.replace("_" + obj.value.toLowerCase(), '');
      }
    }

    else if (obj.title == "Ổ cứng") {
      if (obj.isChecked == true) {
        this.filterObj.storage = this.filterObj.storage + obj.value.toLowerCase();
      }
      else {
        this.filterObj.storage = this.filterObj.storage.replace(obj.value.toLowerCase(), '');
      }
    }

    else if (obj.title == "Kích thước màn hình") {
      if (obj.isChecked == true) {
        this.filterObj.display_size = this.filterObj.display_size + obj.value.toLowerCase();
      }
      else {
        this.filterObj.display_size = this.filterObj.display_size.replace(obj.value.toLowerCase(), '');
      }
    }

    else if (obj.title == "Độ phân giải") {
      if (obj.isChecked == true) {
        this.filterObj.display_resolution = this.filterObj.display_resolution + "_" + obj.value.toLowerCase();
      }
      else {
        this.filterObj.display_resolution = this.filterObj.display_resolution.replace("_" + obj.value.toLowerCase(), '');
      }
    }

    else if (obj.title == "Card đồ họa") {
      if (obj.isChecked == true) {
        this.filterObj.graphicCard = this.filterObj.graphicCard + obj.value.toLowerCase();
      }
      else {
        this.filterObj.graphicCard = this.filterObj.graphicCard.replace(obj.value.toLowerCase(), '');
      }
    }

    else if (obj.title == "Trọng lượng") {
      if (obj.isChecked == true) {
        this.filterObj.weight = this.filterObj.weight + obj.value.toLowerCase();
      }
      else {
        this.filterObj.weight = this.filterObj.weight.replace(obj.value.toLowerCase(), '');
      }
    }

    this.laptopRenderList = this.filterPipe.transform(this.laptops, this.filterObj);
    console.log(this.filterObj);
  }

  ListFilter = [
    {
      title: "Thương hiệu",
      detailFilter: [
        "Dell", "Asus", "HP",  "Apple", "Lenovo", "Acer", "Microsoft", "MSI"
      ]
    },
    {
      title: "Khoảng giá",
      detailFilter: [
        "Dưới 10 triệu", "Từ 10 - 15 triệu", "Từ 15 - 20 triệu",  "Từ 20 - 30 triệu", "Từ 30 - 40 triệu", "Trên 40 triệu"
      ]
    },
    {
      title: "Nhu cầu",
      detailFilter: [
        "Việc văn phòng", "Chơi game", "Sang trọng, cao cấp"
      ]
    },
    {
      title: "CPU",
      detailFilter: [
        "Intel Core i3", "Intel Core i5", "Intel Core i7", "Intel Core i9", "AMD Ryzen 3", "AMD Ryzen 5", "AMD Ryzen 7", "AMD Ryzen 9"
      ]
    },
    {
      title: "RAM",
      detailFilter: [
        "4GB", "8GB", "16GB", "32GB"
      ]
    },
    {
      title: "Ổ cứng",
      detailFilter: [
        "HDD", "SSD", "SSHD"
      ]
    },
    {
      title: "Kích thước màn hình",
      detailFilter: [
        "13 inch", "14 inch" , "15 inch", "16 inch", "17 inch"
      ]
    },
    {
      title: "Độ phân giải",
      detailFilter: [
        "HD", "FullHD","Quad HD", "Ultra HD", "Khác"
      ]
    },
    {
      title: "Card đồ họa",
      detailFilter: [
        "Card tích hợp", "Card rời"
      ]
    },
    {
      title: "Trọng lượng",
      detailFilter: [
        "Dưới 1kg", "Từ 1kg đến 2kg", "Từ 2kg trở lên"
      ]
    },
  ]
}
