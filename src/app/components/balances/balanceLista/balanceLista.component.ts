import { Component, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Globales } from 'src/app/services/Globales.service';
import { tiposService } from 'src/app/services/tipos.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'balanceLista',
  templateUrl: './balanceLista.component.html',
  styleUrls: ['./balanceLista.component.css']
})
export class BalanceListaComponent implements OnInit {

  arrListaClientes: any[];
  informesBalancesTotales: any;
  selectInmuebles: any[];


  constructor(
    private metodosGlobales: Globales,
    private metodosTipos: tiposService,
    private router: Router,
    private activateRouter: ActivatedRoute,
  ) {
    this.arrListaClientes = [];
    this.informesBalancesTotales = {
      totalBalance: 0,
      totalIngresos: 0,
      totalGastos: 0
    }
  }

  async ngOnInit() {
    this.arrListaClientes = await this.metodosGlobales.getById(environment.APIPATH_CLIENTE, parseInt(sessionStorage.getItem('administradorId')!));
    this.informesBalancesTotales = await this.metodosGlobales.getAll('informe/' + parseInt(sessionStorage.getItem('administradorId')!))
  }

  navegarClientes(idCliente: number) {
    this.router.navigate(["/balances/cliente/" + idCliente])
  }
  navegarAnios() {
    this.router.navigate(["/balances/anio/"])
  }
}