import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { intervinienteInterface } from 'src/app/interfaces/interviniente';
import { Globales } from 'src/app/services/Globales.service';
import { tiposService } from 'src/app/services/tipos.service';
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

  //paths
  pathIntervinientes: string;
  pathTiposIntervinientes: string;
  pathClientes: string;

  //variables Globales
  administradorId: number;

  constructor(
    private metodosGlobales: Globales,
    private metodoTipos: tiposService,
    private activateRouter: ActivatedRoute,
    private router: Router,
  ) {
    this.arrListaIntervinientes = [];
    this.arrTipoInterviniente = [];
    this.arrClientes = [];
    this.pathIntervinientes = 'intervinientes/'
    this.pathTiposIntervinientes = 'intervinientes/'
    this.pathClientes = 'clientes/'
    this.administradorId = parseInt(sessionStorage.getItem('administradorId')!);
  }

  async ngOnInit() {
    this.activateRouter.params.subscribe(async params => {
      this.arrListaIntervinientes = await this.metodosGlobales.getAll(this.pathIntervinientes + this.administradorId);

      for (const interviniente of this.arrListaIntervinientes) {

        if (interviniente.contratoId == parseInt(this.activateRouter.snapshot.params['id'])) {
          this.arrTipoInterviniente = await this.metodoTipos.getAllTipos(this.pathTiposIntervinientes + this.administradorId);
          this.arrClientes = await this.metodosGlobales.getAll(this.pathClientes + this.administradorId);

          for (const tipoInterviniente of this.arrTipoInterviniente) {
            if (tipoInterviniente.idTipoInterviniente == interviniente.tipoIntervinienteid) {
              interviniente.tipoInterviniente = tipoInterviniente.tipoInterviniente;
            }
          }

          for (const clientes of this.arrClientes) {
            if (clientes.idCliente == interviniente.clienteId) {
              interviniente.nombreCliente = clientes.nombre;
              interviniente.apellidosCliente = clientes.apellidos;
            }
          }
        }

      }
    })
  }

  navegar(idContrato: number, idInterviniente: number) {
    this.router.navigate(["/contratos/detalle/" + idContrato + '/interviniente/' + idInterviniente])

  }

}
