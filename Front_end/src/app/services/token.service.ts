import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }

  getToken() {
    let token = localStorage.getItem("accessToken")
    return token
  }
}
