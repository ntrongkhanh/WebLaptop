import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  // baseUrl:string = "http://localhost:8080/user/"
  // baseUrl:string = "https://wavi-backend.herokuapp.com/user/"
  baseUrl:string = "https://34.126.89.62:8080/user/"


  constructor(private httpClient: HttpClient) { }

  getUser(token) {
    const headers = {'Authorization': 'Bearer ' + token};
    return this.httpClient.get(this.baseUrl + "getUser", {headers: headers});
  }

  removeToken(token) {
    const headers = {'Authorization': 'Bearer ' + token};
    return this.httpClient.get(this.baseUrl + "logout", {headers: headers});
  }

  setOrder(token, body_dto) {
    const headers = {'Authorization': 'Bearer ' + token};
    const body = (body_dto);

    return this.httpClient.post(this.baseUrl + "order", body, {headers: headers});
  }
}
