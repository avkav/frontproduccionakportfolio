import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// import { AcercaDeComponent } from './componentes/acerca-de/acerca-de.component';
import { EducacionComponent } from './componentes/educacion/educacion.component';
// import { ExperienciaComponent } from './componentes/experiencia-laboral/experiencia-laboral.component';
// import { IdiomasComponent } from './componentes/idiomas/idiomas.component';
// import { HabilidadesComponent } from './componentes/habilidades/habilidades.component';
// import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
// import { EncabezadoComponent } from './componentes/encabezado/encabezado.component';

// import { LoginComponent} from './componentes/auth/login.component';
// import { RegistroComponent} from './componentes/auth/registro.component';

// import { MenuComponent } from './componentes/menu/menu.component';
// import { IndexComponent } from './componentes/index/index.component';

import { ProdGuardService as guard } from './guards/prod-guard.service';

// import { IniciarSesionComponent} from './componentes/iniciar-sesion/iniciar-sesion.component';
// import { PortfolioComponent} from './componentes/portfolio/portfolio.component';



const routes: Routes =  [
  { path: '', component: EducacionComponent },
  // { path: 'login', component: LoginComponent },
  // { path: 'registro', component: RegistroComponent },
  
  
  //GET - ADMIN & USER
  // { path: 'ver/encabezado', component: EncabezadoComponent, canActivate: [guard], data: { expectedRol: ['admin', 'user'] } },
  // { path: 'ver/acercade', component: AcercaDeComponent, canActivate: [guard], data: { expectedRol: ['admin', 'user'] } },
  { path: 'ver/educacion', component: EducacionComponent, canActivate: [guard], data: { expectedRol: ['admin', 'user'] } },
  // { path: 'ver/experiencia', component: ExperienciaComponent, canActivate: [guard], data: { expectedRol: ['admin', 'user'] } },
  // { path: 'ver/idiomas', component: IdiomasComponent, canActivate: [guard], data: { expectedRol: ['admin', 'user'] } },
  // { path: 'ver/habilidades', component: HabilidadesComponent, canActivate: [guard], data: { expectedRol: ['admin', 'user'] } },

  
  //POST - ADMIN

 
  // { path: 'new/encabezado', component: EncabezadoComponent, canActivate: [guard], data: { expectedRol: ['admin'] } },
  // { path: 'new/acercade', component: AcercaDeComponent, canActivate: [guard], data: { expectedRol: ['admin'] } },
  { path: 'new/educacion', component: EducacionComponent, canActivate: [guard], data: { expectedRol: ['admin'] } },
  // { path: 'new/experiencia', component: ExperienciaComponent, canActivate: [guard], data: { expectedRol: ['admin'] } },
  // { path: 'new/idiomas', component: IdiomasComponent, canActivate: [guard], data: { expectedRol: ['admin'] } },
  // { path: 'new/habilidades', component: HabilidadesComponent, canActivate: [guard], data: { expectedRol: ['admin'] } },


  //DELETE - ADMIN
  
 
  // { path: 'delete/encabezado/:id', component: EncabezadoComponent, canActivate: [guard], data: { expectedRol: ['admin'] } },
  // { path: 'delete/acercade/:id', component: AcercaDeComponent, canActivate: [guard], data: { expectedRol: ['admin'] } },
  { path: 'delete/educacion/:id', component: EducacionComponent, canActivate: [guard], data: { expectedRol: ['admin'] } },
  // { path: 'delete/experiencia/:id', component: ExperienciaComponent, canActivate: [guard], data: { expectedRol: ['admin'] } },
  // { path: 'delete/idiomas/:id', component: IdiomasComponent, canActivate: [guard], data: { expectedRol: ['admin'] } },
  // { path: 'delete/habilidades/:id', component: HabilidadesComponent, canActivate: [guard], data: { expectedRol: ['admin'] } },

  
  { path: '**', redirectTo: '', pathMatch: 'full' }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
