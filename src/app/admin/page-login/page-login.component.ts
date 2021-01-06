import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-page-login',
  templateUrl: './page-login.component.html',
  styleUrls: ['./page-login.component.css']
})
export class PageLoginComponent implements OnInit {
  username = '';
  password = '';

  username_oked = true;
  password_oked = true;
  haveErr = false;

  constructor(private authSrv: AuthService,public router: Router) { }

  ngOnInit(): void {
    let local = JSON.parse(localStorage.getItem('ad-token'));
    console.log(local['token'] = true)
    if (local['token'] && local['username']) {
      this.router.navigate(['admin/products']);
    }
  }

  login() {
    this.haveErr = false;

    if (this.username == '' || this.password == '') {
      if (this.username == '') this.username_oked = false;
      else this.username_oked = true;
      if (this.password == '') this.password_oked = false;
      else this.password_oked = true;
    }
    else {
      this.username_oked = true;
      this.password_oked = true;
    
      this.authSrv.postLogin(this.username, this.password).subscribe(result =>{
        if (result['username']) {
          localStorage.setItem('ad-token', JSON.stringify(result));

          this.router.navigate(['admin/products'])
        }
        else {
          this.haveErr = true;
        }
      }, err => {
        this.haveErr = true;
        console.log(err);
      });
    }
  }
}
