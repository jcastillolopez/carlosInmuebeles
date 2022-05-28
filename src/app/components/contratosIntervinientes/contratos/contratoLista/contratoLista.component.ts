import { prepareEventListenerParameters } from '@angular/compiler/src/render3/view/template';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { contratoInterface } from 'src/app/interfaces/contrato';
import { Globales } from 'src/app/services/Globales.service';
import { tiposService } from 'src/app/services/tipos.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'contratoLista',
  templateUrl: './contratoLista.component.html',
  styleUrls: ['./contratoLista.component.css']
})
export class ContratoListaComponent implements OnInit {
  contratoSeleccionadoId = "";

  //Formulario Modal
  arrListaContratos: contratoInterface[];
  arrListaInmuebles: any[];
  arrTipoPeriodo: any[];
  arrTipoContrato: any[];

  constructor(
    private metodosGlobales: Globales,
    private metodosTipos: tiposService,
    private activateRouter: ActivatedRoute,
    private router: Router
  ) {
    this.contratoSeleccionadoId = "";
    //Tabla para la lista
    this.arrListaContratos = [];
    this.arrListaInmuebles = [];
    this.arrTipoPeriodo = [];
    this.arrTipoContrato = [];
  }

  async ngOnInit() {

    this.arrListaContratos = await this.metodosGlobales.getById(environment.APIPATH_CONTRATO, parseInt(sessionStorage.getItem('administradorId')!));

    for (const contrato of this.arrListaContratos) {

      if (contrato.inmuebleId !== null && contrato.tipoContratoId !== null && contrato.tipoPeriodoId !== null) {

        this.arrListaInmuebles = await this.metodosGlobales.getById(environment.APIPATH_INMUEBLE, parseInt(sessionStorage.getItem('administradorId')!));
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

    this.activateRouter.params.subscribe(params => {
      this.contratoSeleccionadoId = params['id']
    })
  }
  navegar(idInmueble: number) {
    this.router.navigate(["/contratos/detalle/" + idInmueble])

  }
}