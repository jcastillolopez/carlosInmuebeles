import { Component, OnInit } from '@angular/core';
import { Globales } from 'src/app/services/Globales.service';
import { tiposService } from 'src/app/services/tipos.service';
import { ActivatedRoute } from '@angular/router';
import { contratoInterface } from 'src/app/interfaces/contrato';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'contratoDetalle',
  templateUrl: './contratoDetalle.component.html',
  styleUrls: ['./contratoDetalle.component.css']
})
export class ContratoDetalleComponent implements OnInit {
  contrato: contratoInterface;
  selectTipoContrato: any;
  selectTipoPeriodo: any;
  selectInmueble: any;

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
    //Tabla para la lista
    this.arrListaInmuebles = [];
    this.arrTipoPeriodo = [];
    this.arrTipoContrato = [];
  }

  ngOnInit() {
    this.activateRouter.params.subscribe(async params => {
      let response = await this.metodoGlobales.getById(environment.APIPATH_CONTRATODETALLE, params['id'])
      this.contrato = response[0]

      for (const contrato of response) {

        if (contrato.inmuebleId !== null && contrato.tipoContratoId !== null && contrato.tipoPeriodoId !== null) {
          this.arrListaInmuebles = await this.metodoGlobales.getById(environment.APIPATH_INMUEBLE, parseInt(sessionStorage.getItem('administradorId')!));
          this.arrTipoPeriodo = await this.metodosTipos.getAllTipos(environment.APIPATH_TIPOPERIODO + parseInt(sessionStorage.getItem('administradorId')!));
          this.arrTipoContrato = await this.metodosTipos.getAllTipos(environment.APIPATH_TIPOCONTRATO + parseInt(sessionStorage.getItem('administradorId')!));
    
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

