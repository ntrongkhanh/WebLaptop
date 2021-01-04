import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddressService {

  constructor(private httpClient: HttpClient) { }

  getProvince():Observable<any> {
    return this.httpClient.get("/api/city");
  }

  getProvince_H(id):Observable<any> {
    return this.httpClient.get("/api/city/" + id + "/district");
  }

  getProvince_X(id):Observable<any> {
    return this.httpClient.get("/api/district/" + id + "/ward");
  }
}
