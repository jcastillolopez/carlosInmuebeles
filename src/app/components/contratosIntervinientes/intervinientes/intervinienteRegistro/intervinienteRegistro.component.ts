import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Globales } from 'src/app/services/Globales.service';
import { tiposService } from 'src/app/services/tipos.service';

@Component({
  selector: 'intervinienteRegistro',
  templateUrl: './intervinienteRegistro.component.html',
  styleUrls: ['./intervinienteRegistro.component.css']
})
export class IntervinienteRegistroComponent implements OnInit {

  //paths
  pathInmuebles: string;
  pathTiposIntervinientes: string;
  pathIntervinientes: string;
  pathClientes: string;
  pathCreateUpdate: string;

  //Variables Generales
  registroForm: FormGroup;
  sesionStorageAdministradorId: number;

  //Listas
  arrInmuebles: any[];
  arrTipoInterviniente: any[];
  arrCliente: any[];

  constructor(
    private metodosGlobales: Globales,
    private metodosTipos: tiposService,
    private activateRouter: ActivatedRoute,
    private router: Router
  ) {
    this.pathInmuebles = 'inmueble/'
    this.pathTiposIntervinientes = 'interviniente/'
    this.pathIntervinientes = 'interviniente/'
    this.pathClientes = 'cliente/'
    this.pathCreateUpdate = 'interviniente/'

    this.arrInmuebles = [];
    this.arrTipoInterviniente = [];
    this.arrCliente = [];

    this.sesionStorageAdministradorId = parseInt(sessionStorage.getItem('administradorId')!)

    this.registroForm = new FormGroup({
      
      idInterviniente: new FormControl(),
      porcentajePropiedad: new FormControl(),

      clienteId: new FormControl(),
      tipoIntervinienteId: new FormControl(),
      contratoId: new FormControl(),
      // inmuebleId: new FormControl(),

      administradorId: new FormControl(parseInt(sessionStorage.getItem('administradorId')!)),
      usuarioId: new FormControl(parseInt(sessionStorage.getItem('idUsuario')!)),
      borrado: new FormControl(false),
      createTime: new FormControl(),
      updateTime: new FormControl(),
    })
  }

  async ngOnInit() {
    this.arrCliente = await this.metodosGlobales.getAll(this.pathClientes+ this.sesionStorageAdministradorId);
    this.arrInmuebles = await this.metodosGlobales.getAll(this.pathInmuebles + this.sesionStorageAdministradorId);
    this.arrTipoInterviniente = await this.metodosTipos.getAllTipos(this.pathTiposIntervinientes + this.sesionStorageAdministradorId);
    this.activateRouter.params.subscribe(async params => {
      if (params['id']) {
        let response = await this.metodosGlobales.getById(this.pathIntervinientes, params['id'])
        this.registroForm.patchValue(response[0])
      }
    })
  }
  async enviar() {
    this.activateRouter.params.subscribe(async params => {
      if (this.registroForm.value.idInterviniente !== null) {
        this.registroForm.value.updateTime = new Date();
        await this.metodosGlobales.update(this.registroForm.value, this.pathCreateUpdate);
      } else {
        this.registroForm.value.createTime = new Date();
        this.registroForm.value.updateTime = new Date();
        this.registroForm.value.contratoId = parseInt(this.activateRouter.snapshot.params['id'])
        console.log(this.registroForm.value);
        await this.metodosGlobales.create(this.registroForm.value, this.pathCreateUpdate);
      }
      window.location.href = 'http://localhost:4200/contratos/detalle/' + this.activateRouter.snapshot.params['id'];
  })

  }
}

