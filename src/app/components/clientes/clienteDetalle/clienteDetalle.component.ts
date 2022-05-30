import { Component, OnInit } from '@angular/core';
import { Globales } from 'src/app/services/Globales.service';
import { clienteInterface } from 'src/app/interfaces/clientes'
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'clienteDetalle',
  templateUrl: './clienteDetalle.component.html',
  styleUrls: ['./clienteDetalle.component.css']
})


export class ClienteDetalleComponent implements OnInit {
  cliente: clienteInterface

  constructor(
    private metodoGlobales:Globales,
    private activateRouter: ActivatedRoute) {

    this.cliente = {
      nombre: "",
      apellidos: "",
      fechaNacimiento: new Date(),
      nie: "",
      email: "",
      tlf: "",
      tlfMovil: "",
      localidad: "",
      direccion: "",
      codigoPostal: "",
      borrado: false,
      id: 0,
     
    }
  }

  ngOnInit() {
    this.activateRouter.params.subscribe(async params => {
      let response = await this.metodoGlobales.getById(environment.APIPATH_CLIENTEDETALLE,params['id'])
      this.cliente = response[0]
    })
  }
  
}

