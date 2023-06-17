import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  url:string = "http://localhost:8000/api/token/"

  constructor(private http : HttpClient) { }

  getToken(credentials:any){

    return this.http.post(this.url, credentials)
  
  }
}
