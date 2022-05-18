import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute,Router } from '@angular/router';
import * as dayjs from 'dayjs';
import { firstValueFrom } from 'rxjs';

import { Globales } from 'src/app/services/Globales.service';
import { tiposService } from 'src/app/services/tipos.service';
@Component({
  selector: 'ingaRegistroDetalle',
  templateUrl: './ingaRegistroDetalle.component.html',
  styleUrls: ['./ingaRegistroDetalle.component.css']
})
export class IngaRegistroDetalleComponent implements OnInit {

  contratoSeleccionadoId = "";
  path_inGa: string;
  path_Tipo_Periodo: string;
  path_Inmueble: string;
  path_Tipo_Contrato: string;

  registroForm: FormGroup;
  selectInmueble: any;
  selectProveedor: any;
  selectTipoConcepto: any;
  resultado: number;

  constructor(
 private metodosGlobales: Globales,
    private metodosTipos: tiposService,
    private activateRouter: ActivatedRoute,
    private router: Router
  ) { 
    this.path_inGa = 'inGa/';
    this.path_Inmueble = 'inmuebles/';
    this.path_Tipo_Periodo = 'periodos/';
    this.path_Tipo_Contrato = 'contratos/';
    this.contratoSeleccionadoId = "";
    
    this.selectInmueble = [];
    this.selectProveedor = [];
    this.selectInmueble = [];
    this.selectTipoConcepto = [];
    this.resultado = 0;

    this.registroForm = new FormGroup({
      idInGaDetalle: new FormControl(),      
      concepto: new FormControl(),
      tipoConceptoId: new FormControl(),
      cantidad: new FormControl(1),
      ingreso: new FormControl(0),
      ivaPorcentaje: new FormControl(21),
      gasto: new FormControl(0),     
      usuario_id: new FormControl(),
      create_time: new FormControl(),
      update_time: new FormControl(),
      borrado: new FormControl()
    })
  }

 async ngOnInit() {
    this.activateRouter.params.subscribe(async params => {
      if (params['idInGa']) {
        let response = await this.metodosGlobales.getById( this.path_inGa , params['id'])
        let ingreso = response[0]      
        this.registroForm.setValue(ingreso)

      }
    })
  }
  async enviar() {
    if (this.activateRouter.snapshot.params['idingreso']) {
      await this.metodosGlobales.update(this.path_inGa ,this.registroForm.value);
    } else {
      const newIngreso = await this.metodosGlobales.create( this.path_inGa ,this.registroForm.value);

    }
  }
}
