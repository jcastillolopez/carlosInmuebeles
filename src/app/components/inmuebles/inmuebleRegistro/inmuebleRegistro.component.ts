import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators, FormsModule } from '@angular/forms';
import { Globales } from 'src/app/services/Globales.service';
import { tiposService } from 'src/app/services/tipos.service';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'inmueblesRegistro',
  templateUrl: './inmuebleRegistro.component.html',
  styleUrls: ['./inmuebleRegistro.component.css']
})
export class InmueblesRegistroComponent implements OnInit {

  @Input()
  idInmueble: string;
  arrSelectTipos: any[];
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

    this.arrSelectTipos = [];
    this.registroForm = new FormGroup({
      idInmueble: new FormControl(),
      tipoInmueblesId: new FormControl('', [
        Validators.required]),
      alias: new FormControl('', [
        Validators.required]),
      refCatastral: new FormControl('', [
        Validators.required]),
      localidad: new FormControl('', [
        Validators.required]),
      direccion: new FormControl('', [
        Validators.required]),
      codigoPostal: new FormControl('', [
        Validators.required,
        Validators.maxLength(5),
        Validators.minLength(5),
      ]),
      administradorId: new FormControl(parseInt(sessionStorage.getItem('administradorId')!)),
      usuarioId: new FormControl(parseInt(sessionStorage.getItem('idUsuario')!)),
      borrado: new FormControl(),
      createTime: new FormControl(),
      updateTime: new FormControl(),
      planta: new FormControl(),
      nhabitaciones: new FormControl(),
      mcuadrados: new FormControl(),
      nbanos: new FormControl(),

    })
  }

  async ngOnInit() {
    this.arrSelectTipos = await this.metodosTipos.getAllTipos(environment.APIPATH_TIPOINMUEBLE + 0);
    this.activateRouter.params.subscribe(async params => {
      if (params['id']) {
        let response = await this.metodosGlobales.getById(environment.APIPATH_INMUEBLEDETALLE, params['id']);
        this.registroForm.patchValue(response[0])
      }
    })
  }

  async enviar() {
    if (this.registroForm.value.idInmueble !== null) {

      this.registroForm.value.idTipoInmueble = parseInt(this.registroForm.value.idTipoInmueble);
      this.registroForm.value.updateTime = new Date();
      this.registroForm.value.usuarioId = parseInt(sessionStorage.getItem('idUsuario')!);
      await this.metodosGlobales.update(this.registroForm.value, environment.APIPATH_INMUEBLE);

    } else {

      this.registroForm.value.idTipoInmueble = parseInt(this.registroForm.value.idTipoInmueble);
      this.registroForm.value.createTime = new Date();
      this.registroForm.value.updateTime = new Date();
      await this.metodosGlobales.create(this.registroForm.value, environment.APIPATH_INMUEBLE);

    }
    window.location.reload();
  }
  checkError(fieldName: string, errorType: string) {
    return this.registroForm.get(fieldName).hasError(errorType) && this.registroForm.get(fieldName).touched
  }
}
