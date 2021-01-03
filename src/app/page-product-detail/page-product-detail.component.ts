import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { LaptopModel } from '../models/laptop.model';

@Component({
  selector: 'app-page-product-detail',
  templateUrl: './page-product-detail.component.html',
  styleUrls: ['./page-product-detail.component.css']
})
export class PageProductDetailComponent implements OnInit {

  laptopObject: LaptopModel;
  idParam;
  subscription: Subscription;
  linkProductAPI ='https://wavi-backend.herokuapp.com/api/laptop/';

  constructor(private router: Router, 
              private activatedRoute: ActivatedRoute,
              private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.subscription = this.activatedRoute.params.subscribe(params => {
      this.idParam = params['id'];
      
      this.httpClient.get(this.linkProductAPI + this.idParam).subscribe(item => {
        this.laptopObject = item['data'] as LaptopModel;
      });
    });
  }
}
