import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ApirequestService {

  baseURL: string = "http://localhost:8000/"

  constructor(private http: HttpClient) { }

  getPortfolioById(id: number): Observable<any> {
    return this.http.get<any>(`https://apimocha.com/getportfolio/${id}`)

  }

  createuser(userData:any){
    return this.http.post<any>(this.baseURL + "api/registry", userData)
  }

  getPortfolio(token:string){
    const headers = new HttpHeaders({
      'Authorization': 'Bearer ' + token
    });
    return this.http.get<any>(this.baseURL + "api/portfolio", {headers})
  }

  addOperation(token:string, operationData:any){
    const headers = new HttpHeaders({
      'Authorization': 'Bearer ' + token
    });
    return this.http.post<any>(this.baseURL + "api/operation", operationData, {headers})
  }

}


