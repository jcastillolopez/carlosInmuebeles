import { DatePipe } from '@angular/common';
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
  administradorId: any;
  idUsuario: any;
  nombreUsuario: any;
  
  path_create_update: string;
  constructor(
    private metodosGlobales:Globales,   
    private activateRouter: ActivatedRoute,
    private router: Router,
  ) { 
    this.administradorId = 0;
    this.idUsuario = 0;
    this.nombreUsuario = '';
    this.path_create_update = 'personaspagadora'
    this.registroForm = new FormGroup({
      idPersonasPagadora: new FormControl(),
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
      createTime: new FormControl(),
      updateTime: new FormControl()
      
    })
  }

  ngOnInit() {   
  }

  async enviar() {
    if (this.registroForm.value.idPersonasPagadora !== null) {
      this.registroForm.value.updateTime = new Date();
      await this.metodosGlobales.update(this.registroForm.value, this.path_create_update);
    } else {
      if (this.registroForm.valid) {
        this.registroForm.value.createTime = new Date();
        this.registroForm.value.updateTime = new Date();
        const administrador = await this.metodosGlobales.create(this.registroForm.value, this.path_create_update);
        const usuario = await this.metodosGlobales.getAll('usuario/'+administrador.idPersonasPagadora);

        sessionStorage.setItem('administradorId', usuario[0].administradorId);
        sessionStorage.setItem('nombreUsuario', usuario[0].nombre);
        sessionStorage.setItem('idUsuario', usuario[0].idUsuario);

        if (administrador.idPersonasPagadora !== null) {
          this.router.navigate(['/inicio']);     
        }  
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
