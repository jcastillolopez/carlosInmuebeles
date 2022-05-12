import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';

import { Globales } from 'src/app/services/Globales.service';
import { tiposService } from 'src/app/services/tipos.service';

@Component({
  selector: 'periodoLista',
  templateUrl: './periodoLista.component.html',
  styleUrls: ['./periodoLista.component.css']
})
export class PeriodoListaComponent implements OnInit {
  seleccionadoId: string;
  path_tipos: string;
 
  arrSelectTipos: any[];

  //Tabla para la lista
  arrListaTipoPeriodo: any[];
  constructor(
    private metodosGlobales: Globales,
    private tiposService: tiposService,
    private activateRouter: ActivatedRoute,
    private router: Router
  ) { 
    this.path_tipos = 'tipos/periodo/';    
    this.seleccionadoId = "";
    //Tabla para la lista
    this.arrListaTipoPeriodo = [];
    this.arrSelectTipos = [];
  }

  async ngOnInit() {
    this.arrSelectTipos = await this.tiposService.getAllTipos(this.path_tipos);
    this.arrListaTipoPeriodo = await this.metodosGlobales.getById(this.path_tipos, 1);

    this.activateRouter.params.subscribe(params => {
      this.seleccionadoId = params['id']
    })
   }
   navegar(idUsuario: number) {
    this.router.navigate(["/tipos/periodo/" + idUsuario])
  }
}

