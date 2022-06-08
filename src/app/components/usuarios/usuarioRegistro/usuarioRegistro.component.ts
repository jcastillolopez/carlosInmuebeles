import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ValidationErrors } from '@angular/forms';
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
  arrSelectEntidades: any[];

  constructor(

    private metodosGlobales: Globales,
    private metodosTipos: tiposService,
    private activateRouter: ActivatedRoute,
    private router: Router,
  ) {
    this.result = "";
    this.arrSelectTipos = [];
    this.arrSelectEntidades = [];
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
      password: new FormControl('', [
        Validators.required,
        Validators.pattern(/^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/),
      ]),
      repitePassword: new FormControl(''),
      borrado: new FormControl(),
      createTime: new FormControl(),
      updateTime: new FormControl(),
      rolId: new FormControl([
        Validators.required]),
      administradorId: new FormControl(parseInt(sessionStorage.getItem('administradorId')!)),
      entidadId: new FormControl([
        Validators.required])
    },
      { validators: [this.passwordValidation] });
  }

  async ngOnInit() {
    this.arrSelectTipos = await this.metodosTipos.getAllTipos('rol/1');
    this.arrSelectEntidades = await this.metodosGlobales.getAll(environment.APIPATH_CLIENTE + sessionStorage.getItem('administradorId'))
    this.activateRouter.params.subscribe(async params => {
      console.log(this.activateRouter.url)
      if (params['id']) {
        let response = await this.metodosGlobales.getById(environment.APIPATH_USUARIODETALLE, params['id'])
        response[0].repitePassword = response[0].password
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

  passwordValidation(formulario: FormGroup): ValidationErrors | null {
    let password: string = formulario.get("password").value
    let repitePassword: string = formulario.get("repitePassword").value
    let result
    if (repitePassword) {
      result = (repitePassword !== password) ? { passwordValidation: true } : null
    } else {
      result = null
    }
    return result
  }

  checkError(fieldName: string, errorType: string) {
    return this.registroForm.get(fieldName)!.hasError(errorType) && this.registroForm.get(fieldName)!.touched
  }

  checkErrorForm(fieldName: string, errorType: string) {
    return this.registroForm.hasError(errorType) && this.registroForm.get(fieldName).touched
  }
}





