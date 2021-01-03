import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthAccountService {

  authAccountUrl: string = 'http://localhost:8080/api/auth/confirm';

  constructor(private http: HttpClient) { }

  getAuthAccount(email: string, token: string) {
    return this.http.get(this.authAccountUrl + '?token=' + token + '&email=' + email);
  }
}
