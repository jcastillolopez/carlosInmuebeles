import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { firstValueFrom } from 'rxjs';
import * as dayjs from 'dayjs';

import { Globales } from 'src/app/services/Globales.service';
import { tiposService } from 'src/app/services/tipos.service';

@Component({
  selector: 'ingresoRegistroGeneral',
  templateUrl: './ingresoRegistroGeneral.component.html',
  styleUrls: ['./ingresoRegistroGeneral.component.css']
})
export class IngresoRegistroGeneralComponent implements OnInit {

  contratoSeleccionadoId = "";
  pathInGa: string;
  pathInGaDetalle: string;
  pathTipoPeriodo: string;
  pathInmueble: string;
  pathTipoContrato: string;

  registroForm: FormGroup;
  selectInmueble: any;
  selectProveedor: any;
  selectTipoConcepto: any;
  selectTipoPago: any;
  resultado: number
  constructor(
    private metodosGlobales: Globales,
    private metodosTipos: tiposService,
    private activateRouter: ActivatedRoute,
    private router: Router,
    private builder: FormBuilder,

  ) {
    this.pathInGa = 'ingresogasto/';
    this.pathInGaDetalle = 'ingresogastodetalle/';
    this.pathInmueble = 'inmuebles/';
    this.pathTipoPeriodo = 'periodos/';
    this.pathTipoContrato = 'contratos/';
    this.contratoSeleccionadoId = "";

    this.selectInmueble = [];
    this.selectProveedor = [];
    this.selectInmueble = [];
    this.selectTipoConcepto = [];
    this.selectTipoPago = [];
    this.resultado = 0;
  }

  async ngOnInit() {
    this.nuevoRegistro();
    this.anadirDetalle();
    this.selectInmueble = await this.metodosGlobales.getAll('inmuebles/' + parseInt(sessionStorage.getItem('administradorId')!));
    this.selectProveedor = await this.metodosGlobales.getAll('clientes/' + parseInt(sessionStorage.getItem('administradorId')!));
    this.selectTipoConcepto = await this.metodosTipos.getAllTipos('concepto/' + parseInt(sessionStorage.getItem('administradorId')!));
    this.selectTipoPago = await this.metodosTipos.
    getAllTipos('pagos/' + parseInt(sessionStorage.getItem('administradorId')!));

    this.activateRouter.params.subscribe(async params => {
      if (params['idInGa']) {
        let response = await this.metodosGlobales.getById(this.pathInGa = 'inga/', params['id'])
        let ingreso = response[0]
        ingreso.fecha_concepto = dayjs(ingreso.fecha_contrato).format('YYYY-MM-DD')
        ingreso.fecha_factura = dayjs(ingreso.fecha_inicio).format('YYYY-MM-DD')
        this.registroForm.setValue(ingreso)

      }
    })
  }
  async enviar() {
    if (this.registroForm.value.idInGa != null) {
      this.registroForm.value.updateTime = new Date();
      await this.metodosGlobales.update(this.registroForm.value, this.pathInGa);
    } else {
      this.registroForm.value.createTime = new Date();
      this.registroForm.value.updateTime = new Date();
      const newIngreso = await this.metodosGlobales.create(this.registroForm.value, this.pathInGa);
      if (this.obtenerDetalle.length > 0) {
        for (const detalles of this.obtenerDetalle.controls) {
          detalles.value.createTime = new Date();
          detalles.value.updateTime = new Date();
          detalles.value.inGaId = newIngreso.idInGa;
          const newIngresoDetalle = await this.metodosGlobales.create(detalles.value, this.pathInGaDetalle);
        }
      }
    }
  }

  nuevoRegistro() {
    this.registroForm = this.builder.group({
      idInGa: new FormControl(),
      concepto: new FormControl(),
      fechaFactura: new FormControl(new Date),
      numeroFactura: new FormControl(),
      totalBaseImponible: new FormControl(),
      totalImpuestoIva: new FormControl(),
      totalGasto: new FormControl(),
      totalIngreso: new FormControl(),
      cuentaCorrienteProveedor: new FormControl(),
      cuentaCorrienteCliente: new FormControl(),

      clienteId: new FormControl(),
      tipoPagoId: new FormControl(1),
      inmuebleId: new FormControl(),
      tipoConceptoId: new FormControl(),

      usuarioId: new FormControl(parseInt(sessionStorage.getItem('idUsuario')!)),
      administradorId: new FormControl(parseInt(sessionStorage.getItem('administradorId')!)),
      createTime: new FormControl(),
      updateTime: new FormControl(),
      borrado: new FormControl(),

      arrRegistroDetalle: this.builder.array([])
    });
  }

  get obtenerDetalle(): FormArray {
    return this.registroForm.get('arrRegistroDetalle') as FormArray;
  }

  anadirDetalle() {
    const detalle = this.builder.group({
      idInGaDetalle: new FormControl(),
      conceptoDetalle: new FormControl(),
      pv: new FormControl(),
      descuento: new FormControl(),
      ivaPorcentaje: new FormControl(21),
      cantidad: new FormControl(),

      inGaId: new FormControl(),

      usuarioId: new FormControl(parseInt(sessionStorage.getItem('idUsuario')!)),
      administradorId: new FormControl(parseInt(sessionStorage.getItem('administradorId')!)),
      createTime: new FormControl(),
      updateTime: new FormControl(),
      borrado: new FormControl()
    });

    this.obtenerDetalle.push(detalle);
  }
}
