import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PermisosService } from 'src/app/services/Permisos.service';
import { tiposService } from 'src/app/services/tipos.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'tipoCategoriaLista',
  templateUrl: './tipoCategoriaLista.component.html',
  styleUrls: ['./tipoCategoriaLista.component.css']
})
export class TipoCategoriaListaComponent implements OnInit {
  seleccionadoId: string;

  //Tabla para la lista
  arrListaTipoCategoria: any[];
  constructor(
    private tiposService: tiposService,
    private activateRouter: ActivatedRoute,
    private router: Router,
    public permisos: PermisosService
  ) {
    this.seleccionadoId = "";
    //Tabla para la lista
    this.arrListaTipoCategoria = [];
  }

  async ngOnInit() {
    this.arrListaTipoCategoria = await this.tiposService.getAllTipos(environment.APIPATH_TIPOCATEGORIA + parseInt(sessionStorage.getItem('administradorId')!));
    this.activateRouter.params.subscribe(params => {
      this.seleccionadoId = params['id']
    })
  }
  navegar(idUsuario: number) {
    this.router.navigate(["/tipos/categoria/modificacion/" + idUsuario])
  }


}
