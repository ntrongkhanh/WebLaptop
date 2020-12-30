import { Pipe, PipeTransform } from '@angular/core';
import { LaptopModel } from '../models/laptop.model';

@Pipe({
  name: 'brand'
})
export class BrandPipe implements PipeTransform {

  transform(items: Array<LaptopModel>, brandName: string =''): any {
    if (brandName === '' || !items) {
      return items;
    }

    return items.filter(item => {
      //console.log(brandName.toLowerCase().includes(item.manufacturer.toLowerCase()));
      return (brandName.toLowerCase().includes(item.manufacturer.toLowerCase()));
    })
  }
}
