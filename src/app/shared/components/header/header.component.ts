import { HttpClient } from '@angular/common/http';
import { HostListener, Input, Output } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { LaptopModel } from 'src/app/models/laptop.model';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  username = '';

  email = '';
  password = '';

  name_s='';
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
  
  constructor(private authSrv: AuthService, private userSrv: UserService) { }

  ngOnInit(): void {
    //xac thuc tai khoan
    let okpart = document.getElementById("ok-part");
    okpart.style.display = "none";
    let signinpart = document.getElementById("signin-part");

    if (localStorage.getItem('wavi-token')) {
      let token = JSON.parse(localStorage.getItem('wavi-token'));
      this.userSrv.getUser(token['token']).subscribe(result => {
        console.log(result);
        
        this.username = result['data']['name'];
        okpart.style.display = "block";
        signinpart.style.display = "none";
      }, err => {
        console.log(err);
        okpart.style.display = "none";
        signinpart.style.display = "block";
      });
    }

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

  getThumbnailLaptop(laptopObj: LaptopModel) {
    let arrImg = laptopObj.image.split(",");

    return arrImg[0];
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

        let email:string = this.email;
        let password:string = this.password;

        let btn = document.getElementById("btn-signin");
        btn.innerHTML = '<img src="../../assets/imgs/loading-btn.svg" style="height:38px" alt="">';
        (btn as HTMLInputElement).disabled = true;

        this.authSrv.postLogin(email, password).subscribe(result => {
          console.log(result);

          window.localStorage.setItem('wavi-token', JSON.stringify(result));
          window.open("home", "_self");
          
          // btn.innerHTML = 'Đăng nhập';
          // (btn as HTMLInputElement).disabled = false;
        }, err => {
          this.errorInput = "Thông tin tài khoản, mật khẩu không chính xác.";
          (btn as HTMLInputElement).disabled = false;
          btn.innerHTML = 'Đăng nhập';
        });
      }
      //dang nhap
    }
  }

  signUp() {
    if (this.name_s == '' || this.email_s =='' || this.password_s == '' || this.password_sc == '') {
      this.errorInputS = 'Bạn cần nhập đầy đủ thông tin!';
    }
    else {
      this.errorInputS = '';

      if (!this.validateEmail(this.email_s)) {
        this.errorInputS = 'Email không chính xác!';
      }
      else if (this.password_s != this.password_sc) {
        this.errorInputS = 'Mật khẩu không khớp!';
      }
      else {
        this.errorInputS = '';

        //get info
        let name:string = this.name_s;
        let email:string = this.email_s;
        let password:string = this.password_s;

        let btn = document.getElementById("btn-signup");
        btn.innerHTML = '<img src="../../assets/imgs/loading-btn.svg" style="height:38px" alt="">';
        (btn as HTMLInputElement).disabled = true;

        this.authSrv.postRegister(name, email, password).subscribe(result => {
          console.log(result);
          if (result['data'] == 'Success') {
            btn.innerHTML = 'Đăng ký';
            (btn as HTMLInputElement).disabled = false;

            let text = document.createTextNode('Đã đăng ký thành công! Vui lòng kiểm tra email xác thực tài khoản.');
            let parent = document.getElementById("form-signin");
            parent.appendChild(text);
            parent.style.fontSize = "0.9rem";


            //chuyen huong
          }
          else if (result['data'] == 'EMAIL ALREADY EXIST'){
            this.errorInputS = 'Email đã tồn tại';
          }
          else if (result['data'] == 'MAILLING FAILED') {
            this.errorInputS = 'Xin lỗi! Server gặp một tý trục trặc.';
          }
        });
      }
    }
  }

  logout() {
    let okpart = document.getElementById("ok-part");
    okpart.style.display = "none";
    let signinpart = document.getElementById("signin-part");

    //xóa token tại server
    if (localStorage.getItem('wavi-token')) {
      let token = JSON.parse(localStorage.getItem('wavi-token'));
      this.userSrv.removeToken(token['token']).subscribe(result => {
        console.log(result);
        
        okpart.style.display = "none";
        signinpart.style.display = "block";
      }, err => {
        console.log(err);
      });

      //xóa token tại client

      localStorage.removeItem('wavi-token');
    }
  }

  validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());  
  }

  //search 

  submitSearch() {
    let param = document.getElementById("searchBox") as HTMLInputElement;

    window.open("category-lap/?searchBox=" + param.value, "_self")
  }

  keyUpEvent(e) {
    if (e.keyCode === 13) {
      this.submitSearch();
    }
  }

  removeProduct(laptop: LaptopModel) {
    let indexToRemove = this.productsInCart.findIndex(pro => pro.id == laptop.id);
    this.productsInCart.splice(indexToRemove, 1);

    localStorage.setItem('carts', JSON.stringify(this.productsInCart));
    window.dispatchEvent(new Event('storage'));
  }
}
