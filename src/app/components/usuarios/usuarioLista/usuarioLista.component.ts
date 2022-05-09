import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';

import { Globales } from 'src/app/services/Globales.service';

@Component({
  selector: 'usuarioLista',
  templateUrl: './usuarioLista.component.html',
  styleUrls: ['./usuarioLista.component.css']
})
export class UsuarioListaComponent implements OnInit {
  usuarioSeleccionadoId: string;
  path_usuarios: string;
  path_roles: string;
  //Formulario Modal
  arrSelectTipos: any[];

  //Tabla para la lista
  arrListaUsuarios: any[];

  constructor(
    private metodosGlobales: Globales,
    private activateRouter: ActivatedRoute,
    private router: Router
  ) {
    this.path_usuarios = 'Usuario/';
    this.path_roles = 'Roles';
    this.usuarioSeleccionadoId = "";
    //Tabla para la lista
    this.arrListaUsuarios = [];
    this.arrSelectTipos = [];
   }

  async ngOnInit() {
    this.arrSelectTipos = await this.metodosGlobales.getAll(this.path_roles);
    this.arrListaUsuarios = await this.metodosGlobales.getById(this.path_usuarios, 1);

    this.activateRouter.params.subscribe(params => {
      this.usuarioSeleccionadoId = params['id']
    })
  }
     navegar(idUsuario: number) {
       this.router.navigate(["/usuarios/detalle/" + idUsuario])
     }
    
}
