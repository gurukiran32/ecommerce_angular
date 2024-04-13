import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environments';

const BASIC_URL = environment['BASIC_URL'];

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  register(signupDto: any): Observable<any> {
    return this.http.post(BASIC_URL + "signup", signupDto)
  }

  login(authRequest: any): Observable<any>{
    return this.http.post(BASIC_URL + "authenticate", authRequest)
  }
}
