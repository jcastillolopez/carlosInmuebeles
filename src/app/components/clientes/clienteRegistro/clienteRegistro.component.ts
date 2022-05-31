import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import * as dayjs from 'dayjs'

import { Globales } from 'src/app/services/Globales.service';
import { environment } from 'src/environments/environment';
import { format } from 'path';


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
      nombre: new FormControl(),
      apellidos: new FormControl(),
      email: new FormControl(),
      nie: new FormControl(),
      fechaNacimiento: new FormControl(),
      tlf: new FormControl(),
      tlfMovil: new FormControl(),
      localidad: new FormControl(),
      direccion: new FormControl(),
      codigoPostal: new FormControl(),
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
        let cliente = response[0]
        cliente.fechaNacimiento = dayjs(cliente.fechaNacimiento).format('DD-MM-YYYY')
        this.registroForm.patchValue(cliente)

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
}
