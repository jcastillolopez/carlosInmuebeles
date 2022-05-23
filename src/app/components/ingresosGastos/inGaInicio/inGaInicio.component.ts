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

  arrIngresosGastos: ingresogastointerface[];
  arrInGaDetalle: ingresogastodetalleinterface[];
  arrListaInmuebles: any[];

  pathIngresoGasto: string;
  pathIngresoGastoDetalle: string;
  pathInmuebles: string;
  pathClientes: string;

  constructor(
    private metodosGlobales: Globales,
    private metodosTipos: tiposService,
    private router: Router,
    private activateRouter: ActivatedRoute,
  ) {
    this.arrIngresosGastos = [];
    this.arrListaInmuebles = [];

    this.pathIngresoGasto = 'ingresogasto/';
    this.pathIngresoGastoDetalle = 'ingresogastodetalle/';
    this.pathInmuebles = 'inmuebles/';
    this.pathClientes = 'clientes/';
  }

  async ngOnInit() {
    this.arrIngresosGastos = await this.metodosGlobales.getAll(this.pathIngresoGasto + parseInt(sessionStorage.getItem('administradorId')!));
    this.arrListaInmuebles = await this.metodosGlobales.getAll(this.pathInmuebles + parseInt(sessionStorage.getItem('administradorId')!));

    for (const ingresoGasto of this.arrIngresosGastos) {

      if (ingresoGasto.inmuebleId != null) {

        for (const inmueble of this.arrListaInmuebles) {
          ingresoGasto.aliasInmueble = inmueble.alias;
        }

      }
    }
  }

  async navegar(idIngresoGasto: number) {
    this.router.navigate(["/inga/detalle/" + idIngresoGasto])
    this.arrInGaDetalle = await this.metodosGlobales.getById(this.pathIngresoGastoDetalle, idIngresoGasto);
  }

  detalle(inGaId: number, idInGa: number): boolean{
    if(inGaId === idInGa){
      return true;
    }else{
      return false;
    }
  }

}
