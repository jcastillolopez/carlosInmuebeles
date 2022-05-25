import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { tiposService } from 'src/app/services/tipos.service';

@Component({
  selector: 'tipoInmuebleLista',
  templateUrl: './tipoInmuebleLista.component.html',
  styleUrls: ['./tipoInmuebleLista.component.css']
})
export class TipoInmuebleListaComponent implements OnInit {
  seleccionadoId: string;
  path_tipos: string;

  //Tabla para la lista
  arrListaTipoInmueble: any[];
  administradorId: number;

  constructor(
    private tiposService: tiposService,
    private activateRouter: ActivatedRoute,
    private router: Router
  ) {
    this.path_tipos = 'inmuebles/';    
    this.seleccionadoId = "";
    //Tabla para la lista
    this.arrListaTipoInmueble = [];
    this.administradorId = parseInt(sessionStorage.getItem('administradorId')!)
   }   

   async ngOnInit() {
    this.arrListaTipoInmueble = await this.tiposService.getAllTipos(this.path_tipos + this.administradorId);
  
    this.activateRouter.params.subscribe(params => {
      this.seleccionadoId = params['id']
    })
   }
   navegar(idUsuario: number) {
    this.router.navigate(["/tipos/inmueble/modificacion/" + idUsuario])
  }
 
}
