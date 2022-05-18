import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { tiposService } from 'src/app/services/tipos.service';


@Component({
  selector: 'tipoConceptoRegistro',
  templateUrl: './tipoConceptoRegistro.component.html',
  styleUrls: ['./tipoConceptoRegistro.component.css']
})
export class TipoConceptoRegistroComponent implements OnInit {
  seleccionadoId: string;
  path_tipos: string;

  //Tabla para la lista
  arrListaTipoConcepto: any[];
  administradorId: number;
  constructor(
    private tiposService: tiposService,
    private activateRouter: ActivatedRoute,
    private router: Router
  ) { 
    this.path_tipos = 'concepto/';    
    this.seleccionadoId = "";
    //Tabla para la lista
    this.arrListaTipoConcepto = [];
    this.administradorId = parseInt(sessionStorage.getItem('administradorId')!)
  }

  async ngOnInit() {
    this.arrListaTipoConcepto = await this.tiposService.getAllTipos(this.path_tipos + this.administradorId);

    this.activateRouter.params.subscribe(params => {
      this.seleccionadoId = params['id']
    })
   }
   navegar(idUsuario: number) {
    this.router.navigate(["/tipos/inmueble/modificacion/" + idUsuario])
  }
}
