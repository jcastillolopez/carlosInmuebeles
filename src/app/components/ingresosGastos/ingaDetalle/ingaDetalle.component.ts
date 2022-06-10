import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import * as dayjs from 'dayjs';
import { firstValueFrom } from 'rxjs';
import { ingresogastointerface } from 'src/app/interfaces/ingresoGasto';
import { ingresogastodetalleinterface } from 'src/app/interfaces/ingresoGastoDetalle';

import { Globales } from 'src/app/services/Globales.service';
import { tiposService } from 'src/app/services/tipos.service';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'ingaDetalle',
  templateUrl: './ingaDetalle.component.html',
  styleUrls: ['./ingaDetalle.component.css']
})
export class IngaDetalleComponent implements OnInit {

  inga: ingresogastointerface;
  ingaDetalle: ingresogastodetalleinterface[];

  selectInmueble: any;
  selectProveedor: any;
  selectTipoConcepto: any;

  constructor(
    private metodosGlobales: Globales,
    private metodosTipos: tiposService,
    private activateRouter: ActivatedRoute,
    private router: Router
  ) {
    this.inga = {
      idInGa: 0,
      concepto: '',
      fechaFactura: new Date(),
      numeroFactura: '',
      totalBaseImponible: 0,
      totalImpuestoIva: 0,
      totalGasto: 0,
      totalIngreso: 0,
      totalImporte: 0,
      cuentaCorrienteProveedor: '',
      cuentaCorrienteCliente: '',
      conceptoPersonal: '',
      formaPago: "",
      fechaPago: new Date,

      tipoConceptoId: 0,
      tipoConcepto: '',
      tipoCategoriaId: 0,
      tipoCategoria: '',

      tipoPagoId: 0,
      tipoPago: '',

      clienteId: 0,
      nombreApellidosCliente: '',
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
      importeIngreso: 0,
      importeGasto:0,
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
        let response = await this.metodosGlobales.getById(environment.APIPATH_INGRESOGASTOGENERAL, params['id'])
        this.inga = response[0];
        this.ingaDetalle = await this.metodosGlobales.getById(environment.APIPATH_INGRESOGASTOGENERALDETALLE, params['id'])
        this.selectTipoConcepto = await this.metodosTipos.getAllTipos(environment.APIPATH_TIPOPAGO + parseInt(sessionStorage.getItem('administradorId')!));

      }
    })
  }
}
