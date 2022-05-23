import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ignoreElements } from 'rxjs';
import { ingresogastointerface } from 'src/app/interfaces/ingresoGasto';
import { Globales } from 'src/app/services/Globales.service';
import { tiposService } from 'src/app/services/tipos.service';

@Component({
  selector: 'inGaInicio',
  templateUrl: './inGaInicio.component.html',
  styleUrls: ['./inGaInicio.component.css']
})
export class InGaInicioComponent implements OnInit {

  arrIngresosGastos: ingresogastointerface[];
  arrListaInmuebles: any[];

  pathIngresoGasto: string;
  pathInmuebles: string;
  pathClientes: string;

  constructor(
    private metodosGlobales: Globales,
    private metodosTipos: tiposService,
    private router: Router
  ) {
    this.arrIngresosGastos = [];
    this.arrListaInmuebles = [];

    this.pathIngresoGasto = 'ingresogasto/';
    this.pathInmuebles = 'inmuebles/';
    this.pathClientes = 'clientes/';
   }

  async ngOnInit() {
    this.arrIngresosGastos = await this.metodosGlobales.getAll(this.pathIngresoGasto + parseInt(sessionStorage.getItem('administradorId')!));
    this.arrListaInmuebles = await this.metodosGlobales.getAll(this.pathInmuebles + parseInt(sessionStorage.getItem('administradorId')!));

    for (const ingresoGasto of this.arrIngresosGastos) {
      
      if(ingresoGasto.inmuebleId != null){

        for (const inmueble of this.arrListaInmuebles) {
          ingresoGasto.aliasInmueble = inmueble.alias;
        }

      }
    }
  }

  navegar(idIngresoGasto: number){
    this.router.navigate(["/inga/detalle/" + idIngresoGasto])
  }

}
