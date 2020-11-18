import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sidebar-web',
  templateUrl: './sidebar-web.component.html',
  styleUrls: ['./sidebar-web.component.css']
})
export class SidebarWebComponent implements OnInit {
  @Input() isVisible: Boolean;
  @Output() closeSideBar = new EventEmitter();


  public innerWidth: any;

  styleSideBarClose = {
    width: '0px',
    outline: 'none'
  }

  styleSideBarOpen = {
    width: '300px',
    outline: 'solid 3px #70DBFF'
  }

  constructor() { }

  ngOnInit(): void {
    this.innerWidth = window.innerWidth;

  }

  selectClass() {
    if (this.isVisible == true) {
      return this.styleSideBarOpen;
    }
    else {
      return this.styleSideBarClose;
    }
  }

  callCloseSideBar() {
    this.closeSideBar.emit();
  }
}
