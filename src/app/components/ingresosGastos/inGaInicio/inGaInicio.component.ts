import { ArrayType } from '@angular/compiler';
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
  arrInGaDetalle: ingresogastodetalleinterface[];
  arrListaInmuebles: any[];
  selectInmuebles: any[];

  selectAnio: any[];
  selectMes: any[];
  inmuebleFiltrado: number;
  importeIngreso: number;
  importeGasto: number;
  labelTotalImporte: string;

  filtroinga: number = 0;
  filtroinmueble: number = 0;
  filtroyear: string = '0';
  filtromes: string = '0';


  constructor(
    private metodosGlobales: Globales,
    private metodosTipos: tiposService,
    private router: Router,
    private activateRouter: ActivatedRoute,
  ) {
    this.arrIngresosGastosMostrar = [];
    this.arrIngresosGastosFiltrados = [];
    this.arrIngresosGastosTodos = [];
    this.arrListaInmuebles = [];
    this.selectInmuebles = [];
    this.selectAnio = [];
    this.selectMes = [];
    this.inmuebleFiltrado = 0;
    this.importeIngreso = 0;
    this.importeGasto = 0;

    this.labelTotalImporte = '';
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
    this.arrIngresosGastosFiltrados = this.arrIngresosGastosTodos;
    this.calculoTotalIngreso()
    this.calculoTotalGasto()
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

  ingresoGasto($event) {
    this.filtroinga = $event.target.value
  }
  inmuebles($event) {
    this.filtroinmueble = $event.target.value
  }
  anios($event) {
    this.filtroyear = $event.target.value
  }
  mes($event) {
    this.filtromes = $event.target.value
  }

  filtrar() {
    this.arrIngresosGastosFiltrados = this.arrIngresosGastosTodos
    if (this.filtroinga != 0) {
      this.arrIngresosGastosFiltrados = this.filtrarByInGa(this.filtroinga)
    }
    if (this.filtroinmueble != 0) {
      this.arrIngresosGastosFiltrados = this.filtrarByInmueble(this.filtroinmueble);
    }
    if (this.filtroyear !== '0') {
      this.arrIngresosGastosFiltrados = this.filtrarByAnio(this.filtroyear);
    }
    if (this.filtromes !== '0') {
      this.arrIngresosGastosFiltrados = this.filtrarByMes(this.filtromes);
    }
    this.calculoTotalIngreso();
    this.arrIngresosGastosMostrar = this.arrIngresosGastosFiltrados;
    this.calculoTotalGasto();
    this.arrIngresosGastosMostrar = this.arrIngresosGastosFiltrados;
  }
  filtrarByInGa(valor: number): Array<ingresogastointerface> {
    let arr: ingresogastointerface[] = [];
    for (const factura of this.arrIngresosGastosFiltrados) {
      if (valor != 1) {
        if (factura.totalGasto != 0) {
          arr.push(factura);
          this.labelTotalImporte = 'Total Gasto';
        }
      } else {
        if (factura.totalIngreso != 0) {
          arr.push(factura);
          this.labelTotalImporte = 'Total Ingreso';
        }
      }
    }
    return arr;
  }
  filtrarByInmueble(valor: number): Array<ingresogastointerface> {
    let arr: ingresogastointerface[] = []
    for (const inmuebles of this.arrIngresosGastosFiltrados) {
      if (inmuebles.inmuebleId == valor) {
        arr.push(inmuebles);
      }
    }
    return arr;
  }
  filtrarByAnio(valor: string): Array<ingresogastointerface> {
    let arr: ingresogastointerface[] = []
    for (const fechas of this.arrIngresosGastosFiltrados) {
      if (fechas.fechaFactura.toString().substring(0, 4) === valor.substring(0, 4)) {
        arr.push(fechas);
      }
    }
    return arr;
  }
  filtrarByMes(valor: string): Array<ingresogastointerface> {
    let arr: ingresogastointerface[] = []
    console.log(valor)
    for (const fechas of this.arrIngresosGastosFiltrados) {
      if (fechas.fechaFactura.toString().substring(6, 7) === valor) {
        arr.push(fechas);
      }
    }
    return arr;
  }

  calculoTotalIngreso(): number {
    let calculandoIngreso = 0;
    for (const inga of this.arrIngresosGastosFiltrados) {
      calculandoIngreso = calculandoIngreso + inga.totalIngreso;
    }
    this.importeIngreso = calculandoIngreso;
    return this.importeIngreso;
  }
  calculoTotalGasto(): number {
    let calculandoGasto = 0;
    for (const inga of this.arrIngresosGastosFiltrados) {
      calculandoGasto = calculandoGasto + inga.totalGasto;
    }
    this.importeGasto = calculandoGasto;
    return this.importeGasto;
 
  }
 

}
