import { Component, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Globales } from 'src/app/services/Globales.service';
import { tiposService } from 'src/app/services/tipos.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'balanceXInmueble',
  templateUrl: './balanceXInmueble.component.html',
  styleUrls: ['./balanceXInmueble.component.css']
})
export class BalanceXInmuebleComponent implements OnInit {

  selectedCliente: number = 0;
  informesBalancesXAnios: any[];
  selectedInmueble: number;

  constructor(
    private metodosGlobales: Globales,
    private metodosTipos: tiposService,
    private router: Router,
    private activateRouter: ActivatedRoute
  ) {
    this.informesBalancesXAnios = [{
      totalBalance: 0,
      totalIngresos: 0,
      totalGastos: 0,
      inmuebleAlias: '',
      idInmueble: 0,
      anio: '',
      nombreMes: '',
      numeroMes: 0,
    }]


  }

  ngOnInit() {
    this.activateRouter.params.subscribe(async params => {
      if (params['idCliente']) {
        this.selectedInmueble = params['idInmueble']
        this.selectedCliente = params['idCliente']
        this.informesBalancesXAnios = await this.metodosGlobales.getAll('informe/inmueble/' + parseInt(sessionStorage.getItem('administradorId')!) + '/' + this.selectedCliente);
      }
    })
  }

  navegarInmueble(idInmueble: number) {
    this.router.navigateByUrl("/balances/cliente/" + this.selectedCliente + "/anios/" + idInmueble)
  }

}
