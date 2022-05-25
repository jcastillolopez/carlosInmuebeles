import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Globales } from 'src/app/services/Globales.service';
import { tiposService } from 'src/app/services/tipos.service';

@Component({
  selector: 'usuarioLista',
  templateUrl: './usuarioLista.component.html',
  styleUrls: ['./usuarioLista.component.css']
})
export class UsuarioListaComponent implements OnInit {
  usuarioSeleccionadoId: string;
  path_usuarios: string;
  path_roles: string;
  path_usuarios_detalle: string;
  //Formulario Modal
  arrSelectTipos: any[];

  //Tabla para la lista
  arrListaUsuarios: any[];

  constructor(
    private metodosGlobales: Globales,
    private tiposService: tiposService,
    private activateRouter: ActivatedRoute,
    private router: Router
  ) {
    this.path_usuarios = 'usuario/';
    this.path_roles = 'rol/1';
    this.path_usuarios_detalle = 'usuario/detalle/'
    this.usuarioSeleccionadoId = "";
    //Tabla para la lista
    this.arrListaUsuarios = [];
    this.arrSelectTipos = [];
  }

  async ngOnInit() {
    this.arrSelectTipos = await this.tiposService.getAllTipos(this.path_roles);
    this.arrListaUsuarios = await this.metodosGlobales.getById(this.path_usuarios, parseInt(sessionStorage.getItem('administradorId')!));

    this.activateRouter.params.subscribe(params => {
      this.usuarioSeleccionadoId = params['id']
    })
  }
  navegar(idUsuario: number) {
    this.router.navigate([this.path_usuarios_detalle + idUsuario])
  }
}
