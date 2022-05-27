import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { intervinienteInterface } from 'src/app/interfaces/interviniente';
import { Globales } from 'src/app/services/Globales.service';
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

  constructor(
    private metodosGlobales: Globales,
    private metodoTipos: tiposService,
    private activateRouter: ActivatedRoute,
    private router: Router,
  ) {
    this.arrListaIntervinientes = [];
    this.arrTipoInterviniente = [];
    this.arrClientes = [];
    this.administradorId = parseInt(sessionStorage.getItem('administradorId')!);
  }

  async ngOnInit() {
    this.activateRouter.params.subscribe(async params => {
      this.arrListaIntervinientes = await this.metodosGlobales.getById(environment.APIPATH_INTERVINIENTE, params['id']);
      for (const interviniente of this.arrListaIntervinientes) {
        if (interviniente.contratosId === this.activateRouter.snapshot.params['id']) {
          this.arrTipoInterviniente = await this.metodoTipos.getAllTipos(environment.APIPATH_TIPOINTERVINIENTE + this.administradorId);
          this.arrClientes = await this.metodosGlobales.getAll(environment.APIPATH_CLIENTE + this.administradorId);

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
