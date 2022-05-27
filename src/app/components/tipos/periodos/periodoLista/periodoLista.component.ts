import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';

import { Globales } from 'src/app/services/Globales.service';
import { tiposService } from 'src/app/services/tipos.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'periodoLista',
  templateUrl: './periodoLista.component.html',
  styleUrls: ['./periodoLista.component.css']
})
export class PeriodoListaComponent implements OnInit {
  seleccionadoId: string;
  administradorId: number;

  //Tabla para la lista
  arrListaTipoPeriodo: any[];

  constructor(
    private tiposService: tiposService,
    private activateRouter: ActivatedRoute,
    private router: Router
  ) {
    this.seleccionadoId = "";
    this.administradorId = parseInt(sessionStorage.getItem('administradorId')!);
    //Tabla para la lista
    this.arrListaTipoPeriodo = [];
  }

  async ngOnInit() {
    this.arrListaTipoPeriodo = await this.tiposService.getAllTipos(environment.APIPATH_TIPOPERIODO + this.administradorId);

  }
  navegar(idUsuario: number) {
    this.router.navigate(["/tipos/periodo/modificacion/" + idUsuario])
  }

}