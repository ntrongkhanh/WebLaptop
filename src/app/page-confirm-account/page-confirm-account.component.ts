import { Component, OnInit } from '@angular/core';
import { AuthAccountService } from '../services/account/auth-account.service';

@Component({
  selector: 'app-page-confirm-account',
  templateUrl: './page-confirm-account.component.html',
  styleUrls: ['./page-confirm-account.component.css']
})
export class PageConfirmAccountComponent implements OnInit {

  private email: string;
  private token: string;

  public confirmOK = false;
  status: string = 'Xin chờ...';

  constructor(
    private authAccountService: AuthAccountService,
  ) { }

  ngOnInit(): void {
    let searchParams = new URLSearchParams(window.location.search);
    if (searchParams.has('email')){
      this.email = searchParams.get('email');
    }
    if (searchParams.has('token')){
      this.token = searchParams.get('token');
    }
    this.getAuthAccount();
  }

  getAuthAccount() {
    this.authAccountService.getAuthAccount(this.email, this.token).subscribe(result => {
      if (result["data"] == 'Success'){
        this.confirmOK = true;
        console.log(this.confirmOK);
        this.status = "Đã xác thực tài khoản thành công!"
      }else{
        this.status = "Xác thực tài khoản thất bại!"
      }
    }, err => {
      this.status = "Đã có lỗi xảy ra."
    })
  }
}
