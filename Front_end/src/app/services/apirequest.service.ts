import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApirequestService {

  constructor(private http: HttpClient) { }

  getPortfolioById(id: number): Observable<any> {
    return this.http.get<any>(`https://apimocha.com/getportfolio/${id}`)

  }
}


