import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-button-categogy-brand',
  templateUrl: './button-categogy-brand.component.html',
  styleUrls: ['./button-categogy-brand.component.css']
})
export class ButtonCategogyBrandComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input('brand-name') brandName: string;

}
