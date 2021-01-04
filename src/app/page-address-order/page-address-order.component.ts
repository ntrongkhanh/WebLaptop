import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AddressService } from '../services/address.service';

@Component({
  selector: 'app-page-address-order',
  templateUrl: './page-address-order.component.html',
  styleUrls: ['./page-address-order.component.css']
})
export class PageAddressOrderComponent implements OnInit {
  errorInput = '';

  name = '';
  phone= '';
  province = '';
  province_h='';
  province_x='';
  home='';

  listProvince: any[] = [];
  listProvince_H: any[] = [];
  listProvince_X: any[] = [];

  constructor(private addressService: AddressService,private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.addressService.getProvince().subscribe(result=> {
      this.listProvince = result['LtsItem'].sort(this.increase_compare);
      console.log(this.listProvince)
    });
  }

  onChangeProvice(e) {
    this.addressService.getProvince_H(e.target.value).subscribe(result=> {
      this.listProvince_H = result.sort(this.increase_compare);
    });
  }

  onChangeProvice_H(e) {
    this.addressService.getProvince_X(e.target.value).subscribe(result=> {
      this.listProvince_X = result.sort(this.increase_compare);
    });
  }

  increase_compare(a, b) {
    if (a['Title'] < b['Title']) {
      return -1;
    }
    
    if (a['Title'] > b['Title']) {
      return 1;
    }
    return 0;
  }

  nextStep() {

    let t_hoTen = document.getElementsByName("hoTen")[0] as HTMLInputElement;
    if (t_hoTen.value != '') {
      this.name = t_hoTen.value
    }
    else {
      this.errorInput = 'Họ tên là bắt buộc.'
      return;
    }

    let t_sdt = document.getElementsByName("sdt")[0] as HTMLInputElement;
    if (t_sdt.value != '') {
      this.phone = t_sdt.value
    }
    else {
      this.errorInput = 'Số điện thoại là bắt buộc.'
      return;
    }

    let t_pro = document.getElementById("tinh") as HTMLInputElement;
    console.log(t_pro.value)
    let result = this.listProvince.find(province => province['ID'] == t_pro.value)

    if (!result) {
      this.errorInput = 'Tỉnh/TP là bắt buộc.'
      return;
    }
    else {
      this.province = result['Title'];
    }


    let t_pro_h = document.getElementById("huyen") as HTMLInputElement;
    console.log(t_pro_h.value)
    let result2 = this.listProvince_H.find(province_h => province_h['ID'] == t_pro_h.value)

    if (!result2) {
      this.errorInput = 'Quận/Huyện là bắt buộc.'
      return;
    }
    else {
      this.province_h = result2['Title'];
    }


    let t_pro_x = document.getElementById("xa") as HTMLInputElement;
    console.log(t_pro_x.value)
    let result3 = this.listProvince_X.find(province_x => province_x['ID'] == t_pro_x.value)

    if (!result3) {
      this.errorInput = 'Xã/Phường/Thị trấn là bắt buộc.'
      return;
    }
    else {
      this.province_x = result3['Title'];
    }

    let t_duong = document.getElementsByName("tenDuong")[0] as HTMLInputElement;
    if (t_duong.value != '') {
      this.home = t_duong.value
    }
    else {
      this.errorInput = 'Địa chỉ nhà là bắt buộc.'
      return;
    }

    window.open("payment-method-and-info-order", '_self');
  }
}
