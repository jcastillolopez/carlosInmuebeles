import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import * as dayjs from 'dayjs'

import { Globales } from 'src/app/services/Globales.service';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'clienteRegistro',
  templateUrl: './clienteRegistro.component.html',
  styleUrls: ['./clienteRegistro.component.css'],
})
export class ClienteRegistroComponent implements OnInit {
  idCliente: string;
  registroForm: FormGroup;

  constructor(
    private metodosGlobales: Globales,
    private activateRouter: ActivatedRoute,
    private router: Router
  ) {
    this.idCliente = ""
    this.registroForm = new FormGroup({
      idCliente: new FormControl(),
      nombre: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(60),
      ]),
      apellidos: new FormControl('', [
        Validators.required,
        Validators.maxLength(60),
        Validators.minLength(3),
      ]),

      email: new FormControl('', [
        Validators.required,
        Validators.pattern(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$/)
      ]),
      nie: new FormControl('', [
        this.dniValidator
      ]),
      fechaNacimiento: new FormControl('', [
        Validators.required]),
      tlf: new FormControl(),
      tlfMovil: new FormControl('', [
        Validators.required]),
      localidad: new FormControl('', [
        Validators.required]),
      direccion: new FormControl('', [
        Validators.required]),
      codigoPostal: new FormControl('', [
        Validators.required,
        Validators.maxLength(5),
        Validators.minLength(5),
      ]),
      administradorId: new FormControl(parseInt(sessionStorage.getItem('administradorId')!)),
      usuarioId: new FormControl(parseInt(sessionStorage.getItem('idUsuario')!)),
      borrado: new FormControl(),
      createTime: new FormControl(),
      updateTime: new FormControl(),
    })
  }

  async ngOnInit() {

    this.activateRouter.params.subscribe(async params => {
      if (params['id']) {
        let response = await this.metodosGlobales.getById(environment.APIPATH_CLIENTEDETALLE, params['id'])
        response[0].fechaNacimiento = dayjs(response[0].fechaNacimiento).format('YYYY-MM-DD')
        this.registroForm.patchValue(response[0])

      }

    })
  }
  async enviar() {
    if (this.registroForm.value.idInmueble !== null) {
      this.registroForm.value.updateTime = new Date();
     
      await this.metodosGlobales.update(this.registroForm.value, environment.APIPATH_CLIENTE);
    } else {
      this.registroForm.value.createTime = new Date();
      this.registroForm.value.updateTime = new Date();
      await this.metodosGlobales.create(this.registroForm.value, environment.APIPATH_CLIENTE);
    }
    window.location.reload();
  }
  dniValidator(pControl: FormControl) {
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
    return this.registroForm.get(fieldName).hasError(errorType) && this.registroForm.get(fieldName).touched
  }
}
