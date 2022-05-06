//Genericos
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

//Propios
import { inmuebleInterface } from 'src/app/interfaces/inmuebles';
import { Globales } from 'src/app/Globales.service';

@Component({
  selector: 'app-registro_inmueble',
  templateUrl: './registro_inmueble.component.html',
  styleUrls: ['./registro_inmueble.component.css']
})
export class Registro_inmuebleComponent implements OnInit {

  registroForm: FormGroup;
  arrListaInmuebles: inmuebleInterface[];
  path: string;

  constructor(
    private metodosGlobales: Globales,
    private activateRouter: ActivatedRoute
  ) {
    this.path = 'Inmuebles'
    this.arrListaInmuebles = [];
    this.registroForm = new FormGroup({
      idInmueble: new FormControl(),
      alias: new FormControl(),
      refCatastral: new FormControl(),
      localidad: new FormControl(),
      direccion: new FormControl(),
      cp: new FormControl(),
      borrado: new FormControl(),
    })
  }

  async ngOnInit() {
    this.arrListaInmuebles = await this.metodosGlobales.getAll(this.path);
    this.registroForm.patchValue(this.arrListaInmuebles[3])
  }
  async enviar() {
    if (this.registroForm.value.idInmueble != 0) {
      await this.metodosGlobales.update(this.registroForm.value, this.path);
    } else {
      await this.metodosGlobales.create(this.registroForm.value, this.path);
    }
  }
}
