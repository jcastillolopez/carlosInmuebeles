import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute,Router } from '@angular/router';

import { Globales } from 'src/app/services/Globales.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  path_lista: any;
  registroForm: FormGroup;
  usuarioLogin: any;
  idUsuario: any;
  nombre: string;
  administradorId: any;
  noLogin: any;

  constructor(
    private activateRouter: ActivatedRoute,
    private metodoGlobal:Globales,
    private router: Router,
  ) {
    this.path_lista = 'usuario/detalle/'
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
    console.log(this.registroForm.valid)
     if (this.registroForm.valid) {
     
      const result = await this.metodoGlobal.login(this.registroForm.value,this.path_lista);
      console.log(result)
      this.usuarioLogin = result;
    
     
      console.log(this.administradorId)
     
      sessionStorage.setItem('administradorId', this.administradorId);
      sessionStorage.setItem('username', this.nombre);
      if (this.administradorId ) {
        this.router.navigate(['publi']);     
      }    this.noLogin = 'El login no es correcto'   
    }
  
  }
    checkError(fieldName: string, errorType: string) {
      return this.registroForm.get(fieldName)!.hasError(errorType) && this.registroForm.get(fieldName)!.touched
    
  }

}
