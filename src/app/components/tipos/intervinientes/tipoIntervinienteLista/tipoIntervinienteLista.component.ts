
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { tiposService } from 'src/app/services/tipos.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'tipoIntervinienteLista',
  templateUrl: './tipoIntervinienteLista.component.html',
  styleUrls: ['./tipoIntervinienteLista.component.css']
})
export class TipoIntervinienteListaComponent implements OnInit {
  seleccionadoId: string;
  administradorId: number;

  //Tabla para la lista
  arrListaTipoInterviniente: any[];

  constructor(
    private tiposService: tiposService,
    private activateRouter: ActivatedRoute,
    private router: Router
  ) {
    this.seleccionadoId = "";
    this.administradorId = parseInt(sessionStorage.getItem('administradorId')!);
    //Tabla para la lista
    this.arrListaTipoInterviniente = [];
  }

  async ngOnInit() {
    this.arrListaTipoInterviniente = await this.tiposService.getAllTipos(environment.APIPATH_TIPOINTERVINIENTE + this.administradorId);

    this.activateRouter.params.subscribe(params => {
      this.seleccionadoId = params['id']
    })
  }
  navegar(idUsuario: number) {
    this.router.navigate(["/tipos/interviniente/modificacion/" + idUsuario])
  }

}