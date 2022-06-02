import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { inmuebleInterface } from 'src/app/interfaces/inmuebles';
import { Globales } from 'src/app/services/Globales.service';
import { tiposService } from 'src/app/services/tipos.service';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'inmuebleDetalle',
  templateUrl: './inmuebleDetalle.component.html',
  styleUrls: ['./inmuebleDetalle.component.css']
})
export class InmuebleDetalleComponent implements OnInit {
  @Output() emisor: EventEmitter<number> = new EventEmitter();

  inmuebleDetalle: any;
  arrSelectTipos: any[];
  arrPropiedad: any[];
  arrInversion: any;
  constructor(
    private metodosTipos: tiposService,
    private activateRouter: ActivatedRoute,
    private metodosGlobales: Globales,
  ) {
    this.arrSelectTipos = [];
    this.inmuebleDetalle = {
      idInmueble: 0,
      tipoInmueblesId: '',
      tipoEspecifico: '',
      alias: '',
      refCatastral: '',
      localidad: '',
      direccion: '',
      cp: '',
      borrado: false,
    }

    this.arrPropiedad = [{
      apellidos: '',
      nombre: '',
      porcentajePropiedad: 0
    }]

    this.arrInversion = {
      compra: 0,
      inversiones: 0,
      total: 0
    }
  }

  async ngOnInit() {
    this.activateRouter.params.subscribe(async params => {
      let response = await this.metodosGlobales.getById(environment.APIPATH_INMUEBLEDETALLE, params['id']);
      this.arrInversion = await this.metodosGlobales.getAll('inmueble/inversiones/' + params['id'])
      this.arrPropiedad = await this.metodosGlobales.getAll('inmueble/cliente/' + params['id'])
      this.inmuebleDetalle = response[0];
    })
  }
}
