import { HostListener } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-head-web',
  templateUrl: './head-web.component.html',
  styleUrls: ['./head-web.component.css']
})
export class HeadWebComponent implements OnInit {
//UI --------------------------------------
  isSideBarOpen = false;

  logoClass = {
    'col-sm-2' : false,
    'col-sm-1' : true,
    'col-3' : true,
    'logo-container': true
  }

  searchBoxClass = {
    'col-sm-4' : true,
    'col-sm-8' : false,
    'col-7' : true
  }

  iconRightClass = {
    'col-sm-1' : false,
    'col-sm-3' : true,
    'col-1' : true,
    'icon-right' : true
  }

  public innerWidth: any;
  
  constructor() { }

  ngOnInit(): void {
    this.innerWidth = window.innerWidth;
    this.onResponsive();
  }

  @HostListener('window:resize', ['$event']) 
  onResize(event) {
    this.innerWidth = window.innerWidth;
      this.onResponsive();
  }

  onResponsive() {
    if (this.innerWidth > 1026)  {
      // responsive for logo
      this.logoClass['col-sm-2'] = false;
      this.logoClass['col-sm-1'] = true;

      //responsive for search box
      this.searchBoxClass['col-sm-4'] = true;
      this.searchBoxClass['col-sm-8'] = false;

      //responsive right 
      this.iconRightClass['col-sm-1'] = false;
      this.iconRightClass['col-sm-3'] = true;

      this.closeSideBar();
      
      console.log(+this.innerWidth);
    }
    else if (this.innerWidth <= 1026) {
      // responsive for logo
      this.logoClass['col-sm-2'] = true;
      this.logoClass['col-sm-1'] = false;

      //responsive for search box
      this.searchBoxClass['col-sm-4'] = false;
      this.searchBoxClass['col-sm-8'] = true;

      //responsive right 
      this.iconRightClass['col-sm-1'] = true;
      this.iconRightClass['col-sm-3'] = false;

      console.log(this.innerWidth);
    }
  }

  openSideBar() {
    this.isSideBarOpen = true;
  }

  closeSideBar() {
    this.isSideBarOpen = false;
  }
//DATA ------------------------------------------------
//lấy so san pham bang lengh
//ten san pham trong mang
//Tong gia
  productsInCart = [
    {name: 'Dell XPS 13 7390', price: 30000000
    ,imageSrc: 'https://admin.thinkpro.vn//backend/uploads/product/avatar/2020/9/22/HPOMEN152020_00.jpg'},
    {name: 'Dell XPS 13 7391', price: 45000000
    ,imageSrc: 'https://admin.thinkpro.vn//backend/uploads/product/avatar/2020/9/22/HPOMEN152020_00.jpg'},
    {name: 'Dell XPS 13 7392', price: 39900000
    ,imageSrc: 'https://admin.thinkpro.vn//backend/uploads/product/avatar/2020/9/22/HPOMEN152020_00.jpg'},
  ];

  getTotalPrice() {
    let totalPrice = 0;
    this.productsInCart.forEach(item => {
      totalPrice += item.price;
    });

    return totalPrice;
  }

  formatCurrency(number) {
    return new Intl.NumberFormat('vi-VI', { style: 'currency', currency: 'VND' }).format(number);
  }
}
