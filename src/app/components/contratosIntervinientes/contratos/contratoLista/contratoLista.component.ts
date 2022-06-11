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
    if (sessionStorage.getItem('validacionVisualizacion') === '1' || sessionStorage.getItem('validacionVisualizacion') === '2') {
      this.arrListaContratos = await this.metodosGlobales.getAll(environment.APIPATH_CONTRATO + parseInt(sessionStorage.getItem('administradorId')!));
    } else {
      this.arrListaContratos = await this.metodosGlobales.getAll(environment.APIPATH_CONTRATO + parseInt(sessionStorage.getItem('administradorId')!) + "/" + sessionStorage.getItem('entidad'));
    }
    this.activateRouter.params.subscribe(params => {
      this.contratoSeleccionadoId = params['id']
    })
  }
  navegar(idInmueble: number) {
    this.router.navigate(["/contratos/detalle/" + idInmueble])

  }
}