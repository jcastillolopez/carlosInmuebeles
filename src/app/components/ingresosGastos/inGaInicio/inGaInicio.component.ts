import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ingresogastointerface } from 'src/app/interfaces/ingresoGasto';
import { ingresogastodetalleinterface } from 'src/app/interfaces/ingresoGastoDetalle';
import { Globales } from 'src/app/services/Globales.service';
import { tiposService } from 'src/app/services/tipos.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'inGaInicio',
  templateUrl: './inGaInicio.component.html',
  styleUrls: ['./inGaInicio.component.css']
})
export class InGaInicioComponent implements OnInit {

  arrIngresosGastosMostrar: ingresogastointerface[];
  arrIngresosGastosFiltrados: ingresogastointerface[];
  arrIngresosGastosTodos: ingresogastointerface[];
  arrIngresosGastosInmuebles: ingresogastointerface[];
  arrIngresosGastosAnios: ingresogastointerface[];
  arrInGaDetalle: ingresogastodetalleinterface[];
  arrListaInmuebles: any[];
  selectInmuebles: any[];
  selectAnio: any[];
  selectMes: any[];
  inmuebleFiltrado: number;
  importeTotal: number;


  constructor(
    private metodosGlobales: Globales,
    private metodosTipos: tiposService,
    private router: Router,
    private activateRouter: ActivatedRoute,
  ) {
    this.arrIngresosGastosMostrar = [];
    this.arrIngresosGastosFiltrados = [];
    this.arrIngresosGastosTodos = [];
    this.arrIngresosGastosInmuebles = [];
    this.arrIngresosGastosAnios = [];
    this.arrListaInmuebles = [];
    this.selectInmuebles = [];
    this.selectAnio = [];
    this.selectMes = [];
    this.inmuebleFiltrado = 0;
    this.importeTotal = 0;
  }

  async ngOnInit() {
    this.arrIngresosGastosTodos = await this.metodosGlobales.getAll(environment.APIPATH_INGRESOGASTOGENERAL + parseInt(sessionStorage.getItem('administradorId')!));
    this.arrIngresosGastosMostrar = this.arrIngresosGastosTodos;
    this.arrListaInmuebles = await this.metodosGlobales.getAll(environment.APIPATH_INMUEBLE + parseInt(sessionStorage.getItem('administradorId')!));
    this.selectInmuebles = this.arrListaInmuebles;
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
    for (const ingresoGasto of this.arrIngresosGastosMostrar) {
      if (ingresoGasto.totalGasto != 0) {
        ingresoGasto.totalImporte = ingresoGasto.totalGasto;
      } else {
        ingresoGasto.totalImporte = ingresoGasto.totalIngreso;
      }
    }
    this.calculoTotal();
  }

  async navegar(idIngresoGasto: number) {
    this.router.navigate(["/inga/detalle/" + idIngresoGasto])
    this.arrInGaDetalle = await this.metodosGlobales.getById(environment.APIPATH_INGRESOGASTOESPECIFICO, idIngresoGasto);
  }

  detalle(inGaId: number, idInGa: number): boolean {
    if (inGaId === idInGa) {
      return true;
    } else {
      return false;
    }
  }

  inmuebles($event) {
    this.arrIngresosGastosFiltrados = [];
    if ($event.target.value != 0) {
      for (const inmuebles of this.arrIngresosGastosTodos) {
        if (inmuebles.inmuebleId == $event.target.value) {
          this.arrIngresosGastosFiltrados.push(inmuebles);
        }
      }
      this.arrIngresosGastosMostrar = this.arrIngresosGastosFiltrados;
    } else {
      this.arrIngresosGastosMostrar = this.arrIngresosGastosTodos;
    }
    this.arrIngresosGastosInmuebles = this.arrIngresosGastosFiltrados;
    this.calculoTotal();
  }

  anios($event) {
    this.arrIngresosGastosFiltrados = []
    if (this.arrIngresosGastosInmuebles.length == 0) {
      this.arrIngresosGastosInmuebles = this.arrIngresosGastosTodos
    }
    if ($event.target.value != 0) {
      for (const fechas of this.arrIngresosGastosInmuebles) {
        if (fechas.fechaFactura.toString().substring(0, 4) === $event.target.value) {
          this.arrIngresosGastosFiltrados.push(fechas);
        }
      }
      this.arrIngresosGastosMostrar = this.arrIngresosGastosFiltrados;
    } else {
      this.arrIngresosGastosMostrar = this.arrIngresosGastosInmuebles;
    }
    this.arrIngresosGastosAnios = this.arrIngresosGastosFiltrados;
    this.calculoTotal();
  }

  mes($event) {
    this.arrIngresosGastosFiltrados = []
    if (this.arrIngresosGastosAnios.length == 0) {
      this.arrIngresosGastosAnios = this.arrIngresosGastosInmuebles;
    }
    if (this.arrIngresosGastosInmuebles.length == 0) {
      this.arrIngresosGastosAnios = this.arrIngresosGastosTodos;
    }
    if ($event.target.value != 0) {
      for (const fechas of this.arrIngresosGastosAnios) {
        if (fechas.fechaFactura.toString().substring(6, 7) === $event.target.value) {
          this.arrIngresosGastosFiltrados.push(fechas);
        }
      }
      this.arrIngresosGastosMostrar = this.arrIngresosGastosFiltrados;
    } else {
      this.arrIngresosGastosMostrar = this.arrIngresosGastosAnios;
    }
    this.calculoTotal();
  }

  calculoTotal(): number {
    let calculando = 0;
    for (const inga of this.arrIngresosGastosMostrar) {
      calculando = calculando + inga.totalImporte
    }
    this.importeTotal = calculando;
    return this.importeTotal;
  }

}
