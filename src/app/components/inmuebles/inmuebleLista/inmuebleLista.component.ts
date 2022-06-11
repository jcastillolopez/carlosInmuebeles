import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Globales } from 'src/app/services/Globales.service';
import { PermisosService } from 'src/app/services/Permisos.service';
import { tiposService } from 'src/app/services/tipos.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'inmuebleLista',
  templateUrl: './inmuebleLista.component.html',
  styleUrls: ['./inmuebleLista.component.css'],
})
export class InmuebleListaComponent implements OnInit {

  inmuebleSeleccionadoId: number;
  //Formulario Modal
  arrSelectTipos: any[];

  //Tabla para la lista
  arrListaInmuebles: any[];

  constructor(
    private metodosGlobales: Globales,
    private metodosTipos: tiposService,
    private activateRouter: ActivatedRoute,
    private router: Router,
    public permisos: PermisosService
  ) {
    this.inmuebleSeleccionadoId = 1;

    //Tabla para la lista
    this.arrListaInmuebles = [];
    this.arrSelectTipos = [];

  }

  async ngOnInit() {
    this.arrSelectTipos = await this.metodosTipos.getAllTipos(environment.APIPATH_TIPOINMUEBLE + parseInt(sessionStorage.getItem('administradorId')!));
    this.arrSelectTipos.push(await this.metodosTipos.getAllTipos(environment.APIPATH_TIPOINMUEBLE + 1))
    if (sessionStorage.getItem('validacionVisualizacion') === '1') {
      this.arrListaInmuebles = await this.metodosGlobales.getAll(environment.APIPATH_INMUEBLE + parseInt(sessionStorage.getItem('administradorId')!));
    } else {
      this.arrListaInmuebles = await this.metodosGlobales.getAll(environment.APIPATH_INMUEBLE + parseInt(sessionStorage.getItem('administradorId')!) + '/' + sessionStorage.getItem('entidad'));
    }
    this.activateRouter.params.subscribe(params => {
      this.inmuebleSeleccionadoId = params['id']
    })
  }


  navegar(idInmueble: number) {
    this.router.navigate(["/inmuebles/detalle/" + idInmueble])
  }

  validaciones() {
    if (sessionStorage.getItem('validacionVisualizacion') == '1' || sessionStorage.getItem('validacionVisualizacion') == '2') {
      return true;
    } else {
      return false;
    }
  }

}
