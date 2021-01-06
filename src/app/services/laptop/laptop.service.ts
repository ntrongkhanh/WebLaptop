import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http'
import { Observable, forkJoin } from 'rxjs'

import { LaptopModel } from '../../models/laptop.model'

@Injectable({
  providedIn: 'root'
})

export class LaptopService {

  // listLaptopUrl:string = 'https://wavi-backend.herokuapp.com/api/laptop/';
  listLaptopUrl:string = 'http://localhost:8080/api/laptop/';

  constructor(private http: HttpClient) { }

  getLaptops():Observable<LaptopModel[]>{
    return this.http.get<LaptopModel[]>(this.listLaptopUrl);
  }

  getLaptopById(id):Observable<LaptopModel>{
    return this.http.get<LaptopModel>(this.listLaptopUrl + id);
  }
}
