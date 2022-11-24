import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ModeloInmueble } from 'src/app/modelos/inmueble.model';
import { SeguridadService } from './seguridad.service';

@Injectable({
  providedIn: 'root'
})
export class InmuebleService {
url='http://localhost:3000'
token: String = '';

  constructor(private http: HttpClient,
    private seguridadServicio: SeguridadService) {
    this.token = this.seguridadServicio.ObtenerToken();
  }

  ObtenerRegistros():Observable<ModeloInmueble[]>{
    return this.http.get<ModeloInmueble[]>(`${this.url}/inmuebles`)
  }

  CrearInmueble(producto: ModeloInmueble):Observable<ModeloInmueble>{
    return this.http.post<ModeloInmueble>(`${this.url}/inmuebles`,producto,{
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.token}`
      })
    })
  }

  ActualizarInmueble(producto: ModeloInmueble):Observable<ModeloInmueble>{
    return this.http.put<ModeloInmueble>(`${this.url}/inmuebles`,producto,{
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.token}`
      })
    })
  }

  EliminarInmueble(id:string):Observable<any>{
    return this.http.delete(`${this.url}/inmuebles/${id}`,{
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.token}`
      })
    })
  }
}
