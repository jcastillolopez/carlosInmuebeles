
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';

import { Globales } from 'src/app/services/Globales.service';
import { tiposService } from 'src/app/services/tipos.service';

@Component({
  selector: 'tipoContratoLista',
  templateUrl: './tipoContratoLista.component.html',
  styleUrls: ['./tipoContratoLista.component.css']
})
export class TipoContratoListaComponent implements OnInit {
  seleccionadoId: string;
  path_usuarios: string;
 
  arrSelectTipos: any[];

  //Tabla para la lista
  arrListaTipoContrato: any[];

  constructor(
    private metodosGlobales: Globales,
    private tiposService: tiposService,
    private activateRouter: ActivatedRoute,
    private router: Router
  ) {
    this.path_usuarios = 'tipos/contrato/';    
    this.seleccionadoId = "";
    //Tabla para la lista
    this.arrListaTipoContrato = [];
    this.arrSelectTipos = [];
   }

  async ngOnInit() {
    this.arrSelectTipos = await this.tiposService.getAllTipos(this.path_usuarios);
    this.arrListaTipoContrato = await this.metodosGlobales.getById(this.path_usuarios, 1);

    this.activateRouter.params.subscribe(params => {
      this.seleccionadoId = params['id']
    })
  }
     navegar(idUsuario: number) {
       this.router.navigate(["/tipos/contrato/" + idUsuario])
     }
    
}
