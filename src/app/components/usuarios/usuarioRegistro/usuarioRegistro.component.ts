import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router, } from '@angular/router';
import { Globales } from 'src/app/services/Globales.service';
import { tiposService } from 'src/app/services/tipos.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'usuarioRegistro',
  templateUrl: './usuarioRegistro.component.html',
  styleUrls: ['./usuarioRegistro.component.css']
})
export class UsuarioRegistroComponent implements OnInit {

  registroForm: FormGroup;
  result: any;
  arrSelectTipos: any[];

  constructor(

    private metodosGlobales: Globales,
    private metodosTipos: tiposService,
    private activateRouter: ActivatedRoute,
    private router: Router,
  ) {
    this.result = "";
    this.arrSelectTipos = [];
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
      password: new FormControl(),
      borrado: new FormControl(),
      createTime: new FormControl(),
      updateTime: new FormControl(),
      rolId: new FormControl(),
      administradorId: new FormControl(parseInt(sessionStorage.getItem('administradorId')!))
    })
  }

  async ngOnInit() {
    this.arrSelectTipos = await this.metodosTipos.getAllTipos('rol/1');
    this.activateRouter.params.subscribe(async params => {
      if (params['id']) {
        let response = await this.metodosGlobales.getById(environment.APIPATH_USUARIODETALLE, params['id'])
        this.registroForm.patchValue(response[0])
      }
    })
  }
  async enviar() {
    if (this.registroForm.value.idUsuario !== null) {
      this.registroForm.value.updateTime = new Date();
      await this.metodosGlobales.update(this.registroForm.value, environment.APIPATH_USUARIO);
    } else {
      if (this.registroForm.valid) {
        this.registroForm.value.createTime = new Date();
        this.registroForm.value.updateTime = new Date();

        const temp = await this.metodosGlobales.create(this.registroForm.value, environment.APIPATH_USUARIO);
      } else { let result = 'hay datos no validos en el formulario' };
    }
    window.location.reload();
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





