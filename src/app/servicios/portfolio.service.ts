import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

import { Educacion } from '../../assets/data/Educacion';
import { Experiencia } from '../../assets/data/Experiencia';
import { Habilidades } from '../../assets/data/Habilidades';
import { Proyectos } from '../../assets/data/Proyectos';
import { Idiomas } from '../../assets/data/Idiomas';
import { Encabezado } from '../../assets/data/Encabezado';
import { AcercaDe } from '../../assets/data/AcercaDe';


// import { Educacion } from '../models/Educacion';
// import { Experiencia } from '../models/Experiencia';
// import { Habilidades } from '../models/Habilidades';
// import { Proyectos } from '../models/Proyectos';
// import { Idiomas } from '../models/Idiomas';
// import { Encabezado } from '../models/Encabezado';
// import { AcercaDe } from '../models/AcercaDe';


@Injectable({
  providedIn: 'root'
})
export class PortfolioService { //ProductoService (Luigi)
  url= "https://agile-basin-83248.herokuapp.com/";
  // url= "http://localhost:8080/"; //productoURL = 'http://localhost:8080/producto/';

  constructor(private http:HttpClient) { }

//Carga Vista Portfolio:

obtenerDatosEncabezado():Observable<any> 
{
  return this.http.get<any>(this.url+"ver/encabezado");
}

obtenerDatosAcercaDe():Observable<any> 
{
  return this.http.get<any>(this.url+"ver/acercade");
}

obtenerDatosEducacion():Observable<Educacion[]> 
{
  return this.http.get<any>(this.url+"ver/educacion");
}

obtenerDatosExperiencia():Observable<Experiencia[]> 
{
  return this.http.get<any>(this.url+"ver/experiencia");
}

obtenerDatosIdiomas():Observable<Idiomas[]> 
{
  return this.http.get<any>(this.url+"ver/idiomas");
}

obtenerDatosHabilidades():Observable<Habilidades[]> 
{
  return this.http.get<any>(this.url+"ver/habilidades");
}

obtenerDatosProyectos():Observable<Proyectos[]> 
{
  return this.http.get<any>(this.url+"ver/proyectos");
}

//Edición Vista Portfolio:

//CRUD ENCABEZADO:

editarEncabezado(encabezado:Encabezado): Observable<any> {//encabezado:any
  return this.http.post<any>(this.url + "new/encabezado", encabezado);
}

//CRUD ACERCADE:

editarAcercaDe(acercade:AcercaDe): Observable<any> {//acercade:any
  return this.http.post<any>(this.url + "new/acercade", acercade);
}


//CRUD EDUCACION:

crearEducacion(educacion:Educacion): Observable<Educacion> {
  return this.http.post<any>(this.url + "new/educacion", educacion);
}
editarEducacion(educacion:Educacion): Observable<Educacion> {
  return this.http.post<any>(this.url + "new/educacion", educacion);//alternativa: método put y modificar url "update/educacion"
}
borrarEducacion(id:number): Observable<Educacion> {
  return this.http.delete<any>(this.url + "delete/educacion/"+id);
}

//CRUD EXPERIENCIA:

crearExperiencia(experiencia:Experiencia): Observable<Experiencia> {
  return this.http.post<any>(this.url + "new/experiencia", experiencia);
}
editarExperiencia(experiencia:Experiencia): Observable<Experiencia> {
  return this.http.post<any>(this.url + "new/experiencia", experiencia);//alternativa: método put y modificar url "update/experiencia"
}
borrarExperiencia(id:number): Observable<Experiencia> {
  return this.http.delete<any>(this.url + "delete/experiencia/"+id);
}

//CRUD IDIOMAS:

crearIdiomas(idiomas:Idiomas): Observable<Idiomas> {
  return this.http.post<any>(this.url + "new/idiomas", idiomas);
}
editarIdiomas(idiomas:Idiomas): Observable<Idiomas> {
  return this.http.post<any>(this.url + "new/idiomas", idiomas);//alternativa: método put y modificar url "update/idiomas"
}
borrarIdiomas(id:number): Observable<Idiomas> {
  return this.http.delete<any>(this.url + "delete/idiomas/"+id);
}

//CRUD HABILIDADES:

crearHabilidades(habilidades:Habilidades): Observable<Habilidades> {
  return this.http.post<any>(this.url + "new/habilidades", habilidades);
}
editarHabilidades(habilidades:Habilidades): Observable<Habilidades> {
  return this.http.post<any>(this.url + "new/habilidades", habilidades);//alternativa: método put y modificar url "update/habilidades"
}
borrarHabilidades(id:number): Observable<Habilidades> {
  return this.http.delete<any>(this.url + "delete/habilidades/"+id);
}

//CRUD PROYECTOS:

crearProyectos(proyectos:Proyectos): Observable<Proyectos> {
  return this.http.post<any>(this.url + "new/proyectos", proyectos);
}
editarProyectos(proyectos:Proyectos): Observable<Proyectos> {
  return this.http.post<any>(this.url + "new/proyectos", proyectos);//alternativa: método put y modificar url "update/proyectos"
}
borrarProyectos(id:number): Observable<Proyectos> {
  return this.http.delete<any>(this.url + "delete/proyectos/"+id);
}

}


//Masterclass Back-End
/*JSON WEB TOKEN  - JWT

Autenticación basada en token (JWT)
3 partes codificada en base 64: 
1encabezado
2datos - credenciales de usuario-fecha de creación y caducidad del token
3firma - clave secreta

Investigar sistema de rutas de angular

Angular provee dos tipos de formularios: 

1 Reactivos - son mas robustos, escalables, testeables
2 Basados en templates

Formularios reactivos: 

directiva form control - componente typescript
form builder - es un servicio que provee angular




*/