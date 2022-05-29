import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { tiposService } from 'src/app/services/tipos.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'tipoPagoLista',
  templateUrl: './tipoPagoLista.component.html',
  styleUrls: ['./tipoPagoLista.component.css']
})
export class TipoPagoListaComponent implements OnInit {
  seleccionadoId: string;
  //Tabla para la lista
  arrListaTipoPago: any[];
  constructor(
    private tiposService: tiposService,
    private activateRouter: ActivatedRoute,
    private router: Router
  ) {
    this.seleccionadoId = "";
    //Tabla para la lista
    this.arrListaTipoPago = [];
  }

  async ngOnInit() {
    this.arrListaTipoPago = await this.tiposService.getAllTipos(environment.APIPATH_TIPOPAGO + parseInt(sessionStorage.getItem('administradorId')!));

    this.activateRouter.params.subscribe(params => {
      this.seleccionadoId = params['id']
    })
  }
  navegar(idUsuario: number) {
    this.router.navigate(["/tipos/pago/modificacion/" + idUsuario])
  }
}
