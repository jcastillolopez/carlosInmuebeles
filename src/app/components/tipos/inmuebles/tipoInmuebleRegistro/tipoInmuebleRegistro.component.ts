import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router, } from '@angular/router';

import { Globales } from 'src/app/services/Globales.service';

@Component({
  selector: 'tipoInmuebleRegistro',
  templateUrl: './tipoInmuebleRegistro.component.html',
  styleUrls: ['./tipoInmuebleRegistro.component.css']
})
export class TipoInmuebleRegistroComponent implements OnInit {
  registroForm: FormGroup;
  result: any;
  path_lista: string;
  path_create_update: string;
  constructor(
    private metodosGlobales: Globales,
    private activateRouter: ActivatedRoute,
    private router: Router,
  ) {
    this.path_lista = 'tipos/inmueble/'
    this.path_create_update = 'tipos/inmueble'
    this.result = "";

    this.registroForm = new FormGroup({
      idUsuario: new FormControl(),
      nombre: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(60),
      ]),
      administradorId: new FormControl(),
    })
   }

   ngOnInit() {
    this.activateRouter.params.subscribe(async params => {
      if (params['id']) {
        let response = await this.metodosGlobales.getById(this.path_lista, params['id'])
        this.registroForm.patchValue(response[0])
      }
    })
  }
  async enviar() {
    if (this.registroForm.value.idUsuario !== null) {
      await this.metodosGlobales.update(this.registroForm.value, this.path_create_update);
    } else {
      if (this.registroForm.valid) {
        console.log('prueba antes de funcion creado', this.registroForm.value)
        await this.metodosGlobales.create(this.registroForm.value, this.path_create_update);
        console.log('prueba despues de funcion creado', this.registroForm.value)

      } else { let result = 'hay datos no validos en el formulario' };
    }
  }
  checkError(fieldName: string, errorType: string) {
    return this.registroForm.get(fieldName)!.hasError(errorType) && this.registroForm.get(fieldName)!.touched
  }
}
