
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { tiposService } from 'src/app/services/tipos.service';

@Component({
  selector: 'tipoContratoLista',
  templateUrl: './tipoContratoLista.component.html',
  styleUrls: ['./tipoContratoLista.component.css']
})
export class TipoContratoListaComponent implements OnInit {
  seleccionadoId: string;
  path_usuarios: string;
  administradorId: number;

  //Tabla para la lista
  arrListaTipoContrato: any[];

  constructor(
    private tiposService: tiposService,
    private activateRouter: ActivatedRoute,
    private router: Router
  ) {
    this.path_usuarios = 'contrato/';
    this.seleccionadoId = "";
    this.administradorId = parseInt(sessionStorage.getItem('administradorId')!);
    //Tabla para la lista
    this.arrListaTipoContrato = [];
  }

  async ngOnInit() {
    this.arrListaTipoContrato = await this.tiposService.getAllTipos(this.path_usuarios + this.administradorId);

    this.activateRouter.params.subscribe(params => {
      this.seleccionadoId = params['id']
    })
  }
  navegar(idUsuario: number) {
    this.router.navigate(["/tipos/contrato/modificacion/" + idUsuario])
  }

}
