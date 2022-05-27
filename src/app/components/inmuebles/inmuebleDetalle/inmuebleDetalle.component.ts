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
  constructor(
    private metodosTipos: tiposService,
    private activateRouter: ActivatedRoute,
    private metodosGlobales:Globales,
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
   }

  async ngOnInit() {
    this.arrSelectTipos = await this.metodosTipos.getAllTipos(environment.APIPATH_TIPOINMUEBLE + parseInt(sessionStorage.getItem('administradorId')!))
    this.activateRouter.params.subscribe(async params => {
      let response = await this.metodosGlobales.getById(environment.APIPATH_INMUEBLE, params['id']);
      this.inmuebleDetalle = response[0];
      for (const tipo of this.arrSelectTipos) {
        if (response.tipoInmueblesId == tipo.idTipoInmueble) {
          console.log(tipo.tipoEspecifico)
          this.inmuebleDetalle.tipoEspecifico = tipo.tipoEspecifico;
        }
      }
    })
  }
}
