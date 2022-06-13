import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { intervinienteInterface } from 'src/app/interfaces/interviniente';
import { Globales } from 'src/app/services/Globales.service';
import { PermisosService } from 'src/app/services/Permisos.service';
import { tiposService } from 'src/app/services/tipos.service';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'intervinienteLista',
  templateUrl: './intervinienteLista.component.html',
  styleUrls: ['./intervinienteLista.component.css']
})
export class IntervinienteListaComponent implements OnInit {

  //Listados
  arrListaIntervinientes: intervinienteInterface[];
  arrTipoInterviniente: any[];
  arrClientes: any[];

  //variables Globales
  administradorId: number;
  idContrato: number;

  constructor(
    private metodosGlobales: Globales,
    private metodoTipos: tiposService,
    private activateRouter: ActivatedRoute,
    private router: Router,
    public permisos: PermisosService
  ) {
    this.arrListaIntervinientes = [];
    this.arrTipoInterviniente = [];
    this.arrClientes = [];
  }

  async ngOnInit() {
    this.activateRouter.params.subscribe(async params => {
      this.idContrato = params['id']
      this.arrListaIntervinientes = await this.metodosGlobales.getById(environment.APIPATH_INTERVINIENTE, params['id']);
    })
  }

  navegar(idContrato: number, idInterviniente: number) {
    this.router.navigate(["/contratos/detalle/" + idContrato + '/interviniente/' + idInterviniente])

  }

  navegarNuevo() {
    this.router.navigate(["/contratos/detalle/" + this.idContrato])
  }

}
