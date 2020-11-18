import { HostListener } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-head-web',
  templateUrl: './head-web.component.html',
  styleUrls: ['./head-web.component.css']
})
export class HeadWebComponent implements OnInit {

  isSideBarOpen = false;

  logoClass = {
    'col-sm-2' : false,
    'col-sm-1' : true,
    'logo-container': true
  }

  searchBoxClass = {
    'col-sm-4' : true,
    'col-sm-5' : false,
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
      this.searchBoxClass['col-sm-5'] = false;

      this.closeSideBar();
      
      console.log(+this.innerWidth);
    }
    else if (this.innerWidth <= 1026) {
      // responsive for logo
      this.logoClass['col-sm-2'] = true;
      this.logoClass['col-sm-1'] = false;

      //responsive for search box
      this.searchBoxClass['col-sm-4'] = false;
      this.searchBoxClass['col-sm-5'] = true;

      console.log(this.innerWidth);
    }
  }

  openSideBar() {
    this.isSideBarOpen = true;
  }

  closeSideBar() {
    this.isSideBarOpen = false;
  }
}
