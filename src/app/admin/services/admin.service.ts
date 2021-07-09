import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LaptopModel } from 'src/app/models/laptop.model';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  // baseUrl:string = 'http://localhost:8080/admin/';
  // baseUrl:string = 'http://localhost:8080/admin/';
  baseUrl:string = 'http://34.126.89.62:8080/admin/';

  constructor(private http: HttpClient) { }

  getLaptops(token):Observable<LaptopModel[]>{
    const headers = {'Authorization': 'Bearer ' + token};
    return this.http.get<LaptopModel[]>(this.baseUrl + "laptop/", {headers: headers});
  }

  getLaptopById(id, token):Observable<LaptopModel>{
    const headers = {'Authorization': 'Bearer ' + token};
    return this.http.get<LaptopModel>(this.baseUrl + "laptop/" + id, {headers: headers});
  }

  updateLaptop(id, token, body_dto) {
    const headers = {'Authorization': 'Bearer ' + token};

    return this.http.put(this.baseUrl + "laptop/" + id, body_dto, {headers: headers});
  }
  
  deleteLaptop(id, token) {
    const headers = {'Authorization': 'Bearer ' + token};

    return this.http.delete(this.baseUrl + "laptop/" + id, {headers: headers});
  }
  
  createLaptop(token, body_dto) {
    const headers = {'Authorization': 'Bearer ' + token};

    return this.http.post(this.baseUrl + "laptop/create", body_dto, {headers: headers});
  }
}
