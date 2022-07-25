// import { Component, OnInit } from '@angular/core';
// import {PortfolioService} from '../../servicios/portfolio.service'
// import {FormBuilder, FormGroup, Validators} from '@angular/forms'; // Form CRUD
// import { AutenticacionService } from 'src/app/servicios/autenticacion.service';  // Info Login
// import { EdicionService } from 'src/app/servicios/edicion.service'; // Habilita Edicion
// import { Idiomas } from '../../../assets/data/Idiomas';  
// // import swal from'sweetalert2';
// // import 'sweetalert2/src/sweetalert2.scss';  // Mensajes al Usuario





// @Component({
//   selector: 'app-idiomas',
//   templateUrl: './idiomas.component.html',
//   styleUrls: ['./idiomas.component.css']
// })
// export class IdiomasComponent implements OnInit {
//   edition:boolean=false;
//   log:boolean=false;
//   idiomaslist:Idiomas[]=[];
//   idiomas:any;
//   form:FormGroup;
//   messageBtn:string=""; 
//   public delete:boolean=false;
 

  
//   constructor(private datosPortfolio:PortfolioService,private formBuilder:FormBuilder, private edicionService:EdicionService, private autService:AutenticacionService) 
//    {
//     this.form=this.formBuilder.group(
//       {
//         id:[0,[Validators.nullValidator]],
//         name:['',[Validators.nullValidator]],
//         idiomLevel:['',[Validators.nullValidator]],
        
       
//       });
//     }

//     ngOnInit(): void {
//       this.loadSection();
//       this.log = this.autService.login(); 
//       this.edicionService.$edit.subscribe((valor)=> {this.edition=valor});
//     }
    
  
//     private loadSection(){
//       this.datosPortfolio.obtenerDatosIdiomas().subscribe(datos => {
//         // this.idiomaslist=datos;
        
            
//       });}
      

    
  
//       createSection() {
//         this.openEdition();
//         this.cleanForm();
//         this.delete=false;
//         this.messageBtn="Crear nuevo item en esta sección";
//       }
    
//       updateSection(item: number) {
//         this.openEdition();
//         this.idiomas = this.idiomaslist[item];
//         this.messageBtn="Modificar item en esta sección";
//         this.delete=false;
//         this.loadForm(this.idiomas);
//       }
    
//       deleteSection(item: number) {
//         this.openEdition();
//         this.idiomas = this.idiomaslist[item];
//         this.messageBtn="Eliminar item de esta sección";
//         this.delete=true;
//         this.loadForm(this.idiomas);
//       }
  

//       openEdition(){ //habilita edición
//         this.edition=true;
//       }
      
//       closeEdition(){//cierra sección de edición
//         this.edicionService.$edit.emit(false);
//       }

//       private cleanForm() {
//         this.form.setValue({
//           id:0,
//           name:'',
//           idiomLevel:'',
         
          
//         })

//       }

     

//   //     send2() {  //fx que se activa al hacer click en el botón de edición o nuevo
//   //       let idiomas: Idiomas = this.form.value; // Tomo valores del formulario
//   //       //console.log(idiomas);
//   //       if (this.messageBtn=="Crear nuevo item en esta sección") { // SI ES UN ALTA
//   //         this.datosPortfolio.crearIdiomas(idiomas).subscribe(  //AGREGA EN BD Y TRAE NUEVA EXPERIENCIA 
//   //           (newIdiomas: Idiomas) => {
//   //             this.idiomaslist.push(newIdiomas); // AGREGA AL ARRAY
//   //           }
//   //         );
//   //         swal.fire({   // pop-up mensaje de confirmación 
//   //           position: 'center',
//   //           icon: 'success',
//   //           title: 'El item ' + idiomas.name + ' ha sido agregado.',
//   //           showConfirmButton: false,
//   //           timer: 2000
//   //         })
//   //       } 
//   //       else {    
//   //           if (this.messageBtn=="Modificar item en esta sección") {   // SI ES MODIFICACION
//   //             // console.log("Estamos en la modificación");
//   //             swal.fire({ // Consulta al Usuario
//   //               title: 'Desea guardar los cambios?',
//   //               showDenyButton: true,
//   //               showCancelButton: true,
//   //               confirmButtonColor: '#33ff9f',
//   //               denyButtonColor: '#9f33ff' ,
//   //               cancelButtonColor: '#ff33f9',
//   //               confirmButtonText: 'Aceptar',
//   //               denyButtonText: `Cancelar`,
//   //             }).then((result) => {
//   //               if (result.isConfirmed) {
//   //                 this.datosPortfolio.editarIdiomas(idiomas).subscribe(  // Modifica la BD
//   //                   () => {
//   //                 this.loadSection(); // ACTUALIZA EL ARRAY de Idiomass
//   //               })
//   //               swal.fire({   // pop-up confirmar modificación
//   //                 position: 'center',
//   //                 icon: 'success',
//   //                 title: 'La sección ha sido actualizada.',
//   //                 showConfirmButton: false,
//   //                 timer: 2000})
//   //               } else if (result.isDenied) {   // Ventanita de confirmación de NO Modificación
//   //                 swal.fire({
//   //                   position: 'center',
//   //                   icon: 'info',
//   //                   title: 'Los cambios NO fueron guardados.',
//   //                   showConfirmButton: false,
//   //                   timer: 2000})
//   //               }
//   //             })
//   //           }
//   //           else {  // SI ES UNA BAJA
//   //             //console.log("Estamos en la baja");
//   //             swal.fire({   // Cosnulta al Usuario
//   //               title: 'Está seguro?',
//   //               text: "Desea eliminar el item " + idiomas.name,
//   //               icon: 'warning',
//   //               showCancelButton: true,
//   //               confirmButtonColor: '#33ff9f',
//   //               cancelButtonColor: '#ff33f9',
//   //               confirmButtonText: 'Sí, eliminar!'
//   //             }).then((result) => {   
//   //               if (result.isConfirmed) {
//   //                 this.datosPortfolio.borrarIdiomas(idiomas.id).subscribe(  // Borra en BD
//   //                 () => {
//   //                 this.loadSection();  } )    // Actualiza el ARRAY Idiomas
//   //                 swal.fire({   // Ventanita de Confirmación Baja
//   //                   position: 'center',
//   //                   icon: 'success',
//   //                   title: 'El item ' + idiomas.name + ' ha sido borrado.',
//   //                   showConfirmButton: false,
//   //                   timer: 2000})
//   //               } }) } }
    
//   //   this.closeEdition();
//   // }
  
//     private loadForm(idiomas:Idiomas) {
//       this.form.setValue({
//         id:idiomas.id,           
//         name:idiomas.name,
//         idiomLevel:idiomas.idiomLevel,
        
       
//         })
//     }
//   }