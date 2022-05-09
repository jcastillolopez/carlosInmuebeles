import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { inmuebleInterface } from 'src/app/interfaces/inmuebles';
import { Globales } from 'src/app/services/Globales.service';
import { tiposService } from 'src/app/services/tipos.service';


@Component({
  selector: 'inmuebleDetalle',
  templateUrl: './inmuebleDetalle.component.html',
  styleUrls: ['./inmuebleDetalle.component.css']
})
export class InmuebleDetalleComponent implements OnInit {
  @Output() emisor: EventEmitter<number> = new EventEmitter();

  inmuebleDetalle: any;
  arrSelectTipos: any[];
  path: string = 'inmuebles/detalle/'
  constructor(
    private metodosTipos: tiposService,
    private activateRouter: ActivatedRoute,
    private metodosGlobales:Globales,
  ) {
    this.arrSelectTipos = [];
    this.inmuebleDetalle = {
      idInmueble: 0,
      idTipoInmueble: Object,
      alias: '',
      refCatastral: '',
      localidad: '',
      direccion: '',
      cp: '',
      usuario_id: 0,
      borrado: false,
      idAdministrador: 0,
      }
   }

  async ngOnInit() {
    this.arrSelectTipos = await this.metodosTipos.getAllTipos('inmuebles')
    this.activateRouter.params.subscribe(async params => {
      let response = await this.metodosGlobales.getById(this.path, params['id'])
      this.inmuebleDetalle = response[0]
      for (const tipo of this.arrSelectTipos) {
        if (tipo.idTipoInmueble == this.inmuebleDetalle.idTipoInmueble) {
          this.inmuebleDetalle.idTipoInmueble = tipo.tipoInmueble;
        }
      }
    })
  }
}
