import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { contratoInterface } from 'src/app/interfaces/contrato';
import { Globales } from 'src/app/services/Globales.service';
import { tiposService } from 'src/app/services/tipos.service';

@Component({
  selector: 'contratoLista',
  templateUrl: './contratoLista.component.html',
  styleUrls: ['./contratoLista.component.css']
})
export class ContratoListaComponent implements OnInit {
  arrListaContratos: contratoInterface[];
  contratoSeleccionadoId = "";
  path: string;
  //Formulario Modal
  arrSelectTipos: any[];

  constructor(
    private metodosGlobales: Globales,
    private metodosTipos: tiposService,
    private activateRouter: ActivatedRoute,
    private router: Router
  ) {
    this.path = 'contratos/';
    this.contratoSeleccionadoId = "";
    //Tabla para la lista
    this.arrListaContratos = [];
    this.arrSelectTipos = [];
  }

  async ngOnInit() {
    
    this.arrListaContratos = await this.metodosGlobales.getById(this.path, 1);

    this.activateRouter.params.subscribe(params => {
      this.contratoSeleccionadoId = params['id']
    })
    }
    navegar(idInmueble: number) {
      this.router.navigate(["/clientes/detalle/" + idInmueble])
      
    }
}