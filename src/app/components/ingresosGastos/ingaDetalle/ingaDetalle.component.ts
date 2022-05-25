import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import * as dayjs from 'dayjs';
import { firstValueFrom } from 'rxjs';
import { ingresogastointerface } from 'src/app/interfaces/ingresoGasto';
import { ingresogastodetalleinterface } from 'src/app/interfaces/ingresoGastoDetalle';

import { Globales } from 'src/app/services/Globales.service';
import { tiposService } from 'src/app/services/tipos.service';
@Component({
  selector: 'ingaDetalle',
  templateUrl: './ingaDetalle.component.html',
  styleUrls: ['./ingaDetalle.component.css']
})
export class IngaDetalleComponent implements OnInit {

  inga: ingresogastointerface;
  ingaDetalle: ingresogastodetalleinterface[];
  
  path_inGa: string;
  path_inGaDetalle: string;
  path_Tipo_Periodo: string;
  path_Inmueble: string;
  path_Tipo_Contrato: string;
  path_Tipo_Pago: string;

  selectInmueble: any;
  selectProveedor: any;
  selectTipoConcepto: any;

  constructor(
    private metodosGlobales: Globales,
    private metodosTipos: tiposService,
    private activateRouter: ActivatedRoute,
    private router: Router
  ) {
    this.path_inGa = 'ingresogasto/detalle/';
    this.path_inGaDetalle = 'ingresogastodetalle/';
    this.path_Inmueble = 'inmueble/';
    this.path_Tipo_Periodo = 'periodo/';
    this.path_Tipo_Contrato = 'contrato/';
    this.path_Tipo_Pago = 'pago/';
    this.inga = {
      idInGa: 0,
      concepto: '',
      fechaFactura: new Date(),
      numeroFactura: '',
      totalBaseImponible: 0,
      totalImpuestoIva: 0,
      totalGasto: 0,
      totalIngreso: 0,
      cuentaCorrienteProveedor: '',
      cuentaCorrienteCliente: '',
      formaPago: "",
      fechaPago: new Date,

      tipoConceptoId: 0,
      tipoConcepto: '',

      tipoPagoId: 0,
      tipoPago: '',

      clienteId: 0,
      nombreCliente: '',
      apellidosCliente: '',
      nieCliente: '',

      inmuebleId: 0,
      aliasInmueble: '',

      createTime: new Date(),
      updateTime: new Date(),
      borrado: false,
      usuarioId: 0,
      administradorId: 0
    }
    this.ingaDetalle = [{
      inGaDetalle: 0,
      conceptoDetalle: '',
      pv: 0,
      descuento: 0,
      ivaPorcentaje: 0,
      cantidad: 0,
      importe: 0,
      importeTotal: 0,
      valorTotal: 0,

      inGaId: 0,
      numeroFactura: '',

      createTime: new Date(),
      updateTime: new Date(),
      borrado: false,
      usuarioId: 0,
      administradorId: 0
    }]

    this.selectInmueble = [];
    this.selectProveedor = [];
    this.selectInmueble = [];
    this.selectTipoConcepto = [];
  }

  async ngOnInit() {
    this.activateRouter.params.subscribe(async params => {
      if (params['id']) {
        let response = await this.metodosGlobales.getById(this.path_inGa, params['id'])
        this.inga = response[0];
        this.ingaDetalle = await this.metodosGlobales.getById(this.path_inGaDetalle, params['id'])
        this.selectTipoConcepto = await this.metodosTipos.getAllTipos(this.path_Tipo_Pago + parseInt(sessionStorage.getItem('administradorId')!));
        
      }
    })
  }
}
