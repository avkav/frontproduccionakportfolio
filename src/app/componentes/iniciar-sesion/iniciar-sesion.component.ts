import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';   
import {FormBuilder, FormGroup, Validators} from '@angular/forms';  
import { AutenticacionService } from 'src/app/servicios/autenticacion.service';  
// import swal from 'sweetalert2'; 
// import 'sweetalert2/src/sweetalert2.scss'; 

@Component({
  selector: 'app-iniciar-sesion',
  templateUrl: './iniciar-sesion.component.html',
  styleUrls: ['./iniciar-sesion.component.css']
})
export class IniciarSesionComponent implements OnInit {
  form: FormGroup;
  constructor(private formBuilder:FormBuilder, private autenticacionService:AutenticacionService, private rutas:Router) {
    this.form=this.formBuilder.group(
      {
      email:['',[Validators.required, Validators.email]],
      password:['',[Validators.required,Validators.minLength(8)]]});
  }

  ngOnInit(): void {}

  get Email()
  {return this.form.get('email');}

  get Password()
  {return this.form.get('password');}

  // send(event:Event){
  //   event.preventDefault;
  //   this.autenticacionService.IniciarSesion(this.form.value).subscribe(   // Envía las credenciales a valorar
  //   (response: Boolean) => {
  //     if (response)   // si las credenciales fueron correctas
  //       this.rutas.navigate(['/portfolio']);   // redirige al portfolio con usuario loggeado
  //     else
  //       swal.fire({   // Mensaje de Error
  //         icon: 'error',
  //         title: 'Error!',
  //         text: 'Las credenciales ingresadas son incorrectas',
  //       })
  //   });
  // }
}