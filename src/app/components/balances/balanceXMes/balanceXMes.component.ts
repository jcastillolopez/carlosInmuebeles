import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Globales } from 'src/app/services/Globales.service';
import { tiposService } from 'src/app/services/tipos.service';
import { environment } from 'src/environments/environment';
import { BalanceXAnioComponent } from '../balanceXAnio/balanceXAnio.component';

@Component({
  selector: 'balanceXMes',
  templateUrl: './balanceXMes.component.html',
  styleUrls: ['./balanceXMes.component.css']
})
export class BalanceXMesComponent implements OnInit {
  informesBalancesXAnios: any[];

  constructor(
    private metodosGlobales: Globales,
    private metodosTipos: tiposService,
    private router: Router,
    private activateRouter: ActivatedRoute,
    private balanceXAnio: BalanceXAnioComponent
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

  async ngOnInit() {
    this.activateRouter.params.subscribe(async params => {
      this.informesBalancesXAnios = await this.metodosGlobales.getAll('informe/inmueble/mes/' + this.balanceXAnio.selectedInmueble + "/" + params['anio'] + "/" + parseInt(sessionStorage.getItem('administradorId')!));
    })
  }

}
