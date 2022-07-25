import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// import { AcercaDeComponent } from './componentes/acerca-de/acerca-de.component';
import { EducacionComponent } from './componentes/educacion/educacion.component';
import { ExperienciaComponent } from './componentes/experiencia-laboral/experiencia-laboral.component';
// import { IdiomasComponent } from './componentes/idiomas/idiomas.component';
// import { HabilidadesComponent } from './componentes/habilidades/habilidades.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { EncabezadoComponent } from './componentes/encabezado/encabezado.component';

import { MenuComponent } from './componentes/menu/menu.component';
// import { IndexComponent } from './componentes/index/index.component';





import { HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

//external
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { interceptorProvider } from './interceptor/prod-interceptor.service';

// import { LoginComponent } from './componentes/auth/login.component';
// import { RegistroComponent } from './componentes/auth/registro.component';


// import { IniciarSesionComponent } from './componentes/iniciar-sesion/iniciar-sesion.component';
// import { PortfolioComponent } from './componentes/portfolio/portfolio.component';


// import { PortfolioService } from './servicios/portfolio.service';
// import { InterceptorService } from './servicios/interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    // AcercaDeComponent,
    EducacionComponent,
    ExperienciaComponent,
    // IdiomasComponent,
    // HabilidadesComponent,
    ProyectosComponent,
    EncabezadoComponent,
    // LoginComponent,
    // RegistroComponent,
    MenuComponent,
    // IndexComponent
      ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
    
  ],
  providers: 
    [interceptorProvider]
    /*PortfolioService,
  {provide:HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true}*/
  
,
  bootstrap: [AppComponent]
})
export class AppModule { }
