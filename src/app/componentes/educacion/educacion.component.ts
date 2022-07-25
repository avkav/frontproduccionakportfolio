import { Component, OnInit } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {Educacion} from '../../models/Educacion';
import { EducacionService } from 'src/app/servicios/educacion.service';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { AuthService } from 'src/app/servicios/auth.service';
import { TokenService } from 'src/app/servicios/token.service';


@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})

export class EducacionComponent implements OnInit {

  public educacion: Educacion[] = [];
  educacionForm: FormGroup;  
  message: '' = "";
  roles: string[] = [];
  isAdmin: boolean = false;
  isLogged = false

  constructor(
    private educacionService: EducacionService,
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private toastr: ToastrService,
    private tokenService: TokenService
    ) { 
      this.educacionForm = this.formBuilder.group({
        id:[''],
        title:['', [Validators.required]],
        school:['', [Validators.required]],
        schoolStart:['', [Validators.required]],
        schoolEnd:['', [Validators.required]],
        img:[''],
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
    this.educacionService.read().subscribe(
      (data) => {
        this.educacion = data;
      }
    ); 
  }

  private borrarForm() {
    this.educacionForm.setValue({
      id:'',
      title:'',
      school:'',
      schoolStart:'',
      schoolEnd:'',
      img:''
    });
  }

  private cargarEducacion(educacion: Educacion) {
    this.educacionForm.setValue({
      id: educacion.id,
      school : educacion.school,
      img : educacion.img,
      title : educacion.title,
      schoolStart: educacion.schoolStart,
      schoolEnd : educacion.schoolEnd
            
    });
  }

  
 
  nuevaEducacion(id: number){
    let educacion: Educacion = this.educacionForm.value;
    if(this.educacionForm.get('id')?.value == ''){
      this.educacionService.create(educacion).subscribe(
        (newEducacion: Educacion) =>{
          this.toastr.success('Nuevo item agregado', 'FELICITACIONES', {
            timeOut: 3000, positionClass:'toast-top-center'});
          this.educacion.push(newEducacion);
          this.reloadData();
        }
      );
    }else{
      this.educacionService.update(id, educacion).subscribe(
        ()=>{
          this.toastr.success('Item actualizado exitosamente', 'OK', {
            timeOut: 3000, positionClass:'toast-top-center'
          });
          this.reloadData();
        }
      )
    }
  }

  
  public onNewEducacion(){
    this.borrarForm();
  }

  public editarEducacion(index: number){
    let educacion: Educacion = this.educacion[index];
    this.cargarEducacion(educacion);
  }

  public eliminarEducacion(index: any){
    let educacion: Educacion = this.educacion[index];
     if(confirm("¿Desea eliminar el item selecionado?")){
      this.educacionService.delete(educacion.id).subscribe(//en lugar de index iba educacion.id
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
  
    
  


 