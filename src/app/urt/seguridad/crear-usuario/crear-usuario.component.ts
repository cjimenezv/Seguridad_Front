import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators, FormGroup} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { FormBuilder, AbstractControl } from '@angular/forms';
import swal from 'sweetalert2';

import { AuthenticationService } from "src/app/services/auth/authentication.service";
import { User } from 'src/app/models/auth/user';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.component.html',
  styleUrls: ['./crear-usuario.component.css']
})
export class CrearUsuarioComponent {

  /** DEFINICION DE VARIABLES*/
  public usuario: User;
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  validEmailRegister: boolean = false;
  validConfirmPasswordRegister: boolean = false;
  validPasswordRegister: boolean = false;
  validTextType: boolean = false;
  usuarioCreado: boolean = false;

  pattern = "https?://.+";

  matcher = new MyErrorStateMatcher();
  register : FormGroup;
  /** DEFINICION DE VARIABLES*/

  constructor(
    private formBuilder: FormBuilder,
    private _authenticationService: AuthenticationService,
    ) {}

   isFieldValid(form: FormGroup, field: string) {
     return !form.get(field).valid && form.get(field).touched;
   }

   displayFieldCss(form: FormGroup, field: string) {
     return {
       'has-error': this.isFieldValid(form, field),
       'has-feedback': this.isFieldValid(form, field)
     };
   }

   

   onRegister() {
    console.log('En onRegister');
     if (this.register.valid) {
       this.usuarioCreado = true;
       this.usuario = new User();
       this.usuario.cambioClave = false;
       this.usuario.clave = '';
       this.usuario.email = this.email.value;
       this.usuario.idUsuario = 0;
       this.usuario.nombreUsuario = this.nombreUsuario.value;
       this.usuario.primerNombre = this.primerNombre.value;
       this.usuario.segundoNombre = this.segundoNombre.value;
       this.usuario.primerApellido = this.primerApellido.value;
       this.usuario.segundoApellido = this.segundoNombre.value;
       this.usuario.token = '';
       console.log('El registro es valido');
       console.log('email:' + this.email.value);
       this._authenticationService.crear(this.usuario)
          .subscribe(
            data =>  this.exitoEnRegistro( data ),
            error => this.noExitoEnRegistro( error.statusText )
          ) ;
     } else {
       console.log('El registro NO es valido');
       this.validateAllFormFields(this.register);
     }
   }

   exitoEnRegistro(datos){
    console.log('Sucess!!...:' + datos);
    //this.desaOhabilitarCampos();
    //this.esNuevoDisabled = false;
    this.mostrarPopapExitoso();  
    //sessionStorage.removeItem("datosformatercero");  
  }

  noExitoEnRegistro(estadoError){
    console.error( estadoError );
    this.usuarioCreado = false;
    this.mostrarPopapNoExitoso();  
    //sessionStorage.removeItem("datosformatercero");  
  }

  mostrarPopapExitoso(){
    swal.fire({
      title: "Usuario Creado!",
      text: "El cliente ha sido creado satisfactoriamente!",
      buttonsStyling: false,
      customClass:{
        confirmButton: "btn btn-success",
      },
      icon: "success"
  });
  }

  mostrarPopapNoExitoso(){
    swal.fire({
      title: "Problemas en la creación del tercero!",
      text: "Existen problemas en la creación del tercero",
      buttonsStyling: false,
      customClass:{
        confirmButton: "btn btn-info",
      },
      icon: "info"
    });
  }

  desaOhabilitarCampos(){
    //Deshabilita toda la forma
    let control = this.register;
    const estadoForma = this.register.disabled;
    control.disabled ? control.enable() : control.disable();
    //Deshabilita las listas de selección
  }

   validateAllFormFields(formGroup: FormGroup) {
     Object.keys(formGroup.controls).forEach(field => {
       const control = formGroup.get(field);
       if (control instanceof FormControl) {
         control.markAsTouched({ onlySelf: true });
       } else if (control instanceof FormGroup) {
         this.validateAllFormFields(control);
       }
     });
   }

  ngOnInit() {
      this.register = this.formBuilder.group({
        // To add a validator, we must first convert the string value into an array. The first item in the array is the default value if any, then the next item in the array is the validator. Here we are adding a required validator meaning that the firstName attribute must have a value in it.
        email: [null, [Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]],
        primerNombre: [null, Validators.compose([Validators.required, Validators.maxLength(25)])],
        // We can use more than one validator per field. If we want to use more than one validator we have to wrap our array of validators with a Validators.compose function. Here we are using a required, minimum length and maximum length validator.
        segundoNombre: ['',   Validators.maxLength(25)],
        primerApellido: [null, Validators.compose([Validators.required, Validators.maxLength(25)])],
        // We can use more than one validator per field. If we want to use more than one validator we have to wrap our array of validators with a Validators.compose function. Here we are using a required, minimum length and maximum length validator.
        segundoApellido: ['',  Validators.maxLength(25)],
        nombreUsuario: ['',  Validators.compose([Validators.required, Validators.maxLength(25)])],
       });
  }

  emailValidationRegister(e){
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(String(e).toLowerCase())) {
        this.validEmailRegister = true;
    } else {
      this.validEmailRegister = false;
    }
  }

  textValidationType(e){
    if (e) {
        this.validTextType = true;
    }else{
      this.validTextType = false;
    }
  }


/**METODOS HECHOS PARA RETORNAR CADA CONTROL */
get email(){
  return this.register .get('email');
}

get primerNombre(){
  return this.register .get('primerNombre');
}

get segundoNombre(){
  return this.register .get('segundoNombre');
}

get primerApellido(){
  return this.register .get('primerApellido');
}

get segundoApellido(){
  return this.register .get('segundoApellido');
}


get nombreUsuario(){
  return this.register .get('nombreUsuario');
}

/**METODOS HECHOS PARA RETORNAR CADA CONTROL */

}
