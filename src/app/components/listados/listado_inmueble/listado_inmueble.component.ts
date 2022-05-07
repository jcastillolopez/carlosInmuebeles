import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { inmuebleInterface } from 'src/app/interfaces/inmuebles';
import { Globales } from 'src/app/services/Globales.service';
import { tiposService } from 'src/app/services/tipos.service';


@Component({
  selector: 'app-listado_inmueble',
  templateUrl: './listado_inmueble.component.html',
  styleUrls: ['./listado_inmueble.component.css'],
})
export class Listado_inmuebleComponent implements OnInit {

  //paths
  path: string;
  path_lista: string;
  path_create_update: string;


  //Formulario Modal
  registroForm: FormGroup;
  inmuebleform: inmuebleInterface;
  arrSelectTipos: any[];

  //Tabla para la lista
  arrListaInmuebles: any[];

  constructor(
    private metodosGlobales: Globales,
    private metodosTipos: tiposService,
    private activateRouter: ActivatedRoute
  ) {
    //Paths APIS CARLOS
    this.path = 'Inmuebles/';
    this.path_lista = 'Inmuebles/detalle/'
    this.path_create_update = 'Inmuebles/'

    //Tabla para la lista
    this.arrListaInmuebles = [];

    //Formulario Modal
    this.arrSelectTipos = [];
    this.inmuebleform = {
      idInmueble: 0,
      idTipoInmueble: 0,
      tipoInmueble: '',
      alias: '',
      refCatastral: '',
      localidad: '',
      direccion: '',
      codigoPostal: 0,
      usuario_id: 0,
      borrado: false,
      idAdministrador: 0,
    };
    this.registroForm = new FormGroup({
      idInmueble: new FormControl(),
      idTipoInmueble: new FormControl(),
      alias: new FormControl(),
      refCatastral: new FormControl(),
      localidad: new FormControl(),
      direccion: new FormControl(),
      codigoPostal: new FormControl(),
      idAdministrador: new FormControl(),
      borrado: new FormControl(),
    })

  }

  async ngOnInit() {
    
    this.arrSelectTipos = await this.metodosTipos.getAllTipos('Inmuebles');
    this.arrListaInmuebles = await this.metodosGlobales.getById(this.path, 1);
    for (const inmueble of this.arrListaInmuebles) {
      for (const tipos of this.arrSelectTipos) {
        if (tipos.idTipoInmueble == inmueble.idTipoInmueble) {
          inmueble.tipoInmueble = tipos.tipoInmueble;
        }
      }
    }
  }

  public crear() {
    
  }

  async detalle(inmueble: any) {
    this.registroForm.patchValue(inmueble);
    this.arrSelectTipos = await this.metodosTipos.getAllTipos('Inmuebles');
  }

  async enviar() {
    console.log(this.registroForm.value.idInmueble)
    if (this.registroForm.value.idInmueble != 0) {
      await this.metodosGlobales.update(this.registroForm.value, this.path_create_update);
    } else {
      await this.metodosGlobales.create(this.registroForm.value, this.path_create_update);
    }
    window.location.reload();
  }

}
