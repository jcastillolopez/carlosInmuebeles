import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ignoreElements } from 'rxjs';
import { ingresogastointerface } from 'src/app/interfaces/ingresoGasto';
import { ingresogastodetalleinterface } from 'src/app/interfaces/ingresoGastoDetalle';
import { Globales } from 'src/app/services/Globales.service';
import { tiposService } from 'src/app/services/tipos.service';

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
  arrInGaDetalle: ingresogastodetalleinterface[];
  arrListaInmuebles: any[];
  selectInmuebles: any[];
  selectAnio: any[];
  inmuebleFiltrado: number; 

  pathIngresoGasto: string;
  pathIngresoGastoDetalle: string;
  pathInmuebles: string;
  pathFacturasAnio: string;
  pathClientes: string;

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
    this.arrListaInmuebles = [];
    this.selectInmuebles = [];
    this.selectAnio = [];
    this.inmuebleFiltrado = 0;

    this.pathIngresoGasto = 'ingresogasto/';
    this.pathIngresoGastoDetalle = 'ingresogastodetalle/';
    this.pathInmuebles = 'inmuebles/';
    this.pathFacturasAnio = 'ingresogasto/anio/';
    this.pathClientes = 'clientes/';
  }

  async ngOnInit() {
    this.arrIngresosGastosTodos = await this.metodosGlobales.getAll(this.pathIngresoGasto + parseInt(sessionStorage.getItem('administradorId')!));
    this.arrIngresosGastosMostrar = this.arrIngresosGastosTodos;
    this.arrListaInmuebles = await this.metodosGlobales.getAll(this.pathInmuebles + parseInt(sessionStorage.getItem('administradorId')!));
    this.selectInmuebles = await this.metodosGlobales.getAll(this.pathInmuebles + parseInt(sessionStorage.getItem('administradorId')!));
    this.selectAnio = await this.metodosGlobales.getAll(this.pathFacturasAnio + parseInt(sessionStorage.getItem('administradorId')!));

    for (const ingresoGasto of this.arrIngresosGastosMostrar) {
      if (ingresoGasto.inmuebleId != null) {
        for (const inmueble of this.arrListaInmuebles) {
          if (ingresoGasto.inmuebleId === inmueble.idInmueble) {
            ingresoGasto.aliasInmueble = inmueble.alias;
          }
        }
      }
    }
  }

  async navegar(idIngresoGasto: number) {
    this.router.navigate(["/inga/detalle/" + idIngresoGasto])
    this.arrInGaDetalle = await this.metodosGlobales.getById(this.pathIngresoGastoDetalle, idIngresoGasto);
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
    }else{
      this.arrIngresosGastosMostrar = this.arrIngresosGastosTodos;
    }
    this.arrIngresosGastosInmuebles = this.arrIngresosGastosFiltrados;
  }

  anios($event) {
    this.arrIngresosGastosFiltrados = []
    if($event.target.value != 0){
      for (const fechas of this.arrIngresosGastosInmuebles) {
        if(fechas.fechaFactura.toString().substring(0, 4) === $event.target.value){
          this.arrIngresosGastosFiltrados.push(fechas);
        }
      }
      this.arrIngresosGastosMostrar = this.arrIngresosGastosFiltrados;
    }else{
      this.arrIngresosGastosMostrar = this.arrIngresosGastosInmuebles;
    }
  }

}
