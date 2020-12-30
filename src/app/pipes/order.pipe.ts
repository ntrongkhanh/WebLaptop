import { Pipe, PipeTransform } from '@angular/core';
import { LaptopModel } from '../models/laptop.model';

@Pipe({
  name: 'order'
})
export class OrderPipe implements PipeTransform {

  transform(items: Array<LaptopModel>, orderType: string): any {
    if (orderType == '' || !items) {
      return items;
    }

    if (orderType == 'best_sell') {
      return items;
    }
    if (orderType == 'price_increase') {
      return items.sort(this.increase_compare);
    }

    if (orderType == 'price_decrease') {
      return items.sort(this.descrease_compare);
    }
  }

  increase_compare(a: LaptopModel, b: LaptopModel) {
    if (a.price < b.price) {
      return -1;
    }
    
    if (a.price > b.price) {
      return 1;
    }
    return 0;
  }

  descrease_compare(a: LaptopModel, b: LaptopModel) {
    if (a.price < b.price) {
      return 1;
    }
    
    if (a.price > b.price) {
      return -1;
    }
    return 0;
  }
}
