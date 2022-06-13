import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Globales } from 'src/app/services/Globales.service';
import { tiposService } from 'src/app/services/tipos.service';
import { environment } from 'src/environments/environment';
import { BalanceXInmuebleComponent } from '../balanceXInmueble/balanceXInmueble.component';

@Component({
  selector: 'balanceXAnio',
  templateUrl: './balanceXAnio.component.html',
  styleUrls: ['./balanceXAnio.component.css']
})
export class BalanceXAnioComponent implements OnInit {

  informesBalancesXAnios: any[];
  selectedInmueble: number;
  @Input() selectedCliente: number;

  constructor(
    private metodosGlobales: Globales,
    private metodosTipos: tiposService,
    private router: Router,
    private activateRouter: ActivatedRoute,
    private balanceinmueble: BalanceXInmuebleComponent
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
      this.selectedInmueble = params['idInmueble']
      this.selectedCliente = this.balanceinmueble.selectedCliente
      this.informesBalancesXAnios = await this.metodosGlobales.getAll('informe/inmueble/anio/' + params['idInmueble']);
    })
  }

  navegarAnios(anio: number) {
    this.router.navigate(["/balances/cliente/" + this.selectedCliente + "/anios/" + this.selectedInmueble + "/mes/" + anio])
  }

}
