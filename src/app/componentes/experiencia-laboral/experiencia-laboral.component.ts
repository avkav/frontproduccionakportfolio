import { Component, OnInit } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {Experiencia} from '../../models/Experiencia';
import { ExperienciaService } from 'src/app/servicios/experiencia.service';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { AuthService } from 'src/app/servicios/auth.service';
import { TokenService } from 'src/app/servicios/token.service';
import { compileFactoryFunction } from '@angular/compiler';


@Component({
  selector: 'app-experiencia-laboral',
  templateUrl: './experiencia-laboral.component.html',
  styleUrls: ['./experiencia-laboral.component.css']
})

export class ExperienciaComponent implements OnInit {

  public experiencia: Experiencia[] = [];
  experienciaForm: FormGroup;  
  message: '' = "";
  roles: string[] = [];
  isAdmin: boolean = false;
  isLogged = false

  constructor(
    private experienciaService: ExperienciaService,
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private toastr: ToastrService,
    private tokenService: TokenService
    ) { 
      this.experienciaForm = this.formBuilder.group({
        id:[''],
        position: ['', [Validators.required]],
        company: ['', [Validators.required]],
        img: ['', [Validators.required]],
        mode: ['', [Validators.required]],
        experienceStart: ['', [Validators.required]],
        experienceEnd: ['', [Validators.required]],
        expDescription: ['', [Validators.required]],

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
    this.experienciaService.read().subscribe(
      (data) => {
        this.experiencia = data;
      }
    ); 
  }

  private borrarForm() {
    this.experienciaForm.setValue({
      id:'',
      position: '',
      company: '',
      img: '',
      mode: '',
      experienceStart: '',
      experienceEnd: '',
      expDescription: '',


    });
  }

  private cargarExperiencia(experiencia: Experiencia) {
    this.experienciaForm.setValue({
      id: experiencia.id,
      position: experiencia.position ,
      company:experiencia.company ,
      img: experiencia.img ,
      mode:experiencia.mode ,
      experienceStart: experiencia.experienceStart ,
      experienceEnd: experiencia.experienceEnd,
      expDescription: experiencia.expDescription ,

            
    });
  }

  
 
  nuevaExperiencia(id: any){
    let experiencia: Experiencia = this.experienciaForm.value;
    if(this.experienciaForm.get('id')?.value == ''){
      this.experienciaService.create(experiencia).subscribe(
        (newExperiencia: Experiencia) =>{
          this.toastr.success('Nuevo item agregado', 'FELICITACIONES', {
            timeOut: 3000, positionClass:'toast-top-center'});
          this.experiencia.push(newExperiencia);
          this.reloadData();
        }
      );
    }else{
      this.experienciaService.update(id, experiencia).subscribe(
        ()=>{
          this.toastr.success('Item actualizado exitosamente', 'OK', {
            timeOut: 3000, positionClass:'toast-top-center'
          });
          this.reloadData();
        }
      )
    }
  }

  
  public onNewExperiencia(){
    this.borrarForm();
  }

  public editarExperiencia(index: number){
    let experiencia: Experiencia = this.experiencia[index];
    this.cargarExperiencia(experiencia);
  }

  public eliminarExperiencia(index: any){
    let experiencia: Experiencia = this.experiencia[index];
     if(confirm("¿Desea eliminar el item selecionado?")){
      this.experienciaService.delete(experiencia.id).subscribe(//en lugar de index iba experiencia.id
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
  
    
  


 