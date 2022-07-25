import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Experiencia } from '../models/Experiencia';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {

  experienciaUrl = "https://agile-basin-83248.herokuapp.com/";
  // experienciaUrl = "http://localhost:8080/";
  

  hpptOptions = {
    headers: new HttpHeaders({
      'Content-type': 'application/json'
    })
  };

    constructor(private httpClient: HttpClient) { }

    public read(): Observable <Experiencia[]>{ //en lugar de any: Experiencia[]
      return this.httpClient.get<any>(this.experienciaUrl+"ver/experiencias");//`${this.experienciaUrl}ver/experiencia`
    }

    
    public create(experiencia: Experiencia): Observable <Experiencia>{
      return this.httpClient.post<Experiencia>(`${this.experienciaUrl}new/experiencia`, experiencia);
    }

    public update(id: number, experiencia: Experiencia): Observable <Experiencia>{
      return this.httpClient.post<Experiencia>(`${this.experienciaUrl}new/experiencia`, experiencia); //en BD es solo un post
    }
    
    public delete(id: number): Observable <void>{
      return this.httpClient.delete<void>(`${this.experienciaUrl}delete/experiencia/${id}`);//delete/experiencia/${id}`
}

// public delete(id: number): Observable <void>{
//   return this.httpClient.delete<void>(`${this.experienciaUrl}delete/experiencia/${id}`);
// }


}