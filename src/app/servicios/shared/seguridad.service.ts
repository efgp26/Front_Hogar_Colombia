import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { CredencialesModel } from 'src/app/modelos/credenciales.model';

@Injectable({
  providedIn: 'root'
})
export class SeguridadService {
  //variable para guardar la url
  url:string= "http://localhost:3000";
  constructor(
    private http: HttpClient
  ) { }
  //Metodo para enviar por medio del POST los datos al Backend
  Login(credenciales:CredencialesModel):Observable<any>{
    return this.http.post(`${this.url}/Login`,{
      email: credenciales.email,
      password: credenciales.password
    });
  }
}