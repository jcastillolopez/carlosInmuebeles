import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router, } from '@angular/router';

import { tiposService } from 'src/app/services/tipos.service';

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
  administradorId: number;
  idUsuario: number;
  constructor(
    private metodosTipos: tiposService,
    private activateRouter: ActivatedRoute,
    private router: Router,
  ) {
    this.path_lista = 'inmuebles/detalle/'
    this.path_create_update = 'inmuebles'
    this.result = "";
    
    this.administradorId = parseInt(sessionStorage.getItem('administradorId')!);
    this.idUsuario = parseInt(sessionStorage.getItem('idUsuario')!);


    this.registroForm = new FormGroup({
      idTipoInmueble: new FormControl(),
      tipoInmueble: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(60),
      ]),
      borrado: new FormControl(false),
      createTime: new FormControl(),
      updateTime: new FormControl(),
      usuarioId: new FormControl(this.idUsuario),
      administradorId: new FormControl(this.administradorId),
    })
   }

   ngOnInit() {
    this.activateRouter.params.subscribe(async params => {
      if (params['id']) {
        let response = await this.metodosTipos.getAllTipos(this.path_lista + params['id'])
        this.registroForm.patchValue(response[0])
      }
    })
  }


  
  async enviar() {
    if (this.registroForm.value.idUsuario !== null) {
      
      this.registroForm.value.updateTime = new Date();
      await this.metodosTipos.update(this.registroForm.value, this.path_create_update);
      
    } else {
      if (this.registroForm.valid) {

        this.registroForm.value.createTime = new Date();
        this.registroForm.value.updateTime = new Date();
        await this.metodosTipos.create(this.registroForm.value, this.path_create_update);

      } else { let result = 'hay datos no validos en el formulario' };
    }
  }
  checkError(fieldName: string, errorType: string) {
    return this.registroForm.get(fieldName)!.hasError(errorType) && this.registroForm.get(fieldName)!.touched
  }
}
