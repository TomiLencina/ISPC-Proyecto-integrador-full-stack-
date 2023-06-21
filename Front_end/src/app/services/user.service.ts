
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
    nationality: string,
    email: string,
    password1: string,
    password2: string
  ): Observable<any> {
    const usuario = { user, nationality, email, password1, password2 };
    return this.http.post('localhost:8000', usuario);
  }

  sendFormData(formData: any): Observable<any> {
    return this.http.post('localhost:8000', formData);
  }
}
