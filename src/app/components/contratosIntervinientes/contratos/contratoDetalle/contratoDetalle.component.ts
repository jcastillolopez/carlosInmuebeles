import { Component, OnInit } from '@angular/core';
import { Globales } from 'src/app/services/Globales.service';
import { tiposService } from 'src/app/services/tipos.service';
import { ActivatedRoute } from '@angular/router';
import { contratoInterface } from 'src/app/interfaces/contrato';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'contratoDetalle',
  templateUrl: './contratoDetalle.component.html',
  styleUrls: ['./contratoDetalle.component.css']
})
export class ContratoDetalleComponent implements OnInit {
  contrato: contratoInterface;
  selectTipoContrato: any;
  selectTipoPeriodo: any;
  selectInmueble: any;

  arrListaInmuebles: any[];
  arrTipoPeriodo: any[];
  arrTipoContrato: any[];


  constructor(
    private metodoGlobales: Globales,
    private metodosTipos: tiposService,
    private activateRouter: ActivatedRoute
  ) {

    this.contrato = {
      idContratos: 0,
      valorContrato: 0,
      fechaContrato: new Date(),
      fechaInicio: new Date(),
      fechaFin: new Date(),
      cantidadPeriodo: 0,

      createTime: new Date(),
      updateTime: new Date(),
      administradorId: 0,
      usuarioId: 0,
      borrado: false,

      tipoPeriodoId: 0,
      tipoPeriodo: '',
      tipoContratoId: 0,
      tipoContrato: '',
      inmuebleId: 0,
      aliasInmueble: '',
    }
    //Tabla para la lista
    this.arrListaInmuebles = [];
    this.arrTipoPeriodo = [];
    this.arrTipoContrato = [];
  }

  ngOnInit() {
    this.activateRouter.params.subscribe(async params => {
      let response = await this.metodoGlobales.getById(environment.APIPATH_CONTRATODETALLE, params['id'])
      this.contrato = response[0]
    })
  }

}

