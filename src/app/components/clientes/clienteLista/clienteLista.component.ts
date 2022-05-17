import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';

import { Globales } from 'src/app/services/Globales.service';
import { tiposService } from 'src/app/services/tipos.service';

@Component({
  selector: 'clienteLista',
  templateUrl: './clienteLista.component.html',
  styleUrls: ['./clienteLista.component.css']
})
export class ClienteListaComponent implements OnInit {
  clienteSeleccionadoId: string;
  path: string;
  //Formulario Modal
  arrSelectTipos: any[];

  //Tabla para la lista
  arrListaClientes: any[];


  constructor(
    private metodosGlobales: Globales,
    private metodosTipos: tiposService,
    private activateRouter: ActivatedRoute,
    private router: Router
  ) { 
    
    this.path = 'clientes/';
    this.clienteSeleccionadoId = "";
    //Tabla para la lista
    this.arrListaClientes = [];
    this.arrSelectTipos = [];
  }

  async ngOnInit() {
    // this.arrSelectTipos = await this.metodosTipos.getAllTipos('clientes');
    this.arrListaClientes = await this.metodosGlobales.getById(this.path, parseInt(sessionStorage.getItem('administradorId')!));

    this.activateRouter.params.subscribe(params => {
      this.clienteSeleccionadoId = params['id']
    })

   
        
      
    
  }
  navegar(idInmueble: number) {
    this.router.navigate(["/clientes/detalle/" + idInmueble])
    
  }

}
