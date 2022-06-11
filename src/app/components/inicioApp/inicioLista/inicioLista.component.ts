import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ingresogastointerface } from 'src/app/interfaces/ingresoGasto';
import { Globales } from 'src/app/services/Globales.service';

@Component({
  selector: 'inicioLista',
  templateUrl: './inicioLista.component.html',
  styleUrls: ['./inicioLista.component.css']
})
export class InicioListaComponent implements OnInit {

  arrFacturasAvisos: ingresogastointerface[]

  constructor(
    private metodosGlobales: Globales,
  ) { }

  async ngOnInit() {
    this.arrFacturasAvisos = await this.metodosGlobales.getAll(environment.APIPATH_AVISOSFACTURAS + sessionStorage.getItem('administradorId') + "/" + sessionStorage.getItem('entidad'))
  }

  cambioBotones(campo: ingresogastointerface): number {
    if (campo.totalGasto != 0) {
      return campo.totalGasto;
    } else {
      return campo.totalIngreso;
    }
  }

}
