import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Proyectos } from '../models/Proyectos';

@Injectable({
  providedIn: 'root'
})
export class ProyectosService {

  proyectosUrl = "https://agile-basin-83248.herokuapp.com/"
  // proyectosUrl = "http://localhost:8080/";
  

  hpptOptions = {
    headers: new HttpHeaders({
      'Content-type': 'application/json'
    })
  };

    constructor(private httpClient: HttpClient) { }

    public read(): Observable <Proyectos[]>{ //en lugar de any: Proyectos[]
      return this.httpClient.get<any>(this.proyectosUrl+"ver/proyectos");//`${this.proyectosUrl}ver/proyectos`
    }

    
    public create(proyectos: Proyectos): Observable <Proyectos>{
      return this.httpClient.post<Proyectos>(`${this.proyectosUrl}new/proyecto`, proyectos);
    }

    public update(id: number, proyectos: Proyectos): Observable <Proyectos>{
      return this.httpClient.post<Proyectos>(`${this.proyectosUrl}new/proyecto`, proyectos); //en BD es solo un post
    }
    
    public delete(id: number): Observable <void>{
      return this.httpClient.delete<void>(`${this.proyectosUrl}delete/proyecto/${id}`);//delete/proyectos/${id}`
}



}