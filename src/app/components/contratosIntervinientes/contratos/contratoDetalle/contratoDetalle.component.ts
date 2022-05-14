import { Component, OnInit } from '@angular/core';
import { Globales } from 'src/app/services/Globales.service';
import { tiposService } from 'src/app/services/tipos.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'contratoDetalle',
  templateUrl: './contratoDetalle.component.html',
  styleUrls: ['./contratoDetalle.component.css']
})
export class ContratoDetalleComponent implements OnInit {

  path: string = 'contratos/detalles/';
  contrato: any;
  selectTipoContrato: any;
  selectTipoPeriodo: any;
  selectInmueble: any;


  constructor(
    private metodoGlobales:Globales,
    private metodosTipos: tiposService,
    private activateRouter: ActivatedRoute) {

    this.contrato = {
      fechaContrato: "",
      valorContrato: 0,
      fechaInicio: "",
      fechaFin: "",
      cantidadPeriodo: 0,
      createTime: "",
      updateTime: "",
      borrado: false,
      usuarioId: 0,
      administradorId: 0,
      inmuebleId: 0,
      tipoPeriodoId: 0,
      tipoContratoId: 0,
      idContratos: 0
     
    }
  }

  ngOnInit() {
    this.activateRouter.params.subscribe(async params => {
      let response = await this.metodoGlobales.getById(this.path,params['id'])
      console.log(JSON.stringify(response));
      this.contrato = response[0]
    })
  }
  
}

