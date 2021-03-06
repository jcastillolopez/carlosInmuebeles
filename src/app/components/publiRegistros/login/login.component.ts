import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { Globales } from 'src/app/services/Globales.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  registroForm: FormGroup;
  usuarioLogin: any;
  idUsuario: any;
  nombre: string;
  administradorId: any;
  noLogin: any;

  constructor(
    private activateRouter: ActivatedRoute,
    private metodoGlobal: Globales,
    private router: Router,
  ) {
    this.nombre = "";
    this.idUsuario = 0;
    this.usuarioLogin = {};
    this.noLogin = "";
    this.registroForm = new FormGroup({
      email: new FormControl('', [
        Validators.pattern(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$/)]
      ),
      password: new FormControl('', [
        Validators.pattern(/^[A-Za-z0-9!.]{3,14}$/)
      ]),
      administradorId: new FormControl()
    })
  }
  async ngOnInit() {

  }

  async loguearse() {
    if (this.registroForm.valid) {
      const usuario = await this.metodoGlobal.login(environment.APIPATH_LOGGIN, this.registroForm.value.email, this.registroForm.value.password);
      sessionStorage.setItem('administradorId', usuario.administradorId);
      sessionStorage.setItem('nombreUsuario', usuario.nombre);
      sessionStorage.setItem('idUsuario', usuario.idUsuario);
      if (usuario.idUsuario !== null) {
        this.router.navigate(['/inicio']);
        sessionStorage.setItem('validacion', 'true')
        sessionStorage.setItem('validacionVisualizacion', usuario.rolId)
        sessionStorage.setItem('entidad', usuario.entidadId)
      } this.noLogin = 'El login no es correcto'
    }

  }
  checkError(fieldName: string, errorType: string) {
    return this.registroForm.get(fieldName)!.hasError(errorType) && this.registroForm.get(fieldName)!.touched

  }

}
