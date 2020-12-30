import { ArrayType } from '@angular/compiler';
import { Pipe, PipeTransform } from '@angular/core';
import { LaptopModel } from '../models/laptop.model'

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(items: Array<LaptopModel>, filterObj): any {
    console.log("execute transform" + filterObj.order);

    if (!items || !filterObj) {
      return items;
    }

    //gia tri mac dinh 
    if (filterObj.brand == '' && filterObj.price == '' && filterObj.order == ''
        && filterObj.category == '' && filterObj.cpu == '' && filterObj.ram =='' && filterObj.storage == ''
        && filterObj.display_size == '' && filterObj.display_panel == '' && filterObj.display_freg == '' 
        && filterObj.display_resolution == '' && filterObj.graphicCard == '' && filterObj.weight == '') return items;

    //order
    if (filterObj.order == "price_increase") {
        items = items.sort(this.increase_compare);
        
    }
    else if (filterObj.order == "price_decrease") {
        items = items.sort(this.descrease_compare);
    }

    //thương hiệu
    if (filterObj.brand != '') {
      items = items.filter(item => {
        return (filterObj.brand.toLowerCase().includes(item.manufacturer.toLowerCase()));
      });
    }

    //Khoảng giá
    if (filterObj.price != '') {
      items = this.filterPrice(items, filterObj.price);
    }

    //Nhu cầu
    if (filterObj.category != '') {
      items = this.filterCategory(items, filterObj.category);
    }

    //cpu
    if (filterObj.cpu != '') {
      items = this.filterCpu(items, filterObj.cpu);
    }

    //ram
    if (filterObj.ram != '') {
      items = this.filterRam(items, filterObj.ram);
    }

    //disk
    if (filterObj.storage != '') {
      items = this.filterStorage(items, filterObj.storage);
    }
    //kich thuoc man hinh

    if (filterObj.display_size != '') {
      items = this.filterDisplaySize(items, filterObj.display_size);
    }

    //do phan giai
    if (filterObj.display_resolution != '') {
      items = this.filterDisplayResolution(items, filterObj.display_resolution);
    }
    //card do hoa
    if (filterObj.graphicCard != '') {
      items = this.filterGraphicCard(items, filterObj.graphicCard);
    }

    //trong luong
    if (filterObj.weight != '') {
      items = this.filterWeight(items, filterObj.weight);
    }

    return items;
  }

  filterWeight(array: Array<LaptopModel>, typeWeight: string) {
    let filterArray: LaptopModel[] = [];

    array.forEach(item => {
      let index = item.weight.toLowerCase().indexOf("kg");
      let w = item.weight.toLowerCase().slice(0, index);
      let wei = parseFloat(w);

      if (typeWeight.includes("dưới 1kg") && wei < 1){
        filterArray.push(item);
      }

      if (typeWeight.includes("từ 1kg đến 2kg") && wei >= 1 && wei < 2) {
        filterArray.push(item);
      }

      if (typeWeight.includes("từ 2kg trở lên") && wei >= 2) {
        filterArray.push(item);
      }
    });

    return filterArray;
  }

  filterGraphicCard(array: Array<LaptopModel>, typeGraphicCard: string) {
    let filterArray: LaptopModel[] = [];

    array.forEach(item => {
      if (typeGraphicCard.includes("card tích hợp") && (!item.graphicCard.toLowerCase().includes("+") &&
          !item.graphicCard.toLowerCase().includes("amd") && !item.graphicCard.toLowerCase().includes("nvdia")) ) {
        filterArray.push(item);
      }
      
      if (typeGraphicCard.includes("card rời") && (item.graphicCard.toLowerCase().includes("+") ||
      item.graphicCard.toLowerCase().includes("amd") || item.graphicCard.toLowerCase().includes("nvdia")) ){
        filterArray.push(item);
      }
    });

    return filterArray;
  }

  filterDisplayResolution(array: Array<LaptopModel>, typeDisplayResolution: string) {
    let filterArray: LaptopModel[] = [];

    array.forEach(item =>  {
      if (typeDisplayResolution.includes("_hd") && !item.screen.toLowerCase().includes("fhd") && 
          !item.screen.toLowerCase().includes("1920") && !item.screen.toLowerCase().includes("1080") && 
          !item.screen.toLowerCase().includes("2560") && !item.screen.toLowerCase().includes("3840") &&
          (item.screen.toLowerCase().includes("hd") || item.screen.toLowerCase().includes("1366"))) {
            filterArray.push(item);
          }
      
      if (typeDisplayResolution.includes("_fullhd") && (item.screen.toLowerCase().includes("fhd") || 
          item.screen.toLowerCase().includes("fullhd") || item.screen.toLowerCase().includes("1920"))) {
            filterArray.push(item);
      }

      if (typeDisplayResolution.includes("_quad hd") && (item.screen.toLowerCase().includes("quad hd") ||
          item.screen.toLowerCase().includes("2k")) ) {
            filterArray.push(item);
      }

      if (typeDisplayResolution.includes("_ultra hd") && (item.screen.toLowerCase().includes("ultra hd") ||
          item.screen.toLowerCase().includes("4k")) ) {
            filterArray.push(item);
      }

      if (typeDisplayResolution.includes("_khác")  && (item.screen.toLowerCase().includes("retina") ||
          item.manufacturer.toLowerCase().includes("apple"))) {
        filterArray.push(item);
      }
    });

    return filterArray;
  }

  filterDisplaySize(array: Array<LaptopModel>, typeDisplaySize: string) {
    let filterArray: LaptopModel[] = [];

    array.forEach(item =>  {
      if (typeDisplaySize.includes("13 inch") && item.screen.slice(0, 20).toLowerCase().includes("13")) {
        filterArray.push(item);
      }

      if (typeDisplaySize.includes("14 inch") && item.screen.slice(0, 20).toLowerCase().includes("14")) {
        filterArray.push(item);
      }

      if (typeDisplaySize.includes("15 inch") && item.screen.slice(0, 20).toLowerCase().includes("15")) {
        filterArray.push(item);
      }

      if (typeDisplaySize.includes("16 inch") && item.screen.slice(0, 20).toLowerCase().includes("16")) {
        filterArray.push(item);
      }

      if (typeDisplaySize.includes("17 inch") && item.screen.slice(0, 20).toLowerCase().includes("17")) {
        filterArray.push(item);
      }
    });

    return filterArray;
  }

  filterStorage(array: Array<LaptopModel>, typeStorage: string) {
    let filterArray: LaptopModel[] = [];

    array.forEach(item => {
      if (typeStorage.includes("ssd") &&
          (item.storage.toLowerCase().includes("pci") || 
          item.storage.toLowerCase().includes("nvme") || 
          item.storage.toLowerCase().includes("ssd"))) 
          {
            filterArray.push(item);
          }
      
      else if (typeStorage.includes("hdd") && item.storage.toLowerCase().includes("hdd"))
      {
        filterArray.push(item);
      }
      else if (typeStorage.includes("sshd") && item.storage.toLowerCase().includes("sshd"))
      {
        filterArray.push(item);
      }
    });

    return filterArray;
  }

  filterRam(array: Array<LaptopModel>, typeRam: string) {
    let filterArray: LaptopModel[] = [];

    array.forEach(item => {
      if (typeRam.includes("_4gb") && item.ram.toLowerCase().includes("4gb"))
        filterArray.push(item);

      if (typeRam.includes("_8gb") && item.ram.toLowerCase().includes("8gb"))
        filterArray.push(item);
      
      if (typeRam.includes("_16gb") && item.ram.toLowerCase().includes("16gb"))
        filterArray.push(item);

      if (typeRam.includes("_32gb") && item.ram.toLowerCase().includes("32gb"))
        filterArray.push(item);
    });

    return filterArray;
  }

  filterCpu(array: Array<LaptopModel>, typeCpu: string) {
    let filterArray: LaptopModel[] = [];

    array.forEach(item => {
      if (typeCpu.includes("i3") && item.cpu.toLowerCase().includes("i3"))
        filterArray.push(item);

      if (typeCpu.includes("i5") && item.cpu.toLowerCase().includes("i5"))
        filterArray.push(item);

      if (typeCpu.includes("i7") && item.cpu.toLowerCase().includes("i7"))
        filterArray.push(item);

      if (typeCpu.includes("i9") && item.cpu.toLowerCase().includes("i9"))
        filterArray.push(item);
      
      if (typeCpu.includes("ryzen 3") && item.cpu.toLowerCase().includes("r3"))
        filterArray.push(item);

      if (typeCpu.includes("ryzen 5") && item.cpu.toLowerCase().includes("r5"))
        filterArray.push(item);

      if (typeCpu.includes("ryzen 7") && item.cpu.toLowerCase().includes("r7"))
        filterArray.push(item);

      if (typeCpu.includes("ryzen 9") && item.cpu.toLowerCase().includes("r9"))
        filterArray.push(item);
    });

    return filterArray;
  }

  filterCategory(array: Array<LaptopModel>, typeCategory: string) {
    let filterArray: LaptopModel[] = [];

    console.log(typeCategory);

    array.forEach(item => {

      if (typeCategory.includes("việc văn phòng".toLowerCase())) {
        if (item.category.toLowerCase() == "văn phòng")
          filterArray.push(item);
      }

      if (typeCategory.includes("chơi game".toLowerCase())) {
        if (item.category.toLowerCase() == "gaming")
          filterArray.push(item);
      }

      if (typeCategory.includes("sang trọng, cao cấp".toLowerCase())) {
        if (item.category.toLowerCase() == "cao cấp")
          filterArray.push(item);
      }
    });

    return filterArray;
  }

  filterPrice(array: Array<LaptopModel>, typePrice: string) {
    let filterArray: LaptopModel[] = [];

    array.forEach(item => {
      if (typePrice.includes("Dưới 10 triệu".toLowerCase())) {
        if (item.price < 10000000)
          filterArray.push(item);
      }

      if (typePrice.includes("Từ 10 - 15 triệu".toLowerCase())) {
        if (item.price >= 10000000 && item.price < 15000000)
          filterArray.push(item);
      }
      
      if (typePrice.includes("Từ 15 - 20 triệu".toLowerCase())) {
        if (item.price >= 15000000 && item.price < 20000000)
          filterArray.push(item);
      }

      if (typePrice.includes("Từ 20 - 30 triệu".toLowerCase())) {
        if (item.price >= 20000000 && item.price < 30000000)
          filterArray.push(item);
      }

      if (typePrice.includes("Từ 30 - 40 triệu".toLowerCase())) {
        if (item.price >= 30000000 && item.price < 40000000)
          filterArray.push(item);
      }
      
      if (typePrice.includes("Trên 40 triệu".toLowerCase())) {
        if (item.price >= 40000000)
          filterArray.push(item);
      }
    });

    return filterArray;
  }

  concatStr(array: Array<any>, subArray: Array<any>) {
    subArray.forEach(item => {
      array.push(item);
    });

    return array;
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
