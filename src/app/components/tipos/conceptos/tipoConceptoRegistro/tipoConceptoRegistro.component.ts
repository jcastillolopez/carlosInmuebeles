import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { ActivatedRoute, Router } from '@angular/router';

import { tiposService } from 'src/app/services/tipos.service';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'tipoConceptoRegistro',
  templateUrl: './tipoConceptoRegistro.component.html',
  styleUrls: ['./tipoConceptoRegistro.component.css']
})
export class TipoConceptoRegistroComponent implements OnInit {
  registroForm: FormGroup;
  result: any;
  selectTipoCategoria: any[]

  constructor(
    private metodosTipos: tiposService,
    private activateRouter: ActivatedRoute,
    private router: Router,
  ) {
    this.result = "";
    this.selectTipoCategoria = []
    this.registroForm = new FormGroup({
      idTipoConcepto: new FormControl(),
      tipoConcepto: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(60),
      ]),
      categoriaId: new FormControl(),
      borrado: new FormControl(false),
      createTime: new FormControl(),
      updateTime: new FormControl(),
      usuarioId: new FormControl(parseInt(sessionStorage.getItem('idUsuario')!)),
      administradorId: new FormControl(parseInt(sessionStorage.getItem('administradorId')!)),
    })
  }

  async ngOnInit() {
    this.selectTipoCategoria = await this.metodosTipos.getAllTipos('categoria/' + parseInt(sessionStorage.getItem('administradorId')!))
    this.activateRouter.params.subscribe(async params => {
      if (params['id']) {
        let response = await this.metodosTipos.getAllTipos(environment.APIPATH_TIPOCONCEPTODETALLE + params['id'])
        this.registroForm.patchValue(response[0])
      }
    })
  }
  async enviar() {
    if (this.registroForm.value.idUsuario !== null) {

      this.registroForm.value.updateTime = new Date();
      await this.metodosTipos.update(this.registroForm.value, environment.APIPATH_TIPOCONCEPTO);

    } else {
      if (this.registroForm.valid) {

        this.registroForm.value.createTime = new Date();
        this.registroForm.value.updateTime = new Date();
        await this.metodosTipos.create(this.registroForm.value, environment.APIPATH_TIPOCONCEPTO);

      } else { let result = 'hay datos no validos en el formulario' };
    }
    window.location.reload();
  }
  checkError(fieldName: string, errorType: string) {
    return this.registroForm.get(fieldName)!.hasError(errorType) && this.registroForm.get(fieldName)!.touched
  }
}
