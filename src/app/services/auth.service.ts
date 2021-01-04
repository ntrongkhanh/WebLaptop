import { HttpClient, HttpHeaders,HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  url:string = "http://localhost:8080/api/auth/";

  constructor(private httpClient: HttpClient) { }

  postRegister(name:string, email: string, password:string, ) {
    //link api
    //generate model
    let dto = {
      "active": true,
      "admin": true,
      "email": email,
      "id": 0,
      "name": name,
      "password": password,
      "token": "string"
    }

    const headers = { 'Content-Type': 'application/json' };
    const body = JSON.stringify(dto); 
    
    return this.httpClient.post(this.url + "create", body, { headers: headers });
  }
}
