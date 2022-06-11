import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, FormBuilder, Validators, ValidatorFn, ValidationErrors } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import * as dayjs from 'dayjs';

import { Globales } from 'src/app/services/Globales.service';
import { tiposService } from 'src/app/services/tipos.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'ingaRegistroGeneral',
  templateUrl: './ingaRegistroGeneral.component.html',
  styleUrls: ['./ingaRegistroGeneral.component.css']
})
export class IngaRegistroGeneralComponent implements OnInit {

  contratoSeleccionadoId = "";
  registroForm: FormGroup;
  selectInmueble: any;
  selectProveedor: any;
  selectTipoConcepto: any;
  selectTipoCategoria: any;
  selectTipoPago: any;
  resultado: number
  constructor(
    private metodosGlobales: Globales,
    private metodosTipos: tiposService,
    private activateRouter: ActivatedRoute,
    private router: Router,
    private builder: FormBuilder,

  ) {
    this.contratoSeleccionadoId = "";

    this.selectInmueble = [];
    this.selectProveedor = [];
    this.selectInmueble = [];
    this.selectTipoConcepto = [];
    this.selectTipoCategoria = [];
    this.selectTipoPago = [];
    this.resultado = 0;
  }

  async ngOnInit() {
    this.nuevoRegistro();
    this.selectInmueble = await this.metodosGlobales.getAll(environment.APIPATH_INMUEBLE + parseInt(sessionStorage.getItem('administradorId')!));
    this.selectProveedor = await this.metodosGlobales.getAll(environment.APIPATH_CLIENTE + parseInt(sessionStorage.getItem('administradorId')!));
    this.selectTipoCategoria = await this.metodosTipos.getAllTipos('categoria/concepto');
    this.selectTipoPago = await this.metodosTipos.getAllTipos(environment.APIPATH_TIPOPAGO + parseInt(sessionStorage.getItem('administradorId')!));

    this.activateRouter.params.subscribe(async params => {
      if (params['id']) {
        this.nuevoRegistro();
        let response = await this.metodosGlobales.getById(environment.APIPATH_INGRESOGASTOGENERALDETALLE, params['id'])
        this.selectTipoConcepto = await this.metodosTipos.getAllTipos(environment.APIPATH_TIPOCONCEPTO + "categoria/" + response[0].tipoCategoriaId + "/" + parseInt(sessionStorage.getItem('administradorId')!));
        response[0].fechaFactura = dayjs(response[0].fechaFactura).format('YYYY-MM-DD')
        response[0].fechaPago = dayjs(response[0].fechaPago).format('YYYY-MM-DD')
        this.registroForm.patchValue(response[0])
        let inGaDetalles = await this.metodosGlobales.getAll(environment.APIPATH_INGRESOGASTOESPECIFICO + response[0].idInGa)
        for (const detalleInGa of inGaDetalles) {
          this.anadirDetalle()
        }
        this.obtenerDetalle.patchValue(inGaDetalles);
      }
    })
  }
  async enviar() {
    if (this.registroForm.value.idInGa != null) {
      this.registroForm.value.updateTime = new Date();
      if (this.registroForm.value.fechaPago === 'Invalid Date') {
        this.registroForm.value.fechaPago = null
      }
      const newIngreso = await this.metodosGlobales.update(this.registroForm.value, environment.APIPATH_INGRESOGASTOGENERAL);
      if (this.obtenerDetalle.length > 0) {
        for (const detalle of this.obtenerDetalle.controls) {
          detalle.value.createTime = new Date();
          detalle.value.updateTime = new Date();
          detalle.value.inGaId = newIngreso.idInGa;
          const newIngresoDetalle = await this.metodosGlobales.create(detalle.value, environment.APIPATH_INGRESOGASTOESPECIFICO);
        }
      }
    } else {
      this.registroForm.value.createTime = new Date();
      this.registroForm.value.updateTime = new Date();
      if (this.registroForm.value.fechaPago === 'Invalid Date') {
        this.registroForm.value.fechaPago = null
      }
      const newIngreso = await this.metodosGlobales.create(this.registroForm.value, environment.APIPATH_INGRESOGASTOGENERAL);
      if (this.obtenerDetalle.length > 0) {
        for (const detalle of this.obtenerDetalle.controls) {
          detalle.value.createTime = new Date();
          detalle.value.updateTime = new Date();
          detalle.value.inGaId = newIngreso.idInGa;
          const newIngresoDetalle = await this.metodosGlobales.create(detalle.value, environment.APIPATH_INGRESOGASTOESPECIFICO);
        }
      }
    }
    window.location.reload();
  }

  nuevoRegistro() {
    this.registroForm = new FormGroup({
      idInGa: new FormControl(),
      concepto: new FormControl(),
      fechaFactura: new FormControl(new Date(), [
        Validators.required]),
      fechaPago: new FormControl(),
      numeroFactura: new FormControl('', [
        Validators.required]),
      totalBaseImponible: new FormControl(0, [
        Validators.required,
        Validators.min(1),
      ]),
      totalImpuestoIva: new FormControl(0, [
        Validators.required,
        Validators.min(0),
      ]),
      totalGasto: new FormControl(0, [
        Validators.required,
        Validators.min(1)]),
      totalIngreso: new FormControl(0),
      cuentaCorrienteProveedor: new FormControl(),
      cuentaCorrienteCliente: new FormControl(),
      conceptoPersonal: new FormControl(),


      clienteId: new FormControl(),
      tipoPagoId: new FormControl(),
      inmuebleId: new FormControl(),
      tipoCategoriaId: new FormControl(),
      tipoConceptoId: new FormControl(),

      usuarioId: new FormControl(parseInt(sessionStorage.getItem('idUsuario')!)),
      administradorId: new FormControl(parseInt(sessionStorage.getItem('administradorId')!)),
      createTime: new FormControl(),
      updateTime: new FormControl(),
      borrado: new FormControl(),

      arrRegistroDetalle: new FormArray([])
    },
      { validators: [this.validacionFechaPago] });
  }

  get obtenerDetalle(): FormArray {
    return this.registroForm.get('arrRegistroDetalle') as FormArray;
  }

  borrarDetalle(index: number) {
    this.obtenerDetalle.removeAt(index);
  }

  anadirDetalle() {
    const detalle = this.builder.group({
      idInGaDetalle: new FormControl(),
      conceptoDetalle: new FormControl(),
      pv: new FormControl(0),
      descuento: new FormControl(0),
      ivaPorcentaje: new FormControl(21),
      cantidad: new FormControl(0),

      inGaId: new FormControl(),

      usuarioId: new FormControl(parseInt(sessionStorage.getItem('idUsuario')!)),
      administradorId: new FormControl(parseInt(sessionStorage.getItem('administradorId')!)),
      createTime: new FormControl(),
      updateTime: new FormControl(),
      borrado: new FormControl()
    });

    this.obtenerDetalle.push(detalle);
  }

  calcularTotales() {
    let totalBaseImponible = 0;
    let totalImpuestoIva = 0;
    let totalGasto = 0;
    let baseImponibleXdetalle = 0;
    let impuestoIva = 0;

    for (const detalles of this.obtenerDetalle.controls) {
      baseImponibleXdetalle = (detalles.value.pv * detalles.value.cantidad) - (((detalles.value.pv * detalles.value.cantidad) * detalles.value.descuento) / 100);
      totalBaseImponible = totalBaseImponible + baseImponibleXdetalle;

      impuestoIva = ((baseImponibleXdetalle * detalles.value.ivaPorcentaje) / 100);
      totalImpuestoIva = totalImpuestoIva + impuestoIva;
    }
    totalGasto = totalBaseImponible + totalImpuestoIva;

    this.registroForm.get('totalBaseImponible').patchValue(totalBaseImponible);
    this.registroForm.get('totalImpuestoIva').patchValue(totalImpuestoIva);
    this.registroForm.get('totalGasto').patchValue(totalGasto);
  }

  async filtroConcepto($event) {
    this.selectTipoConcepto = await this.metodosTipos.getAllTipos(environment.APIPATH_TIPOCONCEPTO + "categoria/" + $event.target.value + "/" + parseInt(sessionStorage.getItem('administradorId')!));
  }

  validacionFechaPago(formulario: FormGroup): ValidationErrors | null {
    let fechaFactura = formulario.get("fechaFactura").value
    let fechaPago = formulario.get("fechaPago").value
    let result
    if (fechaPago) {
      result = (fechaFactura > fechaPago) ? { validacionFechaPago: true } : null
    } else {
      result = null
    }
    return result
  }

  checkError(fieldName: string, errorType: string) {
    return this.registroForm.get(fieldName).hasError(errorType) && this.registroForm.get(fieldName).touched
  }

  checkErrorForm(fieldName: string, errorType: string) {
    return this.registroForm.hasError(errorType) && this.registroForm.get(fieldName).touched
  }

}
