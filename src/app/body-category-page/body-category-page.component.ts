import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body-category-page',
  templateUrl: './body-category-page.component.html',
  styleUrls: ['./body-category-page.component.css']
})
export class BodyCategoryPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
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
        "13 inch", "15 inch", "17 inch"
      ]
    },
    {
      title: "Tấm nền màn hình",
      detailFilter: [
        "TN", "VA", "IPS"
      ]
    },
    {
      title: "Tần số quét",
      detailFilter: [
        "60Hz", "75Hz", "120Hz", "144Hz", "240Hz"
      ]
    },
    {
      title: "Độ phân giải",
      detailFilter: [
        "HD", "FullHD","Quad HD", "Ultra HD" 
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
