// import { Component, OnInit } from '@angular/core';
// import {PortfolioService} from '../../servicios/portfolio.service'
// import {FormBuilder, FormGroup, Validators} from '@angular/forms'; 
// import { AcercaDe } from '../../../assets/data/AcercaDe';  
// // import swal from'sweetalert2';
// // import 'sweetalert2/src/sweetalert2.scss';  // Mensajes al Usuario





// @Component({
//   selector: 'app-acerca-de',
//   templateUrl: './acerca-de.component.html',
//   styleUrls: ['./acerca-de.component.css']
// })
// export class AcercaDeComponent implements OnInit {
//   miPortfolio:any;
//   log:boolean=false;
//   email:string="";
//   edition:boolean=false;
//   form:FormGroup;

  
//   constructor(private datosPortfolio:PortfolioService,private formBuilder:FormBuilder, private edicionService:EdicionService, private autService:AutenticacionService) 
//    {
//     this.form=this.formBuilder.group(
//       {
//         id:[0,[Validators.nullValidator]],
//         about:['',[Validators.nullValidator]],
       
//       });
//     }

//     ngOnInit(): void {
//       this.loginSuccess();
//       this.log = this.autService.login(); 
//       this.edicionService.$edit.subscribe((valor)=> {this.edition=valor});
//     }
    
  
//     private loginSuccess(){
//       this.datosPortfolio.obtenerDatosAcercaDe().subscribe(datos => {
//         this.miPortfolio=datos[0];
//         //console.log(datos);
      
//         this.email="mail: "+this.miPortfolio.email;
      
      
//       });}
      
  
//     openEdition(){ //abreModal
//       this.edition=true;
//     }
    
//     closeEdition(){//cierraModal
//       this.edicionService.$edit.emit(false);
//     }
  
//     Edit() {
//       this.openEdition();
//       this.loadForm(this.miPortfolio);
//     }
  
//   //   send() {  // CON EL CLICK DEL BOTON
//   //     let acercade:AcercaDe = this.form.value; // Tomo valores del formulario
//   //     swal.fire({
//   //       title: 'Guardar los cambios?',
//   //       showDenyButton: true,
//   //       showCancelButton: true,
//   //       confirmButtonColor: '#33ff9f',
//   //       denyButtonColor: '#9f33ff' ,
//   //       cancelButtonColor: '#ff33f9',
//   //       confirmButtonText: 'Aceptar',
//   //       denyButtonText: `Cancelar`
//   //     }).then((result) => {
//   //       if (result.isConfirmed) { // Si confirma los cambios
//   //         this.datosPortfolio.editarAcercaDe(acercade).subscribe( //Modifica la BD
//   //           () => {
//   //         this.loginSuccess(); // ACTUALIZA EL ARRAY
//   //         })
//   //         swal.fire({ // Informa al usuario 
//   //           position: 'center',
//   //           icon: 'success',
//   //           title: 'Los cambios se guardaron exitosamente.',
//   //           showConfirmButton: false,
//   //           timer: 2000
//   //         })
//   //       } else if (result.isDenied) { // si decidió no guardar cambios también informa
//   //         swal.fire({
//   //           position: 'center',
//   //           icon: 'info',
//   //           title: 'Los cambios NO fueron guardados.',
//   //           showConfirmButton: false,
//   //           timer: 2000 })
//   //     }
//   //   })
//   //   this.closeEdition();
//   // }
  
//     private loadForm(acercade: AcercaDe) {
//       this.form.setValue({
//         id:acercade.id,           
//         about:acercade.about,
       
//         })
//     }
//   }