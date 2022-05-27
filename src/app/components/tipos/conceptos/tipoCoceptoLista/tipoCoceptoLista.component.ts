import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { tiposService } from 'src/app/services/tipos.service';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'tipoCoceptoLista',
  templateUrl: './tipoCoceptoLista.component.html',
  styleUrls: ['./tipoCoceptoLista.component.css']
})
export class TipoCoceptoListaComponent implements OnInit {
  seleccionadoId: string;

  //Tabla para la lista
  arrListaTipoConcepto: any[];
  administradorId: number;
  constructor(
    private tiposService: tiposService,
    private activateRouter: ActivatedRoute,
    private router: Router
  ) { 
    this.seleccionadoId = "";
    //Tabla para la lista
    this.arrListaTipoConcepto = [];
    this.administradorId = parseInt(sessionStorage.getItem('administradorId')!)
   }    
  
  async ngOnInit() {
    this.arrListaTipoConcepto = await this.tiposService.getAllTipos(environment.APIPATH_TIPOCONCEPTO + this.administradorId);   
    this.activateRouter.params.subscribe(params => {
      this.seleccionadoId = params['id']
    })
   }
   navegar(idUsuario: number) {
    this.router.navigate(["/tipos/concepto/modificacion/" + idUsuario])
  }
 

}
