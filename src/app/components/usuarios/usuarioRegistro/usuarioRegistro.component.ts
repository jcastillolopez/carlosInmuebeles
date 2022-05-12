import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router, } from '@angular/router';
import { Globales } from 'src/app/services/Globales.service';

@Component({
  selector: 'usuarioRegistro',
  templateUrl: './usuarioRegistro.component.html',
  styleUrls: ['./usuarioRegistro.component.css']
})
export class UsuarioRegistroComponent implements OnInit {

  registroForm: FormGroup;
  result: any;
  path_lista: string;
  path_create_update: string;

  constructor(
    
    private metodosGlobales:Globales,   
    private activateRouter: ActivatedRoute,
    private router: Router,
  ) {
    this.path_lista = 'usuario/detalle/'
    this.path_create_update = 'usuario'
    this.result = "";
    this.registroForm = new FormGroup({
      idUsuario: new FormControl(),

      nombre: new FormControl('', [
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
      borrado: new FormControl(),
      create_time: new FormControl(),
      update_time: new FormControl(),
      idRol: new FormControl(1),
      idAdministrador: new FormControl(0)
    })
  }

  ngOnInit() {
    this.activateRouter.params.subscribe(async params => {
      if (params['id']) {
        let response = await this.metodosGlobales.getById(this.path_lista,params['id'])
        this.registroForm.patchValue(response[0])
      }
    })
  }
  async enviar() {
    if (this.registroForm.value.idUsuario !== null) {
      await this.metodosGlobales.update(this.registroForm.value, this.path_create_update);
    } else {
      if (this.registroForm.valid) {
        const temp = await this.metodosGlobales.create(this.registroForm.value, this.path_create_update);
      } else { let result = 'hay datos no validos en el formulario' };
    }
  }
  // navegar(idUsuario: number) {
  //   this.router.navigate([this.path_usuarios_detalle + idUsuario])
  // }
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





