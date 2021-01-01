import { Component, OnInit } from '@angular/core';
import { LaptopModel } from '../models/laptop.model';
import { LaptopService } from '../services/laptop/laptop.service';


@Component({
  selector: 'app-page-category-lap',
  templateUrl: './page-category-lap.component.html',
  styleUrls: ['./page-category-lap.component.css']
})
export class PageCategoryLapComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }

  buttonClick() {
    
  }
}
