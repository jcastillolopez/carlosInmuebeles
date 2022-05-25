import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Globales } from 'src/app/services/Globales.service';
import { tiposService } from 'src/app/services/tipos.service';

@Component({
  selector: 'contratoRegistro',
  templateUrl: './contratoRegistro.component.html',
  styleUrls: ['./contratoRegistro.component.css']
})
export class ContratoRegistroComponent implements OnInit {

  idContrato: string;
  path_lista: string;
  path_lista_inmuebles: string;
  path_lista_tipo_contrato: string;
  path_lista_tipo_periodo: string;
  path_create_update: string;
  registroForm: FormGroup;
  arrSelectTipoContrato: any[];
  arrInmuebles: any[];
  arrTipoPeriodo: any[];
  sesionStorageAdministradorId: number;

  constructor(
    private metodosGlobales: Globales,
    private metodosTipos: tiposService,  
    private activateRouter: ActivatedRoute,
    private router: Router
  ) {
    this.idContrato = ""
    this.path_lista = 'contrato/detalle/'
    this.path_lista_inmuebles = 'inmueble/'
    this.path_lista_tipo_contrato = 'contrato/'
    this.path_lista_tipo_periodo = 'periodo/'
    this.path_create_update = 'contrato/'
    this.arrSelectTipoContrato = [];
    this.arrInmuebles = [];
    this.arrTipoPeriodo = [];
    this.sesionStorageAdministradorId = parseInt(sessionStorage.getItem('administradorId')!)
    this.registroForm = new FormGroup({
      idContratos: new FormControl(),
      fechaContrato: new FormControl(),
      valorContrato: new FormControl(),
      fechaInicio: new FormControl(),
      fechaFin: new FormControl(),
      cantidadPeriodo: new FormControl(),
      hasIntervinientes: new FormControl(false),


      inmuebleId: new FormControl(),
      tipoPeriodoId: new FormControl(),
      tipoContratoId: new FormControl(),


      administradorId: new FormControl(parseInt(sessionStorage.getItem('administradorId')!)),
      usuarioId: new FormControl(parseInt(sessionStorage.getItem('idUsuario')!)),
      borrado: new FormControl(false),
      createTime: new FormControl(),
      updateTime: new FormControl(),
    })
   }

   async ngOnInit() {
   this.arrInmuebles = await this.metodosGlobales.getAll(this.path_lista_inmuebles + this.sesionStorageAdministradorId);
   this.arrSelectTipoContrato = await this.metodosTipos.getAllTipos(this.path_lista_tipo_contrato + this.sesionStorageAdministradorId);
   this.arrTipoPeriodo = await this.metodosTipos.getAllTipos(this.path_lista_tipo_periodo + this.sesionStorageAdministradorId)
    this.activateRouter.params.subscribe(async params => {
      if (params['id']) {
        let response = await this.metodosGlobales.getById(this.path_lista, params['id'])
        this.registroForm.patchValue(response[0])
      }
    
    })
  }
  async enviar() {
    if (this.registroForm.value.idContratos !== null) {
      this.registroForm.value.updateTime = new Date();
      console.log(this.registroForm.value.idContratos)
      await this.metodosGlobales.update(this.registroForm.value, this.path_create_update);
    } else {
      this.registroForm.value.createTime = new Date();
      this.registroForm.value.updateTime = new Date();
      await this.metodosGlobales.create(this.registroForm.value, this.path_create_update);
    }
    // window.location.href = 'http://localhost:4200/contratos'
  }

}
