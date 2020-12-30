import { Component, OnInit } from '@angular/core';
import { LaptopService } from '../services/laptop/laptop.service';
import { LaptopModel } from '../models/laptop.model';

@Component({
  selector: 'app-new-lap-area',
  templateUrl: './new-lap-area.component.html',
  styleUrls: ['./new-lap-area.component.css']
})
export class NewLapAreaComponent implements OnInit {

  constructor(private laptopService: LaptopService) { }

  laptops: LaptopModel[];

  ngOnInit(): void {
    this.getLaptops();
  }

  async getLaptops() {
    await this.laptopService.getLaptops().subscribe(laptops => {
      this.laptops = laptops["data"];
      console.log(this.laptops);

      for (let i = 0; i < laptops.length; i++){
        for (let y = i + 1; y <= laptops.length; y++) {
          if (laptops[i].year.getTime() < laptops[y].year.getTime()) {
            let temp_ = laptops[i];
            laptops[i] = laptops[y];
            laptops[y] = temp_;
          }
        }

        if (i >= 6) break;
      }

      this.laptops = this.laptops.slice(0, 5);
    });
  }
}
