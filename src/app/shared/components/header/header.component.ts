import { HostListener, Input, Output } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { LaptopModel } from 'src/app/models/laptop.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  productsInCart: LaptopModel[] = [];
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
    window.addEventListener('storage', () => {
      this.getCartInLocal();
    });

    this.getCartInLocal();
  }

  getCartInLocal() {
    let cart: LaptopModel[] = JSON.parse(localStorage.getItem('carts'));

    if (cart == null)
      return;
    else {
      this.productsInCart = cart;
    }
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
