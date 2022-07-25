import { Component, OnInit } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {Proyectos} from '../../models/Proyectos';
import { ProyectosService } from 'src/app/servicios/proyectos.service';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { AuthService } from 'src/app/servicios/auth.service';
import { TokenService } from 'src/app/servicios/token.service';


@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})

export class ProyectosComponent implements OnInit {

  public proyectos: Proyectos[] = [];
  proyectosForm: FormGroup;  
  message: '' = "";
  roles: string[] = [];
  isAdmin: boolean = false;
  isLogged = false

  constructor(
    private proyectosService: ProyectosService,
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private toastr: ToastrService,
    private tokenService: TokenService
    ) { 
      this.proyectosForm = this.formBuilder.group({
        id:[''],
        name:['', [Validators.required]],
        description:['', [Validators.required]],
        url:['', [Validators.required]],
        projectDate:['', [Validators.required]],
        
      });
    }


  ngOnInit() {
    this.reloadData();

    if(this.tokenService.getToken()){
      this.isLogged = true;
      console.log("El servicio esta siendo consumido");
    }else {
      this.isLogged = false;
    }

    this.roles = this.tokenService.getAuthorities();
    this.roles.forEach( role => {
      if(role === 'ROLE_ADMIN') {
        this.isAdmin = true;
        }
      })
    
  }

  private reloadData() {
    this.proyectosService.read().subscribe(
      (data) => {
        this.proyectos = data;
      }
    ); 
  }

  private borrarForm() {
    this.proyectosForm.setValue({
    id:'',
    name:'',
    description:'',
    url:'',
    projectDate:'',

    });
  }

  private cargarProyectos(proyectos: Proyectos) {
    this.proyectosForm.setValue({
    id: proyectos.id,
    name: proyectos.name,
    description: proyectos.description,
    url: proyectos.url,
    projectDate: proyectos.projectDate,
            
    });
  }

  
 
  nuevoProyecto(id: number){
    let proyectos: Proyectos = this.proyectosForm.value;
    if(this.proyectosForm.get('id')?.value == ''){
      this.proyectosService.create(proyectos).subscribe(
        (newProyecto: Proyectos) =>{
          this.toastr.success('Nuevo item agregado', 'FELICITACIONES', {
            timeOut: 3000, positionClass:'toast-top-center'});
          this.proyectos.push(newProyecto);
          this.reloadData();
        }
      );
    }else{
      this.proyectosService.update(id, proyectos).subscribe(
        ()=>{
          this.toastr.success('Item actualizado exitosamente', 'OK', {
            timeOut: 3000, positionClass:'toast-top-center'
          });
          this.reloadData();
        }
      )
    }
  }

  
  public onNewProyecto(){
    this.borrarForm();
  }

  public editarProyecto(index: number){
    let proyectos: Proyectos = this.proyectos[index];
    this.cargarProyectos(proyectos);
  }

  public eliminarProyecto(index: any){
    let proyectos: Proyectos = this.proyectos[index];
     if(confirm("¿Desea eliminar el item selecionado?")){
      this.proyectosService.delete(proyectos.id).subscribe(//en lugar de index iba proyectos.id
        ()=> {
          this.toastr.error('Item Eliminado', 'ATENCION!', {
            timeOut: 3000, positionClass: 'toast-top-center'
          });
          this.reloadData();
        }
      )
    }
  }

}
  
    
  


 