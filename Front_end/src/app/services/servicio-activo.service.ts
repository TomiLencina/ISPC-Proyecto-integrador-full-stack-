import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})



export class ServicioActivoService {
// Creo servicio activo

  constructor(private http: HttpClient) { }

  actualizaActivo(symbol:string, broker: string, fecha_compra: any, precio_compra: number, cantidad: number, ultimo_precio: number): Observable<any> {
    return this.http.get<any>(`http://localhost:3000/`)
  }
  
}
