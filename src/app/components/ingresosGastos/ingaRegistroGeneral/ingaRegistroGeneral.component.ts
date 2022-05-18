import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute,Router } from '@angular/router';

import { firstValueFrom } from 'rxjs';
import * as dayjs from 'dayjs';

import { Globales } from 'src/app/services/Globales.service';
import { tiposService } from 'src/app/services/tipos.service';

@Component({
  selector: 'ingaRegistroGeneral',
  templateUrl: './ingaRegistroGeneral.component.html',
  styleUrls: ['./ingaRegistroGeneral.component.css']
})
export class IngaRegistroGeneralComponent implements OnInit {

  contratoSeleccionadoId = "";
  path_inga: string;
  path_Tipo_Periodo: string;
  path_Inmueble: string;
  path_Tipo_Contrato: string;

  registroForm: FormGroup;
  selectInmueble: any;
  selectProveedor: any;
  selectTipoConcepto: any;
  resultado: number
  constructor(
    private metodosGlobales: Globales,
    private metodosTipos: tiposService,
    private activateRouter: ActivatedRoute,
    private router: Router
  ) { 
    this.path_inga = 'inga/';
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
      idInGa: new FormControl(),
      fechaConcepto: new FormControl(new Date),
      concepto: new FormControl(),
      tipoConceptoId: new FormControl(),
      ingreso: new FormControl(0),
      ivaPorcentaje: new FormControl(21),
      gasto: new FormControl(0),
      proveedoreId: new FormControl(),
      inmuebleId: new FormControl(),
      fechaFactura: new FormControl(new Date),
      numeroFactura: new FormControl(),
      usuarioId: new FormControl(),
      createTime: new FormControl(),
      updateTime: new FormControl(),
      borrado: new FormControl(),
      administradorId : new FormControl(),
    })

  }

  async ngOnInit() {
   
    this.selectInmueble = await this.metodosTipos.getAllTipos('inmuebles/1');

    this.selectProveedor = await this.metodosTipos.getAllTipos('proveedores/1');

    this.selectTipoConcepto = await this.metodosTipos.getAllTipos('concepto/1');


    this.activateRouter.params.subscribe(async params => {
      if (params['idInGa']) {
        let response = await this.metodosGlobales.getById( this.path_inga = 'inga/', params['id'])
        let ingreso = response[0]
        ingreso.fecha_concepto = dayjs(ingreso.fecha_contrato).format('YYYY-MM-DD')
        ingreso.fecha_factura = dayjs(ingreso.fecha_inicio).format('YYYY-MM-DD')
        this.registroForm.setValue(ingreso)

      }
    })

  }
  async enviar() {
    if (this.activateRouter.snapshot.params['idingreso']) {
      await this.metodosGlobales.update(this.path_inga ,this.registroForm.value);
    } else {
      const newIngreso = await this.metodosGlobales.create( this.path_inga ,this.registroForm.value);

    }
  }
}
