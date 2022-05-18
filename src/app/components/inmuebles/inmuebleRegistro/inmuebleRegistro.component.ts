import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators, FormsModule } from '@angular/forms';
import { Globales } from 'src/app/services/Globales.service';
import { tiposService } from 'src/app/services/tipos.service';


@Component({
  selector: 'inmueblesRegistro',
  templateUrl: './inmuebleRegistro.component.html',
  styleUrls: ['./inmuebleRegistro.component.css']
})
export class InmueblesRegistroComponent implements OnInit {

  @Input()
  idInmueble: string;
  arrSelectTipos: any[];
  //paths
  path_lista: string;
  path_create_update: string;
  tipoSeleccionado: number;

  registroForm: FormGroup;

  constructor(
    private metodosGlobales: Globales,
    private metodosTipos: tiposService,
    private activateRouter: ActivatedRoute,
    private router: Router
  ) {

    this.idInmueble = ""
    this.tipoSeleccionado = 0;

    //Paths APIS CARLOS
    this.path_lista = 'inmuebles/detalle/'
    this.path_create_update = 'inmuebles/'

    this.arrSelectTipos = [];
    this.registroForm = new FormGroup({
      idInmueble: new FormControl(),
      tipoInmueblesId: new FormControl(),
      alias: new FormControl(),
      refCatastral: new FormControl(),
      localidad: new FormControl(),
      direccion: new FormControl(),
      codigoPostal: new FormControl(),
      administradorId: new FormControl(parseInt(sessionStorage.getItem('administradorId')!)),
      usuarioId: new FormControl(parseInt(sessionStorage.getItem('idUsuario')!)),
      borrado: new FormControl(),
      createTime: new FormControl(), 
      updateTime: new FormControl(),
      planta: new FormControl(),
      nhabitaciones:new FormControl(),
      mcuadrados: new FormControl(),
      nbanos:new FormControl(),
  
    })
  }

  async ngOnInit() {
    this.arrSelectTipos = await this.metodosTipos.getAllTipos('inmuebles/1');
    this.activateRouter.params.subscribe(async params => {
      if (params['id']) {
        let response = await this.metodosGlobales.getById(this.path_lista, params['id']);
        this.registroForm.patchValue(response[0])
      }
    })
  }

  async enviar() {   
    if (this.registroForm.value.idInmueble !== null) {

      this.registroForm.value.idTipoInmueble = parseInt(this.registroForm.value.idTipoInmueble);
      this.registroForm.value.updateTime = new Date();
      this.registroForm.value.usuarioId = parseInt(sessionStorage.getItem('idUsuario')!);
      await this.metodosGlobales.update(this.registroForm.value, this.path_create_update);    

    } else {

      this.registroForm.value.idTipoInmueble = parseInt(this.registroForm.value.idTipoInmueble);
      this.registroForm.value.createTime = new Date();
      this.registroForm.value.updateTime = new Date();
      await this.metodosGlobales.create(this.registroForm.value, this.path_create_update);

    }
    window.location.href = 'http://localhost:4200/inmuebles'
  }
}
