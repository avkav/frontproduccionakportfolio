import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Encabezado } from '../models/Encabezado';

@Injectable({
  providedIn: 'root'
})
export class EncabezadoService {

  encabezadoUrl = "https://agile-basin-83248.herokuapp.com/";
  // encabezadoUrl = "http://localhost:8080/";
  

  hpptOptions = {
    headers: new HttpHeaders({
      'Content-type': 'application/json'
    })
  };

    constructor(private httpClient: HttpClient) { }

    public read(): Observable <Encabezado[]>{ //en lugar de any: Encabezado[]
      return this.httpClient.get<any>(this.encabezadoUrl+"ver/encabezado");//`${this.encabezadoUrl}ver/educacion`
    }

    
    public create(encabezado: Encabezado): Observable <Encabezado>{
      return this.httpClient.post<Encabezado>(`${this.encabezadoUrl}new/encabezado`, encabezado);
    }

    public update(id: number, encabezado: Encabezado): Observable <Encabezado>{
      return this.httpClient.post<Encabezado>(`${this.encabezadoUrl}new/encabezado`, encabezado); //en BD es solo un post
    }
    
    public delete(id: number): Observable <void>{
      return this.httpClient.delete<void>(`${this.encabezadoUrl}delete/encabezado/${id}`);//delete/encabezado/${id}`
}

}