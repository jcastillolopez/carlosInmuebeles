import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router, } from '@angular/router';
import { Globales } from 'src/app/services/Globales.service';

@Component({
  selector: 'administradorRegistro',
  templateUrl: './administradorRegistro.component.html',
  styleUrls: ['./administradorRegistro.component.css']
})
export class AdministradorRegistroComponent implements OnInit {
  registroForm: FormGroup;
  result: any;
  
  path_create_update: string;
  constructor(
    private metodosGlobales:Globales,   
    private activateRouter: ActivatedRoute,
    private router: Router,
  ) { 
    
    this.path_create_update = 'personaspagadoras'
    this.result = "";
    this.registroForm = new FormGroup({
      idPersonaPagadora: new FormControl(),
      nombre: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(60),
      ]),
      apellidos: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(60),
      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.pattern(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$/)
      ]),      
      nie: new FormControl('', [
        Validators.required,
        this.dniValidators
      ]),  
      fechaNacimiento: new FormControl(),
      tlf: new FormControl(),
      tlfMovil: new FormControl(),
      localidad: new FormControl(),
      direccion: new FormControl(),
      codigoPostal: new FormControl(), 
      borrado: new FormControl(false),
      
     
    })
  }

  ngOnInit() {   
  }

  async enviar() {
    if (this.registroForm.value.idUsuario !== null) {
      await this.metodosGlobales.update(this.registroForm.value, this.path_create_update);
    } else {
      console.log("antes del if de validacion")
      if (this.registroForm.valid) {
        console.log('prueba antes de funcion creado', this.registroForm.value)
        await this.metodosGlobales.create(this.registroForm.value, this.path_create_update);
        console.log('prueba despues de funcion creado', this.registroForm.value)

      } else { let result = 'hay datos no validos en el formulario' };
    }
  }
  dniValidators(pControl: FormControl) {
    const value = pControl.value;
    const grupoLetras = 'TRWAGMYFPDXBNJZSQVHLCKET';

    if (/^\d{8}[a-zA-Z]$/.test(value)) {
      const numero = value.substring(0, value.length - 1);
      const letra = value.substring(value.length - 1, value.length);
      const resto = numero % 23;
      const letraSeleccionada = grupoLetras.substring(resto, resto + 1);

      if (letraSeleccionada != letra.toUpperCase()) {
        return { dnivalidator: true };
      } else {
        return null;
      }
    } else {
      return { dnivalidator: true };
    }
  }

  checkError(fieldName: string, errorType: string) {
    return this.registroForm.get(fieldName)!.hasError(errorType) && this.registroForm.get(fieldName)!.touched
  }
  }
