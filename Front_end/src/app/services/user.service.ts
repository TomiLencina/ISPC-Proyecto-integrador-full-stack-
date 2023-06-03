import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  createUser(
    user: string,
    nacionality: string,
    email: string,
    password1: string,
    password2: string
  ): Observable<any> {
    const usuario = { user, nacionality, email, password1, password2 };
    return this.http.post('https://apimocha.com/getportfolio/user', usuario);
  }
}
