import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Educacion } from '../models/Educacion';

@Injectable({
  providedIn: 'root'
})
export class EducacionService {

  educacionUrl = "https://agile-basin-83248.herokuapp.com/";
  // educacionUrl = "http://localhost:8080/";
  

  hpptOptions = {
    headers: new HttpHeaders({
      'Content-type': 'application/json'
    })
  };

    constructor(private httpClient: HttpClient) { }

    public read(): Observable <Educacion[]>{ //en lugar de any: Educacion[]
      return this.httpClient.get<any>(this.educacionUrl+"ver/educacion");//`${this.educacionUrl}ver/educacion`
    }

    
    public create(educacion: Educacion): Observable <Educacion>{
      return this.httpClient.post<Educacion>(`${this.educacionUrl}new/educacion`, educacion);
    }

    public update(id: number, educacion: Educacion): Observable <Educacion>{
      return this.httpClient.post<Educacion>(`${this.educacionUrl}new/educacion`, educacion); //en BD es solo un post
    }
    
    public delete(id: number): Observable <void>{
      return this.httpClient.delete<void>(`${this.educacionUrl}delete/educacion/${id}`);//delete/educacion/${id}`
}

// public delete(id: number): Observable <void>{
//   return this.httpClient.delete<void>(`${this.educacionUrl}delete/educacion/${id}`);
// }


}