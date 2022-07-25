import { Component, OnInit } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {Encabezado} from '../../models/Encabezado';
import { EncabezadoService } from 'src/app/servicios/encabezado.service';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { AuthService } from 'src/app/servicios/auth.service';
import { TokenService } from 'src/app/servicios/token.service';


@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})

export class EncabezadoComponent implements OnInit {

  public encabezado: Encabezado[] = [];
  encabezadoForm: FormGroup;  
  message: '' = "";
  roles: string[] = [];
  isAdmin: boolean = false;
  isLogged = false

  constructor(
    private encabezadoService: EncabezadoService,
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private toastr: ToastrService,
    private tokenService: TokenService
    ) { 
      this.encabezadoForm = this.formBuilder.group({
        id:[''],
        name: ['', [Validators.required]],
        backImage: ['', [Validators.required]],
        profileImage: ['', [Validators.required]], //image
        position:  ['', [Validators.required]],
        companyName: ['', [Validators.required]], //company.name
        companyImg:  ['', [Validators.required]],
        companyUrl: ['', [Validators.required]],
        schoolName: ['', [Validators.required]],
        schoolImg: ['', [Validators.required]],
        schoolUrl: ['', [Validators.required]],
        ubication: ['', [Validators.required]], 

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
    this.encabezadoService.read().subscribe(
      (data) => {
        this.encabezado = data;
      }
    ); 
  }

  private borrarForm() {
    this.encabezadoForm.setValue({
      id:'',
      name: '',
      backImage: '',
      profileImage: '', //image
      position:  '',
      companyName: '', //company.name
      companyImg:  '',
      companyUrl: '',
      schoolName: '',
      schoolImg: '',
      schoolUrl: '',
      ubication: '' 
    });
  }

  private cargarEncabezado(encabezado: Encabezado) {
    this.encabezadoForm.setValue({
      id: encabezado.id,
      name: encabezado.name ,
      backImage: encabezado.backImage ,
      profileImage: encabezado.profileImage , //image
      position: encabezado.position ,
      companyName: encabezado.companyName , //company.name
      companyImg: encabezado.companyImg ,
      companyUrl: encabezado.companyUrl ,
      schoolName: encabezado.schoolName ,
      schoolImg: encabezado.schoolImg ,
      schoolUrl: encabezado.schoolUrl ,
      ubication: encabezado.ubication 

    });
  }

  
 
  nuevoEncabezado(id: number){
    let encabezado: Encabezado = this.encabezadoForm.value;
    if(this.encabezadoForm.get('id')?.value == ''){
      this.encabezadoService.create(encabezado).subscribe(
        (newEncabezado: Encabezado) =>{
          this.toastr.success('Nuevo item agregado', 'FELICITACIONES', {
            timeOut: 3000, positionClass:'toast-top-center'});
          this.encabezado.push(newEncabezado);
          this.reloadData();
        }
      );
    }else{
      this.encabezadoService.update(id, encabezado).subscribe(
        ()=>{
          this.toastr.success('Item actualizado exitosamente', 'OK', {
            timeOut: 3000, positionClass:'toast-top-center'
          });
          this.reloadData();
        }
      )
    }
  }

  
  public onNewEncabezado(){
    this.borrarForm();
  }

  public editarEncabezado(index: number){
    let encabezado: Encabezado = this.encabezado[index];
    this.cargarEncabezado(encabezado);
  }

  public eliminarEncabezado(index: any){
    let encabezado: Encabezado = this.encabezado[index];
     if(confirm("¿Desea eliminar el item selecionado?")){
      this.encabezadoService.delete(encabezado.id).subscribe(
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
  
    
  


 