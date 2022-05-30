import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ingresogastointerface } from 'src/app/interfaces/ingresoGasto';
import { ingresogastodetalleinterface } from 'src/app/interfaces/ingresoGastoDetalle';
import { Globales } from 'src/app/services/Globales.service';
import { tiposService } from 'src/app/services/tipos.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'balanceLista',
  templateUrl: './balanceLista.component.html',
  styleUrls: ['./balanceLista.component.css']
})
export class BalanceListaComponent implements OnInit {

  informesBalancesTotales: any;
  informesBalancesXInmuebles: any;
  informesBalancesByInmuebleXAnios: any;
  informesBalancesByInmuebleAnioXMeses: any;

  informesBalancesXAnios: any;
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

    this.selectInmuebles = [];
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

    this.informesBalancesXAnios = [{
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
    this.informesBalancesTotales = await this.metodosGlobales.getAll('informe/' + parseInt(sessionStorage.getItem('administradorId')!))
    this.selectInmuebles = await this.metodosGlobales.getAll(environment.APIPATH_INMUEBLE + parseInt(sessionStorage.getItem('administradorId')!));
    this.selectAnio = await this.metodosGlobales.getAll(environment.APIPATH_FACTURASANIO + parseInt(sessionStorage.getItem('administradorId')!));
    this.selectMes = [
      {
        "mes": "Enero",
        "numero": "1"
      },
      {
        "mes": "Febrero",
        "numero": "2"
      },
      {
        "mes": "Marzo",
        "numero": "3"
      },
      {
        "mes": "Abril",
        "numero": "4"
      },
      {
        "mes": "Mayo",
        "numero": "5"
      },
      {
        "mes": "Junio",
        "numero": "6"
      },
      {
        "mes": "Julio",
        "numero": "7"
      },
      {
        "mes": "Agosto",
        "numero": "8"
      },
      {
        "mes": "Septiembre",
        "numero": "9"
      },
      {
        "mes": "Octubre",
        "numero": "10"
      },
      {
        "mes": "Noviembre",
        "numero": "11"
      },
      {
        "mes": "Dicienmbre",
        "numero": "12"
      }
    ]
  }

  async desgloseXInmueble() {
    this.informesBalancesXInmuebles = await this.metodosGlobales.getAll('informe/inmueble/' + parseInt(sessionStorage.getItem('administradorId')!))
  }
  async degloseByInmuebleXAnios(idInmueble: number) {
    this.informesBalancesByInmuebleXAnios = await this.metodosGlobales.getAll('informe/inmueble/anio/' + idInmueble + "/" + parseInt(sessionStorage.getItem('administradorId')!));
  }
  async desgloseByInmuebleAnioXMes(idInmueble: number, anio: number) {
    this.informesBalancesByInmuebleAnioXMeses = await this.metodosGlobales.getAll('informe/inmueble/mes/' + idInmueble + "/" + anio + "/" + parseInt(sessionStorage.getItem('administradorId')!))
  }

  async desgloseXAnios() {
    this.informesBalancesXAnios = await this.metodosGlobales.getAll('informe/anio/' + parseInt(sessionStorage.getItem('administradorId')!));
  }
  async desgloseByAnioXMeses(anio: number) {
    this.informesBalancesByAniosXMeses = await this.metodosGlobales.getAll('informe/anio/mes/' + parseInt(sessionStorage.getItem('administradorId')!) + "/" + anio);
  }
  async desgloseByAnioMesesXInmueble(anio: number, mes: number) {
    this.informesBalancesByAniosMesesXInmueble = await this.metodosGlobales.getAll('informe/anio/inmueble/' + parseInt(sessionStorage.getItem('administradorId')!) + "/" + anio + "/" + mes);
  }
}