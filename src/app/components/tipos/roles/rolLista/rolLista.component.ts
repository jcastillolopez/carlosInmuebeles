import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';

import { Globales } from 'src/app/services/Globales.service';
import { tiposService } from 'src/app/services/tipos.service';

@Component({
  selector: 'rolLista',
  templateUrl: './rolLista.component.html',
  styleUrls: ['./rolLista.component.css']
})
export class RolListaComponent implements OnInit {
  seleccionadoId: string;
  path_usuarios: string;
  administradorId: number;

  //Tabla para la lista
  arrListaTipoRol: any[];

  constructor(
    private tiposService: tiposService,
    private activateRouter: ActivatedRoute,
    private router: Router
  ) {
    this.path_usuarios = 'rol/';
    this.seleccionadoId = "";
    this.administradorId = parseInt(sessionStorage.getItem('administradorId')!);
    //Tabla para la lista
    this.arrListaTipoRol = [];
  }

  async ngOnInit() {
    this.arrListaTipoRol = await this.tiposService.getAllTipos(this.path_usuarios + this.administradorId);

  }
  navegar(idUsuario: number) {
    this.router.navigate(["/tipos/rol/modificacion/" + idUsuario])
  }

}
