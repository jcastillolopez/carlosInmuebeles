import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Globales } from 'src/app/services/Globales.service';
import { PermisosService } from 'src/app/services/Permisos.service';
import { tiposService } from 'src/app/services/tipos.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'rolLista',
  templateUrl: './rolLista.component.html',
  styleUrls: ['./rolLista.component.css']
})
export class RolListaComponent implements OnInit {
  seleccionadoId: string;
  administradorId: number;

  //Tabla para la lista
  arrListaTipoRol: any[];

  constructor(
    private tiposService: tiposService,
    private activateRouter: ActivatedRoute,
    private router: Router,
    public permisos: PermisosService
  ) {
    this.seleccionadoId = "";
    //Tabla para la lista
    this.arrListaTipoRol = [];
  }

  async ngOnInit() {
    this.arrListaTipoRol = await this.tiposService.getAllTipos(environment.APIPATH_TIPOROL + parseInt(sessionStorage.getItem('administradorId')!));

  }
  navegar(idUsuario: number) {
    this.router.navigate(["/tipos/rol/modificacion/" + idUsuario])
  }

}
