import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Globales } from 'src/app/services/Globales.service';
import { tiposService } from 'src/app/services/tipos.service';

@Component({
  selector: 'clienteLista',
  templateUrl: './clienteLista.component.html',
  styleUrls: ['./clienteLista.component.css']
})
export class ClienteListaComponent implements OnInit {

  clienteSeleccionadoId: number;
  path: string;
  //Formulario Modal
  arrSelectTipos: any[];

  //Tabla para la lista
  arrListaClientes: any[];


  constructor(
    private metodosGlobales: Globales,
    private metodosTipos: tiposService,
    private activateRouter: ActivatedRoute,
    private router: Router
  ) {

    this.path = 'cliente/';
    this.clienteSeleccionadoId = 1;

    //Tabla para la lista
    this.arrListaClientes = [];
    this.arrSelectTipos = [];
  }

  async ngOnInit() {
    this.arrListaClientes = await this.metodosGlobales.getById(this.path, parseInt(sessionStorage.getItem('administradorId')!));

    this.activateRouter.params.subscribe(params => {
      this.clienteSeleccionadoId = params['id']
    })
  }


  navegar(idCliente: number) {
    this.router.navigate(["/clientes/detalle/" + idCliente])

  }

}
