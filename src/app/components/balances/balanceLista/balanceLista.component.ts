import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Globales } from 'src/app/services/Globales.service';
import { tiposService } from 'src/app/services/tipos.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'balanceLista',
  templateUrl: './balanceLista.component.html',
  styleUrls: ['./balanceLista.component.css']
})
export class BalanceListaComponent implements OnInit {
  clienteSeleccionadoId: number;
  inmuebleSeleccionadoId: number;

  arrListaClientes: any[];
  arrListaInmuebles: any[];
  arrSelectTipos: any[];

  informesBalancesTotales: any;
  informesBalancesXInmuebles: any;
  informesBalancesByInmuebleXAnios: any;
  informesBalancesByInmuebleAnioXMeses: any;

  informesBalancesByAniosXMeses: any;
  informesBalancesByAniosMesesXInmueble: any;

  selectInmuebles: any[];
  selectAnio: any[];
  selectMes: any[];
  inmuebleFiltrado: number;

  constructor(
    private metodosGlobales: Globales,
    private metodosTipos: tiposService,
    private router: Router,
    private activateRouter: ActivatedRoute,
  ) {
    this.clienteSeleccionadoId = 1;
    this.selectInmuebles = [];
    this.arrListaClientes = [];

    this.inmuebleSeleccionadoId = 1;
    this.arrListaInmuebles = [];
    this.arrSelectTipos = [];

    this.selectAnio = [];
    this.selectMes = [];
    this.inmuebleFiltrado = 0;
    this.informesBalancesTotales = {
      totalBalance: 0,
      totalIngresos: 0,
      totalGastos: 0
    }

    this.informesBalancesXInmuebles = [{
      totalBalance: 0,
      totalIngresos: 0,
      totalGastos: 0,
      inmuebleAlias: '',
      idInmueble: 0,
      anio: '',
      nombreMes: '',
      numeroMes: 0,
    }]
    this.informesBalancesByInmuebleXAnios = [{
      totalBalance: 0,
      totalIngresos: 0,
      totalGastos: 0,
      inmuebleAlias: '',
      idInmueble: 0,
      anio: '',
      nombreMes: '',
      numeroMes: 0,
    }]
    this.informesBalancesByInmuebleAnioXMeses = [{
      totalBalance: 0,
      totalIngresos: 0,
      totalGastos: 0,
      inmuebleAlias: '',
      idInmueble: 0,
      anio: '',
      nombreMes: '',
      numeroMes: 0,
    }]


    this.informesBalancesByAniosXMeses = [{
      totalBalance: 0,
      totalIngresos: 0,
      totalGastos: 0,
      inmuebleAlias: '',
      idInmueble: 0,
      anio: '',
      nombreMes: '',
      numeroMes: 0,
    }]
    this.informesBalancesByAniosMesesXInmueble = [{
      totalBalance: 0,
      totalIngresos: 0,
      totalGastos: 0,
      inmuebleAlias: '',
      idInmueble: 0,
      anio: '',
      nombreMes: '',
      numeroMes: 0,
    }]
  }

  async ngOnInit() {
    this.arrListaInmuebles = await this.metodosGlobales.getById(environment.APIPATH_INMUEBLE, parseInt(sessionStorage.getItem('administradorId')!));
    this.arrListaClientes = await this.metodosGlobales.getById(environment.APIPATH_CLIENTE, parseInt(sessionStorage.getItem('administradorId')!));
    this.informesBalancesTotales = await this.metodosGlobales.getAll('informe/' + parseInt(sessionStorage.getItem('administradorId')!))
  }

  navegarClientes(idCliente: number) {
    this.router.navigate(["/balances/cliente/" + idCliente])
  }
  navegarInmuebles(idInmueble: number) {
    this.router.navigate(["/balances/anio/" + idInmueble])
  }
}