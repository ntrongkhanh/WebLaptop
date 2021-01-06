import { Component, Input, OnInit, Output,EventEmitter, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { LaptopModel } from 'src/app/models/laptop.model';
import { AdminService } from '../../services/admin.service';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.css']
})
export class ProductViewComponent implements OnInit {

  @Output() deleted = new EventEmitter<LaptopModel>();
  @Input() laptopObj: LaptopModel;
  laptopBackup: LaptopModel;

  linkImg = '';
  name = '';
  model = '';
  status = '';
  amount = 0;
  price = 0;
  description = '';

  constructor(private adminSrv: AdminService, public router: Router, private changeDetection: ChangeDetectorRef) { }

  ngOnInit(): void {
  }

  onUpdateClick(e) {
    console.log(e.target['innerText']);
    if (e.target['innerText'] === "Sửa") {
      (e.path[3].childNodes[1] as HTMLElement).style.display = "block";
      e.target['innerText'] = "Thu gọn";
      console.log((e.path[3].childNodes[1] as HTMLElement).style);

      //
      this.linkImg = this.laptopObj.image;
      this.name = this.laptopObj.name;
      this.model = this.laptopObj.modelCode;
      this.status = this.laptopObj.status;
      this.amount = this.laptopObj.amount;
      this.price = this.laptopObj.price;
      this.description = this.laptopObj.description;
    }

    else {
      e.target['innerText'] = "Sửa";
      (e.path[3].childNodes[1] as HTMLElement).style.display = "none";

    }
  }

  onAcceptUpdate(e) {
    this.laptopBackup = this.laptopObj;
    this.laptopBackup.image = this.linkImg;
    this.laptopBackup.name = this.name;
    this.laptopBackup.modelCode = this.model;
    this.laptopBackup.status = this.status;
    this.laptopBackup.amount = this.amount;
    this.laptopBackup.price = this.price;
    this.laptopBackup.description = this.description;

    let getToken = JSON.parse(localStorage.getItem('ad-token'))['token'];
    console.log(this.laptopBackup);
    this.adminSrv.updateLaptop(this.laptopBackup.id, getToken, JSON.parse(JSON.stringify(this.laptopBackup))).subscribe(result => {
      console.log(result);

      if (result['data'] == "Success") {
        //get success
        this.alertAction("success", e);
      }
      else {
        this.alertAction("fail", e);
      }
    }, err => {
      this.alertAction("fail", e);
    });
  }

  onAcceptDelete(e) {
  
    let accept =  window.confirm('Bạn thực sự muốn xóa trường này?');
    if (accept) {
      let getToken = JSON.parse(localStorage.getItem('ad-token'))['token'];
      this.adminSrv.deleteLaptop(this.laptopObj.id, getToken).subscribe(result => {
      console.log(result);
      this.deleted.emit(this.laptopObj);

      this.changeDetection.detectChanges();
    });
    }
    else {
      return;
    }
  }

  getThumbnail() {
    let arrImg = this.laptopObj.image.split(",");
    return arrImg[0];
  }

  alertAction(status, e) {
    if (status == "success") {
        (e.path[1].childNodes[8] as HTMLElement).style.display = "inline-block";

        window.setTimeout(function() {
          (e.path[1].childNodes[8] as HTMLElement).style.display = "none";
        },3000);
    }
    else if (status == "fail") {
      (e.path[1].childNodes[9] as HTMLElement).style.display = "inline-block";

      window.setTimeout(function() {
        (e.path[1].childNodes[9] as HTMLElement).style.display = "none";
      },3000);
    }
  }
}
