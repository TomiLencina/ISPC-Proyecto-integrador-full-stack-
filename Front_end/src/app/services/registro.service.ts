import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegistroService {
  private backendUrl = 'localhost:8000'; //

  constructor(private http: HttpClient) {}

  enviarDatosFormulario(formData: any) {
    const url = `${this.backendUrl}`;
    return this.http.post(url, formData);
  }
}
