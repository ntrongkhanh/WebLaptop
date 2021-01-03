import { HostListener, Input, Output } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { LaptopModel } from 'src/app/models/laptop.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  email = '';
  password = '';
  email_s = '';
  password_s = '';
  password_sc = '';
  errorInput = '';
  errorInputS = '';

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


  signIn() {
    if (this.email == '' || this.password == '') {
      this.errorInput = 'Bạn cần điền email và mật khẩu!';
      console.log(this.errorInput);
    }
    else {
      this.errorInput = '';
      
      if (!this.validateEmail(this.email)) {
        this.errorInput = 'Email không chính xác!';
      }
      else {
        this.errorInput = '';

      }
      //dang nhap
    }
  }

  signUp() {
    if (this.email_s =='' || this.password_s == '' || this.password_sc == '') {
      this.errorInputS = 'Bạn cần nhập đầy đủ thông tin!';
    }
    else {
      this.errorInputS = '';

      if (!this.validateEmail(this.email_s)) {
        this.errorInputS = 'Email không chính xác!';
      }
      else {
        this.errorInputS = '';

      }
    }
  }

  validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());  
  }
}
