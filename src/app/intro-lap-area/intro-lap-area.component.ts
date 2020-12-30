import { Component, OnInit } from '@angular/core';
import { LaptopModel } from '../models/laptop.model';
import { LaptopService } from '../services/laptop/laptop.service';

@Component({
  selector: 'app-intro-lap-area',
  templateUrl: './intro-lap-area.component.html',
  styleUrls: ['./intro-lap-area.component.css']
})
export class IntroLapAreaComponent implements OnInit {
  
  laptops: LaptopModel[];

  constructor(private laptopService: LaptopService) { }

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

        if (i >= 11) break;
      }

      this.laptops = this.laptops.slice(0, 10);
    });
  }
}
