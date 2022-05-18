import { Component, OnInit } from '@angular/core';
import { Globales } from 'src/app/services/Globales.service';
import { tiposService } from 'src/app/services/tipos.service';
import { ActivatedRoute } from '@angular/router';
import { contratoInterface } from 'src/app/interfaces/contrato';

@Component({
  selector: 'contratoDetalle',
  templateUrl: './contratoDetalle.component.html',
  styleUrls: ['./contratoDetalle.component.css']
})
export class ContratoDetalleComponent implements OnInit {

  path: string = 'contratos/detalles/';
  contrato: contratoInterface;
  selectTipoContrato: any;
  selectTipoPeriodo: any;
  selectInmueble: any;
  path_Tipo_Periodo: string;
  path_Inmueble: string;
  path_Tipo_Contrato: string;

  arrListaInmuebles: any[];
  arrTipoPeriodo: any[];
  arrTipoContrato: any[];


  constructor(
    private metodoGlobales: Globales,
    private metodosTipos: tiposService,
    private activateRouter: ActivatedRoute
  ) {

    this.contrato = {
      idContratos: 0,
      valorContrato: 0,
      fechaContrato: new Date(),
      fechaInicio: new Date(),
      fechaFin: new Date(),
      cantidadPeriodo: 0,

      createTime: new Date(),
      updateTime: new Date(),
      administradorId: 0,
      usuarioId: 0,
      borrado: false,

      tipoPeriodoId: 0,
      tipoPeriodo: '',
      tipoContratoId: 0,
      tipoContrato: '',
      inmuebleId: 0,
      aliasInmueble: '',
    }
    this.path_Inmueble = 'inmuebles/';
    this.path_Tipo_Periodo = 'periodos/';
    this.path_Tipo_Contrato = 'contratos/';

    //Tabla para la lista
    this.arrListaInmuebles = [];
    this.arrTipoPeriodo = [];
    this.arrTipoContrato = [];
  }

  ngOnInit() {
    this.activateRouter.params.subscribe(async params => {
      let response = await this.metodoGlobales.getById(this.path, params['id'])
      this.contrato = response[0]

      for (const contrato of response) {

        if (contrato.inmuebleId !== null && contrato.tipoContratoId !== null && contrato.tipoPeriodoId !== null) {
          this.arrListaInmuebles = await this.metodoGlobales.getById(this.path_Inmueble, parseInt(sessionStorage.getItem('administradorId')!));
          this.arrTipoPeriodo = await this.metodosTipos.getAllTipos(this.path_Tipo_Periodo + parseInt(sessionStorage.getItem('administradorId')!));
          this.arrTipoContrato = await this.metodosTipos.getAllTipos(this.path_Tipo_Contrato + parseInt(sessionStorage.getItem('administradorId')!));
    
          for (const tipoPeriodos of this.arrTipoPeriodo) {
            if (tipoPeriodos.idTipoPeriodo == contrato.tipoPeriodoId) {
              contrato.tipoPeriodo = tipoPeriodos.tipoPeriodo;
            }
          }
  
          for (const Inmuebles of this.arrListaInmuebles) {
            if (Inmuebles.idInmueble == contrato.inmuebleId) {
              contrato.aliasInmueble = Inmuebles.alias;
            }
          }
  
          for (const tipoContratos of this.arrTipoContrato) {
            if (tipoContratos.idTipoContrato == contrato.tipoContratoId) {
              contrato.tipoContrato = tipoContratos.tipoContrato;
            }
          }
  
        }
      }
    })
  }

}

